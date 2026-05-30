import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
    ScrollView,
    TextInput
} from 'react-native';
import { createStyles } from './styles';
import { themes, useTheme } from '../../global/themes';

import { getPatients } from '../../services/patientService';
import { RootStackParamList } from '../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Assessment, AssessmentDrug, Drug, Patient } from '../../database/entities';

export default function AssessmentRegisterScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'CreateAssessments'>> ();
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const theme = useTheme();
    const styles = createStyles(theme)

    // function handleRegisterPatient() {

    //     if (
    //         !nome.trim() ||
    //         !idade.trim() ||
    //         !sexo.trim()
    //     ) {
    //         Alert.alert(
    //             'Campos obrigatórios',
    //             'Preencha todos os campos.'
    //         );

    //         return;
    //     }

    //     const idadeNumero = Number(idade);

    //     if (isNaN(idadeNumero) || idadeNumero <= 0) {
    //         Alert.alert(
    //             'Idade inválida',
    //             'Informe uma idade válida.'
    //         );

    //         return;
    //     }

    //     const newPatient = {
    //         id: Date.now(),
    //         nome: nome.trim(),
    //         idade: idadeNumero,
    //         sexo: sexo.trim(),
    //     };

    //     savePatient(newPatient);

    //     Alert.alert(
    //         'Sucesso',
    //         'Paciente cadastrado com sucesso.'
    //     );

    //     navigation.reset({
    //       index: 0,
    //       routes: [{name: "ListPatients"}],
    //     })

    //     //clearFields();
    // }

    // function clearFields() {
    //     setNome('');
    //     setIdade('');
    //     setSexo('');
    // }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.header}>
                <Text style={styles.title}>
                    Cadastro de Avaliações
                </Text>

                <Text style={styles.subtitle}>
                    Preencha os dados da avaliação
                </Text>
            </View>

            <View style={styles.form}>

                {/* <Text style={styles.label}>
                    Nome
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do paciente"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.label}>
                    Idade
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite a idade"
                    keyboardType="numeric"
                    value={idade}
                    onChangeText={setIdade}
                />

                <Text style={styles.label}>
                    Sexo
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Masculino / Feminino"
                    value={sexo}
                    onChangeText={setSexo}
                />

                <TouchableOpacity
                    style={styles.button}
                    // onPress={handleRegisterPatient}
                >
                    <Text style={styles.buttonText}>
                        Cadastrar Paciente
                    </Text>
                </TouchableOpacity> */}

            </View>

        </ScrollView>
    );
}