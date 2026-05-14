import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../pages/Login';
import InitialPageScreen from '../pages/initialPage';

export type RootStackParamList = {
    Login: undefined;
    InitialPage: undefined;
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
        </Stack.Navigator>
    )
}