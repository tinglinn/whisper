import React from "react";
import { Text, View, Pressable, StyleSheet } from 'react-native';
import Themes from '../../assets/Themes/index';

function NextButton({ navigation, screenName, params, active, warning }) {
    let button = null;
    if (active) { 
        button = <View style={styles.container}>< Pressable onPress = {() => navigation.navigate(screenName, params)}>
            <View style={styles.activeButton} >
            <Text style={styles.buttontext}>Next</Text></View>
        </Pressable ></View>
    } else {
        button = <View style={styles.container}>
                    < Pressable disabled={true} onPress={() => navigation.navigate({ screenName })}>
                        <View style={styles.inactiveButton} >
                        <Text style={styles.buttontext}>Next</Text></View>
            </Pressable >
            <Text style={styles.warning}>{warning} to continue </Text>
                </View>
    }
    return (
        button
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    activeButton: {
        width: 120,
        marginTop: 20,
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: Themes.colors.purple,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveButton: {
        width: 120,
        marginTop: 20,
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: Themes.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
    },
    warning: {
        color: Themes.colors.red,
        fontFamily: 'Poppins',
        fontSize: 16,
    }
})

export default NextButton;