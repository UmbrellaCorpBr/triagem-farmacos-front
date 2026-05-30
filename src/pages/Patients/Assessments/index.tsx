import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';
import { getPatientAssessments } from '../../../services/assessmentService';
import { AssessmentWithDrugs } from '../../../database/entities';
import { classifyAssessmentRisk } from '../../../services/riskClassifier';
import { useTheme } from '../../../global/themes';
import { createStyles } from './styles';

function formatDate(isoString: string): string {
    const date = new Date(isoString);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function formatUseUntil(value: string | null): string {
    if (!value) return 'Uso contínuo';
    const [yyyy, mm, dd] = value.split('-');
    return `${dd}/${mm}/${yyyy}`;
}

export default function PatientAssessmentsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'PatientAssessments'>>();
    const route = useRoute<RouteProp<RootStackParamList, 'PatientAssessments'>>();
    const { patientId, patientName } = route.params;

    const theme = useTheme();
    const styles = createStyles(theme);

    const [assessments, setAssessments] = useState<AssessmentWithDrugs[]>([]);

    useEffect(() => {
        setAssessments(getPatientAssessments(patientId));
    }, [patientId]);

    function renderAssessment({ item }: { item: AssessmentWithDrugs }) {
        const risk = classifyAssessmentRisk(item.drugs);
        return (
            <View style={styles.card}>
                <View style={styles.cardTopRow}>
                    <Text style={styles.cardDate}>{formatDate(item.created_at)}</Text>
                    <View style={[styles.riskBadge, styles[`risk_${risk.level}` as keyof typeof styles]]}>
                        <Text style={styles.riskBadgeText}>{risk.label}</Text>
                    </View>
                </View>
                <Text style={styles.riskReason}>{risk.reason}</Text>

                {item.drugs.map(drug => (
                    <View key={drug.id} style={styles.drugItem}>
                        <View style={styles.drugHeader}>
                            <Text style={styles.drugName}>{drug.drug_name}</Text>
                            <Text style={styles.drugType}>{drug.drug_type}</Text>
                        </View>
                        <View style={styles.drugDetails}>
                            <Text style={styles.drugDetail}>Grupo de risco: {drug.risk_group}</Text>
                            <Text style={styles.drugDetail}>Dosagem: {drug.dosage}</Text>
                            <Text style={styles.drugDetail}>Frequência: {drug.use_frequency}</Text>
                            <Text style={[
                                styles.drugDetail,
                                !drug.use_until && styles.continuousUse,
                            ]}>
                                Usar até: {formatUseUntil(drug.use_until)}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backButtonText}>← Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.newButton}
                        onPress={() => navigation.navigate('CreateAssessments', { patientId })}
                    >
                        <Text style={styles.newButtonText}>+ Nova Avaliação</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>{patientName}</Text>
                <Text style={styles.subtitle}>
                    {assessments.length === 0
                        ? 'Nenhuma avaliação registrada'
                        : `${assessments.length} avaliaç${assessments.length > 1 ? 'ões' : 'ão'}`}
                </Text>
            </View>

            {assessments.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Nenhuma avaliação encontrada para este paciente.</Text>
                </View>
            ) : (
                <FlatList
                    data={assessments}
                    keyExtractor={item => String(item.id)}
                    renderItem={renderAssessment}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                />
            )}
        </SafeAreaView>
    );
}
