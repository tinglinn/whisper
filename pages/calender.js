import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import React, { useState } from "react";
import Header from '../components/header';
import Themes from '../assets/Themes/index';

const windowWidth = Dimensions.get('window').width;

function Button({text}) {
    return (
        <Pressable>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </Pressable>
    )
}

function Calendar() {
    return (
        <View style={styles.screen}>
            <Header text={"events"} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.importText}>Import events from an external calendar:</Text>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 20, paddingBottom: 20}}>
                        <Button text={"Apple Calendar"} />
                        <Button text={"Google Calendar"} />
                        <Button text={"Outlook Calendar"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Calendar;
const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Themes.colors.white,
    },
    container: {
        flex: 1,
        width: '100%',
        marginTop: windowWidth * 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '80%',
        height: '60%',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Themes.colors.background,
        borderRadius: 5,
        margin: 20,
    },
    importText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: Themes.colors.darkgray,
        textAlign: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: Themes.colors.darkgray,
        width: 160,
        height: 40,
    },
    buttonText: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: Themes.colors.white,
    }
});