import { StyleSheet } from 'react-native';
import type { Theme } from '../../../global/themes';

export const createStyles = (theme: Theme) => StyleSheet.create({

    /* FUNDO GERAL */
    container: {
        flex: 1,
        backgroundColor: '#bbdafa',
        paddingHorizontal: 20,
        paddingTop: 60,
    },

    /* HEADER */
    header: {
        marginBottom: 22,
    },

    title: {
        fontSize: 30,
        fontWeight: '800',
        color: '#0F172A',
    },

    subtitle: {
        marginTop: 6,
        fontSize: 15,
        color: '#64748B',
    },

    /* BOTÃO PRINCIPAL */
    button: {
        backgroundColor: '#2563EB',
        height: 52,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

        shadowColor: '#2563EB',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
        elevation: 4,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.3,
    },

    /* CARD DO PACIENTE */
    card: {
        backgroundColor: '#e3eefa',
        padding: 18,
        borderRadius: 16,
        marginBottom: 14,

        borderWidth: 1,
        borderColor: '#E2E8F0',

        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },

    patientName: {
        fontSize: 18,
        fontWeight: '800',
        color: '#0F172A',
    },

    patientData: {
        marginTop: 6,
        fontSize: 14,
        color: '#64748B',
    },

    /* EMPTY STATE MAIS MODERNO */
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    emptyText: {
        fontSize: 15,
        color: '#94A3B8',
        textAlign: 'center',
        lineHeight: 22,
    },

});