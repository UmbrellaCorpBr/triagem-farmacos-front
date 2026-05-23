import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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
        shadowOffset: {
            width: 0,
            height: 2,
        },
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

});

export default styles;