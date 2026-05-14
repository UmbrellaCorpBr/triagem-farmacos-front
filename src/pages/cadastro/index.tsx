import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    TouchableOpacity,
} from 'react-native';

import { useTheme } from '../../global/themes';

const CadastroScreen = () => {
    const theme = useTheme();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    const handleCadastro = () => {
        if (
            !nome.trim() ||
            !email.trim() ||
            !senha.trim() ||
            !confirmacaoSenha.trim()
        ) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }
        if (senha !== confirmacaoSenha) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    };
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.colors.background },
            ]}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
                Cadastro
            </Text>
            <View style={styles.formContainer}>
                <Text style={[styles.label, { color: theme.colors.text }]}>
                    Nome
                </Text>
                <TextInput
                    style={[
                        styles.input,
                        {
                            backgroundColor: theme.colors.inputBackground,
                            color: theme.colors.text,
                        },
                    ]}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#999"
                />

                <Text style={[styles.label, { color: theme.colors.text }]}>
                    Email
                </Text>

                <TextInput
                    style={[
                        styles.input,
                        {
                            backgroundColor: theme.colors.inputBackground,
                            color: theme.colors.text,
                        },
                    ]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={[styles.label, { color: theme.colors.text }]}>
                    Senha
                </Text>

                <TextInput
                    style={[
                        styles.input,
                        {
                            backgroundColor: theme.colors.inputBackground,
                            color: theme.colors.text,
                        },
                    ]}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                />
                <Text style={[styles.label, { color: theme.colors.text }]}>
                    Confirmar senha
                </Text>
                <TextInput
                    style={[
                        styles.input,
                        {
                            backgroundColor: theme.colors.inputBackground,
                            color: theme.colors.text,
                        },
                    ]}
                    value={confirmacaoSenha}
                    onChangeText={setConfirmacaoSenha}
                    secureTextEntry
                    placeholder="Confirme sua senha"
                    placeholderTextColor="#999"
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={handleCadastro}
                    >
                        <Text style={styles.primaryButtonText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => {
                            setNome('');
                            setEmail('');
                            setSenha('');
                            setConfirmacaoSenha('');
                        }}
                    >
                        <Text style={styles.secondaryButtonText}>
                            Cancelar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
    },

    formContainer: {
        width: '100%',
    },

    label: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 6,
    },

    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 14,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 16,
    },

    buttonContainer: {
        marginTop: 12,
    },

    primaryButton: {
        height: 52,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F46E5',
        marginBottom: 12,
    },

    secondaryButton: {
        height: 52,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E7EB',
    },

    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    secondaryButtonText: {
        color: '#111827',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CadastroScreen;