import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import React, { ReactNode, SyntheticEvent } from "react";
import Header from '../components/header';
import Themes from '../assets/Themes/index';
// import ApiCalendar from 'react-google-calendar-api';
// import RNCalendarEvents from "react-native-calendar-events";
// import * as Calendar from 'expo-calendar';

const windowWidth = Dimensions.get('window').width;

const config = {
    "clientId": "863454737592-5dlkmdvar9p7q8qqrnt5ctk0upu0i64d.apps.googleusercontent.com",
    "apiKey": "AIzaSyDeDbYeC8L0G3bI8Jf2R8B4Mk1mDG0eRj8",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
}

//const apiCalendar = new ApiCalendar(config)

function Button({text}) {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}


function CalendarScreen() {
    return (
        <View style={styles.screen}>
            <Header text={"events"} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.importText}>Import events from an external calendar:</Text>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 20, paddingBottom: 20}}>
                        <Pressable><Button text={"Apple Calendar"} /></Pressable>
                        <Pressable>
                            <Button text={"Google Calendar"} />
                        </Pressable>
                        <Button text={"Outlook Calendar"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CalendarScreen;
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