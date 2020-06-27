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
            <AppStack.Navigator>
                <AppStack.Screen name="login" component={Login} />
                <AppStack.Screen name="movimentos" component={Movimentos} />
                <AppStack.Screen name="lancamentos" component={Lancamentos} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}