import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Themes from '../assets/Themes/index';
import DropShadow from "react-native-drop-shadow";
import { supabase } from '../env/supabase';
import 'react-native-url-polyfill/auto'
import { LogBox } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);


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

function TaskCard({ task, navigation }) {
    return (
        <DropShadow style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3,
        }}>
            <Pressable onPress={() => navigation.navigate("Tasks", { screen: "SetGoal", params:{ name: task, page: "Home"}} )}>
                <View style={{
                    width: '90%', height: 50, marginBottom: 20, paddingLeft: 18,
                    backgroundColor: Themes.colors.purple, borderRadius: 8,
                    justifyContent: 'center'
                }}>
                    <Text style={styles.tasksText}>{task}</Text>
                </View>
            </Pressable>
        </DropShadow>
    )
}

function RenderTask(item, navigation) {
    return (
        <TaskCard task={item.Title} navigation={navigation} />
    )
}

function AddTask({ navigation }) {
    return (
        <Pressable onPress={() => navigation.navigate('AddTasks')}>
            <DropShadow style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3,
            }}><View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%', height: 50, marginBottom: 20, paddingLeft: 18,
                backgroundColor: Themes.colors.background, borderRadius: 8,
            }}>
                    <Text
                        style={{ fontFamily: 'Poppins', fontSize: 24, color: Themes.colors.darkgray, textAlign: 'left', }}>
                        + add task
                    </Text>
                </View>
            </DropShadow>
        </Pressable>
    )
}

function Tasks({ navigation }) {
    const [titles, setTitles] = useState([]) // store data

    useEffect(() => {
        fetchTasks()
    }, [titles])

    async function fetchTasks() {
        const { data, error } = await supabase
            .from("Tasks")
            .select("*")
        setTitles(data)
    } // populate titles with data

    const [display, setDisplay] = useState(false)
    let message = display ? <View style={styles.message}><Text style={styles.messageText}>Click on a task to begin a new session!</Text></View> : null;
    return (
        <View style={styles.tasks}>
            {message}
            <View style={styles.titleContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Text style={styles.titleText}>your tasks</Text>
                    <Pressable style={{marginLeft: 5}} onPress={() => setDisplay(!display)}><MaterialCommunityIcons name="information-outline" color={Themes.colors.darkgray} size={24} /></Pressable>
                </View>
                <Pressable onPress={() => navigation.navigate("TasksOverview")}><MaterialCommunityIcons name="arrow-right-circle" color={Themes.colors.darkgray} size={28} /></Pressable>
            </View>
            
            {/*<View style={styles.taskList}>
                <TaskCard task={'CS106A'} navigation={navigation} />
                <TaskCard task={'Psych'} navigation={navigation} />
            
                <AddTask navigation={navigation} />
              </View>*/}
            <ScrollView style={styles.taskList}>
                <FlatList style={{width: '100%'}}
                    data={titles}
                    renderItem={({ item }) => RenderTask(item, navigation)}
                    keyExtractor={(item, index) => index}
                    ListFooterComponent={<AddTask navigation={navigation} />}
                />
            </ScrollView>
        </View>
    )
}

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
    message: {
        marginLeft: 100,
        marginTop: 10,
        padding: 3,
        position: 'absolute',
        backgroundColor: Themes.colors.darkgray,
        borderRadius: 8,
        width: 250,
        height: 25,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        color: 'white'
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