import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { createStyles } from './styles';
import { useTheme } from '../../../global/themes';

import { getPatients } from '../../../services/patientService';

import { RootStackParamList } from '../../../routes';

type Patient = {
    id: number;
    name: string;
    age: number;
    gender: string;
};

export default function PatientListScreen() {

    const [patients, setPatients] = useState<Patient[]>([]);

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

        return (

            <View
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

                    {/* BADGE */}
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

                </View>

            </View>
        );
    }

    return (

        <SafeAreaView style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <Text style={styles.title}>
                    Pacientes
                </Text>

                <Text style={styles.subtitle}>
                    Total cadastrados: {patients.length}
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

            {/* EMPTY STATE */}

            {patients.length === 0 ? (

                <View style={styles.emptyContainer}>

                    <Text style={styles.emptyText}>
                        Nenhum paciente cadastrado
                    </Text>

                </View>

            ) : (

                <FlatList
                    data={patients}
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

