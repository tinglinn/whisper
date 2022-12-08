import React from "react";
import { Text, View, Pressable, StyleSheet } from 'react-native';
import Themes from '../../assets/Themes/index';

function NextButton({ navigation, screenName, active }) {
    let button = null;
    if (active) {
        button = < Pressable onPress = {() => navigation.navigate(screenName)}>
            <View style={styles.activeButton} >
            <Text style={styles.buttontext}>Next</Text></View>
        </Pressable >
    } else {
        button = < Pressable onPress={() => navigation.navigate({ screenName })}>
                <View style={styles.inactiveButton} >
                <Text style={styles.buttontext}>Next</Text></View>
            </Pressable >
    }
    return (
        button
    );
}

const styles = StyleSheet.create({
    activeButton: {
        marginTop: 20,
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: Themes.colors.purple,
    },
    inactiveButton: {
        marginTop: 20,
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: Themes.colors.background,
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
    },
})

export default NextButton;