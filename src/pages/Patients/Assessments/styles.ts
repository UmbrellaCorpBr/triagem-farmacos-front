import { StyleSheet } from 'react-native';
import type { Theme } from '../../../global/themes';

export const createStyles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },

    header: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 20,
    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },

    backButton: {},

    backButtonText: {
        fontSize: 15,
        color: '#2563EB',
        fontWeight: '500',
    },

    newButton: {
        backgroundColor: '#2563EB',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
    },

    newButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E293B',
    },

    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#64748B',
    },

    list: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },

    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },

    cardDate: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1E293B',
    },

    riskBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    },

    risk_green: {
        backgroundColor: '#DCFCE7',
    },

    risk_yellow: {
        backgroundColor: '#FEF9C3',
    },

    risk_red: {
        backgroundColor: '#FEE2E2',
    },

    riskBadgeText: {
        fontSize: 13,
        fontWeight: '700',
    },

    riskReason: {
        fontSize: 12,
        color: '#64748B',
        marginBottom: 12,
        fontStyle: 'italic',
    },

    drugItem: {
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        paddingTop: 10,
        marginTop: 6,
    },

    drugHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },

    drugName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0F172A',
        flex: 1,
    },

    drugType: {
        fontSize: 12,
        color: '#64748B',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
    },

    drugDetails: {
        gap: 2,
    },

    drugDetail: {
        fontSize: 13,
        color: '#475569',
    },

    continuousUse: {
        color: '#2563EB',
        fontWeight: '500',
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    emptyText: {
        fontSize: 15,
        color: '#94A3B8',
        textAlign: 'center',
    },
});
