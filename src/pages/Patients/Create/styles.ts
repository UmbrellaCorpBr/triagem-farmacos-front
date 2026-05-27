import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    /* FUNDO GERAL MAIS SUAVE */
    container: {
        flexGrow: 1,
        backgroundColor: '#d7e8fa',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 40,
    },

    /* HEADER LIMPO E PROFISSIONAL */
    header: {
        marginBottom: 28,
    },

    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#0F172A',
        letterSpacing: 0.3,
    },

    subtitle: {
        marginTop: 6,
        fontSize: 15,
        color: '#64748B',
        lineHeight: 20,
    },

    /* CARD MAIS LEVE (MENOS SOMBRA) */
    form: {
        backgroundColor: '#bbdafa',
        borderRadius: 20,
        padding: 20,

        borderWidth: 1,
        borderColor: '#E2E8F0',

        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,

        elevation: 3,
    },

    /* LABEL MAIS DISCRETA */
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: '#334155',
        marginBottom: 8,
        marginTop: 16,
    },

    /* INPUT MAIS “CALMO” */
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#e3eefa',
        borderRadius: 14,
        paddingHorizontal: 14,
        backgroundColor: '#e3eefa',
        fontSize: 15,
        color: '#0F172A',
    },

    inputFocus: {
        borderColor: '#2563EB',
        backgroundColor: '#EFF6FF',
    },

    /* SEXO MAIS SUAVE */
    genderContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 6,
    },

    genderButton: {
        flex: 1,
        height: 52,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#e3eefa',
        backgroundColor: '#e3eefa',
        justifyContent: 'center',
        alignItems: 'center',
    },

    genderButtonSelected: {
        backgroundColor: '#EFF6FF',
        borderColor: '#2563EB',
    },

    genderText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#475569',
    },

    genderTextSelected: {
        color: '#2563EB',
    },

    /* BOTÃO PRINCIPAL (AZUL MAIS SUAVE) */
    button: {
        backgroundColor: '#2563EB',
        height: 54,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,

        shadowColor: '#2563EB',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 8,

        elevation: 4,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 0.3,
    },

});

export default styles;