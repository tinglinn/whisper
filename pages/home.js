import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Themes from '../assets/Themes/index';

function Reminder({reminderText}) {
    return (
        <View style={styles.reminder}>
            <MaterialCommunityIcons name="bell-outline" color={Themes.colors.purple} size={28} />
            <Text style={styles.reminderText}>{reminderText}</Text>
        </View>
    );
}

function Greeting({greetingText}) {
    return (
        <View style={styles.greetingContainer}>
            <LinearGradient colors={[Themes.colors.red, Themes.colors.mediumpurple, Themes.colors.lightpurple]} style={styles.gradient}>
                <Reminder reminderText={"Beach Trip starts in 2 hours!"}/>
                <View style={styles.reminderTextContainer}>
                    <Text style={styles.greetingText}>{greetingText}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

function Tasks() {
    return (
        <View style={styles.tasks}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>your tasks</Text>
                <MaterialCommunityIcons name="arrow-right-circle" color={Themes.colors.darkgray} size={34} />
            </View>
            <View style={styles.taskList}>
                <Text style={styles.tasksText}>CS106A</Text>
                <Text style={styles.tasksText}>Psych</Text>
                <Text style={styles.tasksText}>Taxes</Text>
                <Text
                    style={{
                        fontFamily: 'Poppins', fontSize: 24, color: Themes.colors.background, textAlign: 'left',
                    }}>
                    + Add task...
                </Text>
            </View>
        </View>
    )
}
function HomeScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <Greeting greetingText={"good morning, Cole! welcome back!"} />
            <Tasks/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greetingContainer: {
        width: '100%',
        height: '67%',
        marginBottom: 10,
    },
    greetingText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    },
    gradient: {
        flex: 1,
    },
    reminder: {
        position: 'relative',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 100,
        padding: 10,
        borderRadius: 10,
    },
    reminderText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Themes.colors.darkgray,
    },
    reminderTextContainer: {
        paddingLeft: 35,
        paddingRight: 35,
        textAlign: 'center',
        alignItems: 'center',
    },
    tasks: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 20,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
        borderWidth: 0.2,
        borderColor: Themes.colors.darkgray
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        color: Themes.colors.darkgray,
        textAlign: 'left',
    },
    taskList: {
        marginTop: 10,
        paddingLeft: 5,
    },
    tasksText: {
        fontFamily: 'Poppins',
        fontSize: 24,
        lineHeight: 36,
        color: Themes.colors.darkgray,
        textAlign: 'left',
    }
});

export default HomeScreen;