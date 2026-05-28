import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../pages/Login';
import InitialPageScreen from '../pages/initialPage';
import PatientRegisterScreen from '../pages/Patients/Create';
import PatientListScreen from '../pages/Patients/List';
import AssessmentRegisterScreen from '../pages/Assessments';

export type RootStackParamList = {
    Login: undefined;
    InitialPage: undefined;
    ListPatients: undefined;
    CreatePatients: undefined;
    CreateAssessments: undefined;
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
            <Stack.Screen name="CreatePatients" component={PatientRegisterScreen}/>
            <Stack.Screen name="ListPatients" component={PatientListScreen}/>
            <Stack.Screen name="CreateAssessments" component={AssessmentRegisterScreen}/>
        </Stack.Navigator>
    )
}