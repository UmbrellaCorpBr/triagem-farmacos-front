import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { createStyles } from './styles';
import { useTheme } from '../../../global/themes';

import { getPatients } from '../../../services/patientService';
import { RootStackParamList } from '../../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Patient = {
    id: number;
    name: number;
    age: number;
    gender: string;
};

export default function PatientListScreen() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ListPatients'>>();
    const theme = useTheme();
    const styles = createStyles(theme);

    function loadPatients() {
        const data = getPatients() as Patient[];
        setPatients(data);
    }

    function handleNavigateToCreate() {
        console.log('Navegando para a tela de criação de paciente');
        navigation.navigate('CreatePatients');
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

            <TouchableOpacity style={styles.button} onPress={handleNavigateToCreate}>
                <Text style={styles.buttonText}>
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
                                    Nome: {item.name}
                                </Text>

                                <Text style={styles.patientData}>
                                    Idade: {item.age}
                                </Text>

                                <Text style={styles.patientData}>
                                    Gênero: {item.gender}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}