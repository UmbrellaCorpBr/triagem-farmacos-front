import { StyleSheet } from 'react-native';
import type { Theme } from '../../global/themes';


export const createStyles = (theme: Theme) =>
 StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: theme.colors.background,
   },
   headerTitle: {
     fontSize: 28,
     fontWeight: 'bold',
     paddingHorizontal: 24,
     paddingTop: 60,
     paddingBottom: 16,
     color: theme.colors.text,
   },
   listContent: {
     paddingHorizontal: 24,
     paddingBottom: 24,
     gap: 12,
   },
   card: {
    // backgroundColor: '#16B85E',
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 22,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
   },
    textContainer: {
    flex: 1,
   },
    title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
   },
    description: {
    color: '#F5F5F5',
    fontSize: 15,
   },
    bold: {
    fontWeight: '700',
   },
   cardLeft: {
     flex: 1,
     marginRight: 12,
   },
   cardName: {
     fontSize: 18,
     fontWeight: '700',
     textTransform: 'capitalize',
     marginBottom: 8,
     color: theme.colors.text,
   },
   typeContainer: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     gap: 6,
   },
   typeBadge: {
     backgroundColor: theme.colors.accent,
     borderRadius: 999,
     paddingHorizontal: 10,
     paddingVertical: 4,
   },
   typeText: {
     fontSize: 12,
     fontWeight: '700',
     textTransform: 'capitalize',
     color: '#fff',
   },
   cardImage: {
     width: 72,
     height: 72,
   },
   buttonLogout: {
     position: 'absolute',
     top: 60,
     right: 24,
     backgroundColor: theme.colors.accent,
     paddingHorizontal: 12,
     paddingVertical: 6,
     borderRadius: 8,
   },
   buttonLogoutText: {
     color: theme.colors.text,
     fontSize: 14,
   },
  actionsRow: {
     flexDirection: 'row',
     gap: 10,
     paddingHorizontal: 24,
     marginBottom: 12,
   },
   actionButton: {
     flex: 1,
     height: 42,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
   },
   favoritesButton: {
     backgroundColor: '#2563eb', // azul
   },
   actionButtonText: {
     color: '#fff',
     fontWeight: '700',
     fontSize: 13,
   },
 });