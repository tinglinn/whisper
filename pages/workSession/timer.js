import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useTimer, useStopwatch } from 'react-timer-hook';
import React, { useState } from "react";
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import BackButton from '../createtask/backButton';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

function Timer({ route, navigation }) {
    console.log("in timer", route.params);
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });
    
    const { task, goal } = route.params;
    let newGoal = goal;
    if (newGoal == null) {
        newGoal = "No goal has been set";
    } else {
        newGoal = "Goal: " + goal;
    }
    console.log(newGoal);
    let statusIcon = isRunning ? "pause-circle" : "play-circle";
    
    return (
        <View style={styles.screen}>
            <Header text={task} />
            <View style={styles.container}>
                <Text style={styles.goal}>{newGoal}</Text>
                <View style={{ marginTop: 40, marginBottom: 150 }}>
                    <Text style={styles.timer}>{JSON.stringify(hours).padStart(2, "0")}:{JSON.stringify(minutes).padStart(2, "0")}:{JSON.stringify(seconds).padStart(2, "0")}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={isRunning ? pause : start}>
                        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name={statusIcon} color={Themes.colors.purple} size={60} />
                            <Text style={styles.buttonText}>{isRunning ? "Pause" : "Resume"}</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("TasksOverview")}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="check-circle" color={Themes.colors.purple} size={60} />
                            <Text style={styles.buttonText}>Finish Session</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

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
        marginTop: windowWidth * 0.4,
        paddingTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '85%',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 12,
        margin: 20,
    },
    timer: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 60,
        color: Themes.colors.darkgray,
        textAlign: 'center'
    },
    goal: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Themes.colors.darkgray,
        textAlign: 'center',
    },
    buttonsContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: "Poppins",
        fontSize: 16,
        color: Themes.colors.darkgray,
    }
});

export default Timer;