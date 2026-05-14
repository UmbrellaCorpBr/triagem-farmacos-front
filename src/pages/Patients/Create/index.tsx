import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';

import styles from './styles';

import { savePatient } from '../../../services/patientService';

export default function PatientRegisterScreen() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

    function handleRegisterPatient() {

        if (
            !nome.trim() ||
            !idade.trim() ||
            !sexo.trim()
        ) {
            Alert.alert(
                'Campos obrigatórios',
                'Preencha todos os campos.'
            );

            return;
        }

        const idadeNumero = Number(idade);

        if (isNaN(idadeNumero) || idadeNumero <= 0) {
            Alert.alert(
                'Idade inválida',
                'Informe uma idade válida.'
            );

            return;
        }

        const newPatient = {
            id: Date.now(),
            nome: nome.trim(),
            idade: idadeNumero,
            sexo: sexo.trim(),
        };

        savePatient(newPatient);

        Alert.alert(
            'Sucesso',
            'Paciente cadastrado com sucesso.'
        );

        clearFields();
    }

    function clearFields() {
        setNome('');
        setIdade('');
        setSexo('');
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.header}>
                <Text style={styles.title}>
                    Cadastro de Paciente
                </Text>

                <Text style={styles.subtitle}>
                    Preencha os dados do paciente
                </Text>
            </View>

            <View style={styles.form}>

                <Text style={styles.label}>
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
                    onPress={handleRegisterPatient}
                >
                    <Text style={styles.buttonText}>
                        Cadastrar Paciente
                    </Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}