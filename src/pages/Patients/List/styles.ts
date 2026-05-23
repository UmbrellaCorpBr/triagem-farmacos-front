import { StyleSheet } from 'react-native';
import type { Theme } from '../../../global/themes';

export const createStyles = (theme: Theme) => StyleSheet.create({
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

    patientData: {
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