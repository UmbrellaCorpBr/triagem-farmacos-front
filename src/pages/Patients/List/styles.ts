
import { StyleSheet } from 'react-native';
import type { Theme } from '../../../global/themes';

export const createStyles = (theme: Theme) =>
    StyleSheet.create({

        /* CONTAINER */

        container: {
            flex: 1,
            backgroundColor: '#F5F7FA',
            paddingHorizontal: 20,
            paddingTop: 10,
        },

        /* HEADER */

        header: {
            marginBottom: 24,
        },

        backButton: {
            marginBottom: 8,
        },

        backButtonText: {
            fontSize: 15,
            color: '#2563EB',
            fontWeight: '500',
        },

        title: {
            fontSize: 32,
            fontWeight: '800',
            color: '#1E293B',
        },

        subtitle: {
            marginTop: 6,
            fontSize: 15,
            color: '#8B95A7',
        },

        /* BUTTON */

        button: {
            height: 56,
            backgroundColor: '#2563EB',

            borderRadius: 18,

            justifyContent: 'center',
            alignItems: 'center',

            marginBottom: 24,

            shadowColor: '#2563EB',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.35,
            shadowRadius: 10,

            elevation: 6,
        },

        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '700',
        },

        /* CARD */

        card: {
            backgroundColor: '#bbdafa',

            borderRadius: 22,

            padding: 18,

            marginBottom: 18,

            borderWidth: 1,
            borderColor: '#2A2F3A',

            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,

            elevation: 5,
        },

        /* BORDA LATERAL */

        cardMale: {
            borderLeftWidth: 4,
            borderLeftColor: '#3B82F6',
        },

        cardFemale: {
            borderLeftWidth: 4,
            borderLeftColor: '#EC4899',
        },

        /* CONTEÚDO DO CARD */

        cardContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },

        leftContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        rightContent: {
            alignItems: 'flex-end',
            gap: 8,
        },

        /* AVATAR */

        avatar: {
            width: 58,
            height: 58,

            borderRadius: 29,

            justifyContent: 'center',
            alignItems: 'center',

            marginRight: 14,
        },

        avatarMale: {
            backgroundColor: '#2563EB',
        },

        avatarFemale: {
            backgroundColor: '#DB2777',
        },

        avatarText: {
            color: '#FFFFFF',
            fontSize: 22,
            fontWeight: '800',
        },

        /* TEXTOS */

        patientName: {
            fontSize: 20,
            fontWeight: '700',
            color: '#000000ff',
            marginBottom: 4,
        },

        patientAge: {
            fontSize: 16,
            color: '#000000ff',
            marginBottom: 6,
        },

        patientId: {
            fontSize: 14,
            color: '#000000ff',
            fontWeight: '600',
        },

        /* BADGE */

        genderBadge: {
            paddingHorizontal: 14,
            paddingVertical: 8,

            borderRadius: 999,
        },

        maleBadge: {
            backgroundColor: '#DBEAFE',
        },

        femaleBadge: {
            backgroundColor: '#FCE7F3',
        },

        genderText: {
            fontSize: 14,
            fontWeight: '800',
        },

        maleText: {
            color: '#2563EB',
        },

        femaleText: {
            color: '#DB2777',
        },

        filtersContainer: {
            flexDirection: 'row',
            gap: 8,
            paddingBottom: 16,
        },

        filterChip: {
            paddingHorizontal: 16,
            paddingVertical: 5,
            borderRadius: 999,
        },

        filterChipText: {
            fontSize: 13,
            fontWeight: '700',
        },

        riskBadge: {
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 999,
        },

        riskBadgeText: {
            fontSize: 14,
            fontWeight: '800',
        },

        /* EMPTY STATE */

        emptyContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        emptyText: {
            color: '#94A3B8',
            fontSize: 16,
        },

    });
