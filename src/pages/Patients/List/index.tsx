import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { createStyles } from './styles';
import { useTheme } from '../../../global/themes';

import { getPatients } from '../../../services/patientService';
import { Patient } from '../../../database/entities';
import { RootStackParamList } from '../../../routes';
import { RiskLevel } from '../../../services/riskClassifier';
import { getRiskBadgeStyle } from '../../../utils/riskBadge';

export default function PatientListScreen() {

    type FilterOption = RiskLevel | 'none' | null;

    const [patients, setPatients] = useState<Patient[]>([]);
    const [activeFilter, setActiveFilter] = useState<FilterOption>(null);

    const filteredPatients = patients.filter(p => {
        if (activeFilter === null) return true;
        if (activeFilter === 'none') return p.last_risk_level === null;
        return p.last_risk_level === activeFilter;
    });

    const filters: { label: string; value: FilterOption; bg: string; text: string; activeBg: string }[] = [
        { label: 'Todos', value: null, bg: '#E0EAFF', text: '#2563EB', activeBg: '#2563EB' },
        { label: 'Verde', value: 'green', bg: '#DCFCE7', text: '#15803D', activeBg: '#16A34A' },
        { label: 'Amarelo', value: 'yellow', bg: '#FEF9C3', text: '#A16207', activeBg: '#CA8A04' },
        { label: 'Vermelho', value: 'red', bg: '#FEE2E2', text: '#B91C1C', activeBg: '#DC2626' },
        { label: 'Sem avaliação', value: 'none', bg: '#dddedeff', text: '#64748B', activeBg: '#475569' },
    ];

    const navigation = useNavigation<
        NativeStackNavigationProp<
            RootStackParamList,
            'ListPatients'
        >
    >();

    const theme = useTheme();

    const styles = createStyles(theme);

    function loadPatients() {
        const data = getPatients() as Patient[];
        setPatients(data);
    }

    function handleNavigateToCreate() {
        navigation.navigate('CreatePatients');
    }

    useEffect(() => {
        loadPatients();
    }, []);

    function renderPatient({ item }: { item: Patient }) {

        const isMale = item.gender === 'M';
        const riskBadge = item.last_risk_level
            ? getRiskBadgeStyle(item.last_risk_level as RiskLevel)
            : null;

        return (

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('PatientAssessments', {
                    patientId: item.id,
                    patientName: item.name,
                })}
                style={[
                    styles.card,
                    isMale
                        ? styles.cardMale
                        : styles.cardFemale
                ]}
            >

                <View style={styles.cardContent}>

                    {/* LEFT SIDE */}
                    <View style={styles.leftContent}>

                        {/* AVATAR */}
                        <View
                            style={[
                                styles.avatar,
                                isMale
                                    ? styles.avatarMale
                                    : styles.avatarFemale
                            ]}
                        >
                            <Text style={styles.avatarText}>
                                {item.name.charAt(0).toUpperCase()}
                            </Text>
                        </View>

                        {/* INFOS */}
                        <View>

                            <Text style={styles.patientName}>
                                {item.name}
                            </Text>

                            <Text style={styles.patientAge}>
                                {item.age} anos
                            </Text>

                            <Text style={styles.patientId}>
                                ID #
                                {item.id
                                    .toString()
                                    .padStart(3, '0')}
                            </Text>

                        </View>

                    </View>

                    {/* RIGHT SIDE */}
                    <View style={styles.rightContent}>

                        <View
                            style={[
                                styles.genderBadge,
                                isMale
                                    ? styles.maleBadge
                                    : styles.femaleBadge
                            ]}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    isMale
                                        ? styles.maleText
                                        : styles.femaleText
                                ]}
                            >
                                {isMale ? 'Masc' : 'Fem'}
                            </Text>
                        </View>

                        {riskBadge && (
                            <View style={[styles.riskBadge, { backgroundColor: riskBadge.backgroundColor }]}>
                                <Text style={[styles.riskBadgeText, { color: riskBadge.textColor }]}>
                                    {riskBadge.label}
                                </Text>
                            </View>
                        )}

                    </View>

                </View>

            </TouchableOpacity>
        );
    }

    return (

        <SafeAreaView style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.title}>
                    Pacientes
                </Text>

                <Text style={styles.subtitle}>
                    {activeFilter === null
                        ? `Total cadastrados: ${patients.length}`
                        : `${filteredPatients.length} de ${patients.length} paciente${patients.length !== 1 ? 's' : ''}`}
                </Text>

            </View>

            {/* BUTTON */}

            <TouchableOpacity
                style={styles.button}
                onPress={handleNavigateToCreate}
                activeOpacity={0.8}
            >

                <Text style={styles.buttonText}>
                    + Novo Paciente
                </Text>

            </TouchableOpacity>

            {/* FILTROS */}

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, alignSelf: 'flex-start' }}
                contentContainerStyle={styles.filtersContainer}
            >
                {filters.map(filter => {
                    const isActive = activeFilter === filter.value;
                    return (
                        <TouchableOpacity
                            key={String(filter.value)}
                            activeOpacity={0.75}
                            onPress={() => setActiveFilter(filter.value)}
                            style={[
                                styles.filterChip,
                                { backgroundColor: isActive ? filter.activeBg : filter.bg },
                            ]}
                        >
                            <Text style={[
                                styles.filterChipText,
                                { color: isActive ? '#FFFFFF' : filter.text },
                            ]}>
                                {filter.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {/* EMPTY STATE */}

            {patients.length === 0 ? (

                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        Nenhum paciente cadastrado
                    </Text>
                </View>

            ) : filteredPatients.length === 0 ? (

                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        Nenhum paciente nesta categoria
                    </Text>
                </View>

            ) : (

                <FlatList
                    data={filteredPatients}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderPatient}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 30,
                    }}
                />

            )}

        </SafeAreaView>
    );
}

