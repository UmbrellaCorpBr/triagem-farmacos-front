import { StyleSheet } from 'react-native';
import type { Theme } from '../../global/themes';

export const createStyles = (theme: Theme) => StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 30,
    },

    header: {
        marginBottom: 32,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1E293B',
    },

    subtitle: {
        marginTop: 8,
        fontSize: 16,
        color: '#64748B',
    },

    form: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },

    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 8,
        marginTop: 14,
    },

    fieldLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: '#64748B',
        marginBottom: 6,
        marginTop: 12,
    },

    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        fontSize: 15,
        color: '#0F172A',
    },

    selector: {
        height: 52,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },

    selectorText: {
        fontSize: 15,
        color: '#94A3B8',
    },

    selectorTextSelected: {
        fontSize: 15,
        color: '#0F172A',
    },

    drugCard: {
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        padding: 14,
        marginTop: 12,
        backgroundColor: '#F8FAFC',
    },

    drugCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    drugSelector: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 10,
        paddingHorizontal: 14,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },

    removeButton: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#FEE2E2',
        justifyContent: 'center',
        alignItems: 'center',
    },

    removeButtonText: {
        color: '#DC2626',
        fontSize: 14,
        fontWeight: '600',
    },

    addDrugButton: {
        height: 48,
        borderWidth: 1.5,
        borderColor: '#2563EB',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        backgroundColor: '#EFF6FF',
    },

    addDrugButtonText: {
        color: '#2563EB',
        fontSize: 15,
        fontWeight: '600',
    },

    button: {
        backgroundColor: '#2563EB',
        height: 52,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },

    modalContainer: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 40,
        maxHeight: '60%',
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 16,
    },

    modalItem: {
        paddingVertical: 14,
    },

    modalItemText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#1E293B',
    },

    modalItemSub: {
        fontSize: 13,
        color: '#64748B',
        marginTop: 2,
    },

    separator: {
        height: 1,
        backgroundColor: '#F1F5F9',
    },

    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        gap: 10,
    },

    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#CBD5E1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    checkboxActive: {
        backgroundColor: '#2563EB',
        borderColor: '#2563EB',
    },

    checkmark: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '700',
    },

    toggleLabel: {
        fontSize: 14,
        color: '#334155',
        fontWeight: '500',
    },

    datePickerModal: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 32,
    },

    datePickerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },

    datePickerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B',
    },

    datePickerConfirm: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2563EB',
    },
});
