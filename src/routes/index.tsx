import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../pages/Login';
import CadastroScreen from '../pages/cadastro';
import List from '../pages/Patients/List';

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    List: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(){
    return (
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{headerShown: false}}
            >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Cadastro" component={CadastroScreen}/>
            <Stack.Screen name="List" component={List}/>
        </Stack.Navigator>
    )
}