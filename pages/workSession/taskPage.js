import { Text, View, StyleSheet, FlatList,SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Themes from '../../assets/Themes';
import React, { useState, useEffect } from "react";
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'
import { LogBox } from 'react-native';
import DropShadow from "react-native-drop-shadow";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

const windowWidth = Dimensions.get('window').width;

const renderTask = ( item, navigation ) => (
    <TaskCard task={{ name: item.Title,
        session: { length: item.Minutes, total: item.NumSessions, completed: item.NumSessionsCompleted },
        timeDue: { date: item.Date, isDue: item.IsDue },
        isActive: item.IsActive
    }} navigation={navigation} />
  );

// each task should be
// task: {name: , session: {length: , total: , completed: }, timeDue: {date: , day: }}

function AddTaskButton({ navigation }) {
    return (
        <Pressable onPress={() => navigation.navigate("ScreenTaskType")}>
            <View style={{ backgroundColor: Themes.colors.darkgray, borderRadius: 6, padding: 10 }}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 20, color: 'white' }}>+ add task</Text>
            </View>
        </Pressable>
    )
}

function TaskCard({ task, navigation }) {
    let text = null;
    if (!task.isActive) {
        text = "resume";
    } else {
        text = "start";
    }
    let dueDate = task.timeDue.isDue ? task.timeDue.date : "no due date";
    
    if (task.isActive) {
        return (
            <DropShadow style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 1,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            }}>
                <View style={styles.box}>
                    <LinearGradient colors={[Themes.colors.lightpurple, Themes.colors.white]}>
                        <View style={styles.infoBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styles.title}>{task.name}</Text>
                                <Pressable onPress={() => navigation.navigate('MarkAsDone', { name: task.name })}>
                                    <MaterialCommunityIcons name="checkbox-blank-outline" size={28} color={Themes.colors.purple} />
                                </Pressable>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <View style={styles.infoLine}>
                                    <Feather name="clock" color={Themes.colors.purple} size={24} />
                                    <View style={{ marginLeft: 5 }}><Text style={styles.info}>{Math.floor(task.session.length / 60)}h {(task.session.length % 60)}m ({task.session.completed} of {task.session.total} sessions) </Text></View>
                                </View>
                                <View style={styles.infoLine}>
                                    <Feather name="calendar" color={Themes.colors.purple} size={24} />
                                    <View style={{ marginLeft: 5 }}><Text style={styles.info}>{dueDate}</Text></View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, marginRight: 10, marginBottom: 15, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable onPress={() => navigation.navigate('SetGoal', { name: task.name, page: "TasksOverview" })}>
                                <View style={{ width: 150, height: 45, backgroundColor: Themes.colors.purple, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: 18, paddingRight: 18 }}>
                                    <Feather name="play-circle" color='white' size={28} />
                                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white' }}>{text}</Text>
                                </View>
                            </Pressable>
                        </View>
                    </LinearGradient>
                </View>
            </DropShadow>
        );
    } else {
        return (
            <DropShadow style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 1,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            }}>
                <View style={styles.box}>
                    <LinearGradient colors={[Themes.colors.background, Themes.colors.darkgray]}>
                        <View style={{
                            height: 170,
                            flexDirection: 'column',
                            backgroundColor: Themes.colors.background,
                            width: '100%',
                            paddingTop: 20,
                            paddingLeft: 30,
                            paddingRight: 30,
                            paddingBottom: 20,
                            marginBotton: 20,
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styles.title}>{task.name}</Text>
                                <MaterialCommunityIcons name="checkbox-marked-outline" size={28} color={Themes.colors.darkgray}/>
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <View style={styles.infoLine}>
                                    <Feather name="clock" color={Themes.colors.darkgray} size={24} />
                                    <View style={{ marginLeft: 5 }}><Text style={styles.info}>{Math.floor(task.session.length / 60)}h {(task.session.length % 60)}m ({task.session.completed} of {task.session.total} sessions) </Text></View>
                                </View>
                                <View style={styles.infoLine}>
                                    <Feather name="calendar" color={Themes.colors.darkgray} size={24} />
                                    <View style={{ marginLeft: 5 }}><Text style={styles.info}> {dueDate}</Text></View>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, marginRight: 10, marginBottom: 15, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable onPress={() => setCheckIcon("checkbox-blank-outline")} onPressIn={() => navigation.navigate('SetGoal', { name: task.name })}>
                                <View style={{ width: 150, height: 45, backgroundColor: Themes.colors.darkgray, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: 18, paddingRight: 18 }}>
                                    <Feather name="play-circle" color='white' size={28} />
                                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white' }}>{text}</Text>
                                </View>
                            </Pressable>
                        </View>
                    </LinearGradient>
                </View>
            </DropShadow>
        );
    }
}
    
export default function TasksOverview({ navigation, route }) {
    const [titles, setTitles] = useState([]) // store data

    useEffect(() => {
    fetchTasks()
    //console.log(titles);
  }, [titles])
  async function fetchTasks() {
    const {data, error} = await supabase
      .from("Tasks")
      .select("*")
    setTitles(data)
    // console.log(data)
  } // populate titles with data
      
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={'your tasks'} />

            <View style={styles.container}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <MaterialCommunityIcons name="sort-ascending" color={Themes.colors.darkgray} size={40} />
                    <AddTaskButton navigation={navigation} />
                </View>
                {/* <ScrollView style={{ width: '100%' }}>
                    <TaskCard task={{ name: 'CS106A', session: { length: 4, total: 2, completed: 1 }, timeDue: { day: 'monday', date: '11/5' } }} navigation={navigation} />
                    <TaskCard task={{ name: 'Taxes', session: { length: 2, total: 1, completed: 0 }, timeDue: { day: 'monday', date: '11/5' } }} navigation={navigation} />
                    <TaskCard task={{ name: 'Psych PSET', session: { length: 2, total: 4, completed: 0 }, timeDue: { day: 'monday', date: '11/5' } }} navigation={navigation} />
                </ScrollView> */}
                <FlatList style={{ width: '100%' }}
                    data={titles} // the array of data that the FlatList displays
                    renderItem={({ item }) => renderTask(item, navigation)} // function that renders each item
                    keyExtractor={(item, index) => index} // unique key for each item
                />
                
            </View>
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
    container: {
        flex: 1,
        width: '100%',
        paddingTop: windowWidth * 0.32,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        marginLeft: '2.5%',
        width: '95%',
        height: 240,
        marginBottom: 25,
        borderRadius: 12,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 26,
        color: Themes.colors.darkgray
    },
    mark: {
        fontFamily: 'Poppins',
        fontSize: 18,
        color: Themes.colors.purple,
    },
    infoBox: {
        height: 170,
        flexDirection: 'column',
        backgroundColor: Themes.colors.white,
        width: '100%',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        marginBotton: 20,
    },
    infoLine: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    info: {
        fontFamily: 'Poppins',
        fontSize: 18,
        color: Themes.colors.darkgray,
    }
});
