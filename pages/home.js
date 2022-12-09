import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
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
                <View style={{paddingLeft: 20, paddingRight: 20}}>
                    <Text style={styles.greetingText}>{greetingText}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

function TaskCard({ task }) {
    return (
        <View style={{
            width: '90%', height: 50, marginBottom: 20, paddingLeft: 18,
            backgroundColor: Themes.colors.purple, borderRadius: 8,
            justifyContent: 'center'
        }}>
            <Text style={styles.tasksText}>{task}</Text>
        </View>
    )
}
function Tasks({navigation}) {
    return (
        <View style={styles.tasks}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>your tasks</Text>
                <Pressable onPress={() => navigation.navigate("Tasks")}><MaterialCommunityIcons name="arrow-right-circle" color={Themes.colors.darkgray} size={28} /></Pressable>
            </View>
            <View style={styles.taskList}>
                <TaskCard task={'CS106A'} />
                <TaskCard task={'Psych'} />
                <Pressable onPress={() => navigation.navigate('AddTasks')}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%', height: 50, marginBottom: 20, paddingLeft: 18,
                        backgroundColor: Themes.colors.background, borderRadius: 8,
                    }}>
                        <Text
                            style={{fontFamily: 'Poppins', fontSize: 24, color: Themes.colors.darkgray, textAlign: 'left',}}>
                            + add task
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}


                //<Text style={styles.tasksText}>CS106A</Text>
                //<Text style={styles.tasksText}>Psych</Text>
                //<Text style={styles.tasksText}>Taxes</Text>
function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.screen}>
            <Greeting greetingText={"good morning, Cole! only one more psych session to go!"} />
            <Tasks navigation={navigation} />
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
        flex: 1,
        width: '100%',
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
        marginBottom: 40,
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
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
        borderWidth: 0.1,
        borderColor: Themes.colors.darkgray
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    titleText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        color: Themes.colors.darkgray,
        textAlign: 'left',
    },
    taskList: {
        marginTop: 20,
        paddingBottom: 20
    },
    tasksText: {
        fontFamily: 'Poppins',
        fontSize: 24,
        lineHeight: 36,
        color: Themes.colors.white,
        textAlign: 'left',
    }
});

export default HomeScreen;