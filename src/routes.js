import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Movimentos from './pages/Movimentos';
import Lancamentos from './pages/Lancamentos';


export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Movimentos" component={Movimentos} />
                <AppStack.Screen name="Lancamentos" component={Lancamentos} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}