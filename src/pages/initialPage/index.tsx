import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createStyles } from './styles';
import { useTheme } from '../../global/themes';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { MaterialIcons } from '@expo/vector-icons'; // Or your preferred icon library

const TYPE_COLORS: Record<string, string> = {
 normal: '#A8A77A',
 fire: '#EE8130',
 water: '#6390F0',
 electric: '#F7D02C',
 grass: '#7AC74C',
 ice: '#96D9D6',
 fighting: '#C22E28',
 poison: '#A33EA1',
 ground: '#E2BF65',
 flying: '#A98FF3',
 psychic: '#F95587',
 bug: '#A6B91A',
 rock: '#B6A136',
 ghost: '#735797',
 dragon: '#6F35FC',
 dark: '#705746',
 steel: '#B7B7CE',
 fairy: '#D685AD',
};


export default function InitialPageScreen() {
 const theme = useTheme();
 const styles = createStyles(theme);
 const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'InitialPage'>>();

 function handleLogout() {
   navigation.reset({
     index: 0,
     routes: [{ name: "Login" }],
   })
 }

 function navigateToPatientsList(){
  navigation.navigate("ListPatients")
 }

 return (
   <View style={styles.container}>
     <Text style={styles.headerTitle}>Página Inicial</Text>
     <TouchableOpacity
       style={styles.buttonLogout}
       onPress={handleLogout}
     >
       <Text style={styles.buttonLogoutText}>Sair</Text>
     </TouchableOpacity>

    <View style={styles.container}>
     <TouchableOpacity
        style={[styles.card, { backgroundColor: '#2979FF' }]}
        activeOpacity={0.85}
        onPress={navigateToPatientsList}
        >
        <View style={styles.textContainer}>
            <Text style={styles.title}>Pacientes</Text>

            <Text style={styles.description}>
            Gerencie e cadastre <Text style={styles.bold}>pacientes</Text>
            </Text>
        </View>

        <MaterialIcons
            name="person"
            size={38}
            color="#FFF"
        />
     </TouchableOpacity>

    </View>
   </View>
 );
};