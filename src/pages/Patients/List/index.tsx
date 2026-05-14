import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { getPatients } from '../../../services/patientService';
import { RootStackParamList } from '../../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Patient = {
    id: number;
    nome: string;
    email: string;
};

export default function PatientListScreen() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'List'>>();


    function loadPatients() {
        const data = getPatients() as Patient[];
        setPatients(data);
    }

    function handleNavigateToCreate() {
        console.log('Navegando para a tela de criação de paciente');
        navigation.navigate('Create');
    }

    useEffect(() => {
        loadPatients();
    }, []);


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>
                    Pacientes
                </Text>

                <Text style={styles.subtitle}>
                    Total cadastrados: {patients.length}
                </Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleNavigateToCreate}>
                    + Novo Paciente
                </Text>
            </TouchableOpacity>

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
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View>
                                <Text style={styles.patientName}>
                                    {item.nome}
                                </Text>

                                <Text style={styles.patientEmail}>
                                    {item.email}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 20,
        paddingTop: 60,
    },

    header: {
        marginBottom: 24,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E293B',
    },

    subtitle: {
        marginTop: 6,
        fontSize: 16,
        color: '#64748B',
    },

    button: {
        backgroundColor: '#2563EB',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },

    card: {
        backgroundColor: '#FFF',
        padding: 18,
        borderRadius: 14,
        marginBottom: 14,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 3,
    },

    patientName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0F172A',
    },

    patientEmail: {
        marginTop: 4,
        fontSize: 14,
        color: '#64748B',
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emptyText: {
        fontSize: 16,
        color: '#94A3B8',
    },
});