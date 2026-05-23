import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../pages/Login';
import InitialPageScreen from '../pages/initialPage';
import List from '../pages/Patients/List';

export type RootStackParamList = {
    Login: undefined;
    InitialPage: undefined;
    ListPatients: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(){
    return (
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{headerShown: false}}
            >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="InitialPage" component={InitialPageScreen}/>
            <Stack.Screen name="ListPatients" component={List}/>
        </Stack.Navigator>
    )
}