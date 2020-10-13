import { routes } from './routes';
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { BaseRouter, NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {routes.map((route) => {
                    return (
                        <Stack.Screen name={route.name} component={route.component} />)
                })}
            </Stack.Navigator>
        </NavigationContainer>)
}


