import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Button } from 'react-native';
import Themes from '../assets/Themes/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Events from './calendar/events';
import Auth from './calendar/auth';

const Stack = createStackNavigator();

export default function CalendarScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Events" component={Events} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
