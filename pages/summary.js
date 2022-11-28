import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Button } from 'react-native';
import Themes from '../assets/Themes/index';
import Header from '../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SummaryOverview from './summary/summary-overview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SummaryScreen() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Overview' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Overview" component={SummaryOverview}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    time: {
        fontFamily: 'Poppins',
        fontSize: 24,
        color: Themes.colors.purple
    },
    statItem: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    stat: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Themes.colors.darkgray,
        textAlign: 'left',
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: Themes.colors.darkgray
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Themes.colors.white,
        width: '100%',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        marginBottom: 12,
    },
    boxBody: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'center',
        paddingTop: 25,
    },
    insightBox: {
        flexDirection: 'column',
        backgroundColor: Themes.colors.white,
        width: '100%',
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        marginBotton: 12,
    },
    menu: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
       marginBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Themes.colors.purple,
    },
});

export default SummaryScreen;

