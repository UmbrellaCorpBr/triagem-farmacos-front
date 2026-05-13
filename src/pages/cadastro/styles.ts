import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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