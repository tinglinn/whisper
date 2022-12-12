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
import { Dropdown } from 'react-native-element-dropdown';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

const windowWidth = Dimensions.get('window').width;

const renderTask = ( item, navigation ) => (
    <TaskCard task={{ name: item.Title,
        session: { length: item.Minutes, total: item.NumSessions, completed: item.NumSessionsCompleted },
        timeDue: { date: item.Date, isDue: item.IsDue },
        isActive: item.IsActive, priority: item.Priority
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
                            <Pressable onPress={() => navigation.navigate('SetGoal', { name: task.name })}>
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
  
//(t1, t2) => (t1.IsActive && !t2.IsActive) ? -1 : (!t1.isActive && t2.isActive) ? 1 : 0)
// <MaterialCommunityIcons name="sort-ascending" color={Themes.colors.darkgray} size={40} />
/*
function compareActiveFunction(t1, t2) {
    const active1 = t1.IsActive;
    const active2 = t2.IsActive;
    if (active1 && !active2) {
        return -1
    } else if (!active1 && active2) {
        return 1
    } else {
        return 0
    }
}
function comparePriorityFunction(t1, t2) {

    if (t1.IsActive && !t2.IsActive) {
        return -1;
    }
    if (!t1.IsActive && t2.IsActive) {
        return 1;
    }
    if (t1.priority == "low" || t2.priority == "high") {
        return 1;
    }
    if (t2.priority == "low" || t1.priority == "high") {
        return -1;
    }
    return 0;
}
*/
export default function TasksOverview({ navigation, route }) {
    const [titles, setTitles] = useState([]) // store data
    const [sortType, setSortType] = useState("active")
    //const [compareFunction, setCompareFunction] = useState(compareActiveFunction);
    
    useEffect(() => {
        fetchTasks()
    }, [titles, sortType])

    async function fetchTasks() {
        const {data, error} = await supabase
        .from("Tasks")
            .select("*")
        let sortedData = data.sort((t1, t2) => (t1.IsActive && !t2.IsActive) ? -1 : (!t1.isActive && t2.isActive) ? 1 : 0);
        if (sortType == "priority") {
            //console.log("updated updated function")
            sortedData = data.sort(function (t1, t2) {
                let t1numPriority = 0;
                let t2numPriority = 0;
                if (t1.priority == "first") t1numPriority = 1;
                if (t1.priority == "second") t1numPriority = 2;
                if (t2.priority == "first") t2numPriority = 1;
                if (t2.priority == "second") t2numPriority = 2;
                if (t1.IsActive && !t2.IsActive) {
                    return -1;
                }
                if (!t1.IsActive && t2.IsActive) {
                    return 1;
                }
                return t2numPriority - t1numPriority;
            });    
        } else if (sortType == "date due") {
            sortedData = data.sort(function (t1, t2) {
                if (t1.IsActive && !t2.IsActive) {
                    return -1;
                }
                if (!t1.IsActive && t2.IsActive) {
                    return 1;
                }
                if (t1.Date == null) {
                    return 1;
                }
                if (t2.Date == null) {
                    return -1;
                }
                return Date.parse(t1.Date) - Date.parse(t2.Date);
            });  
        }
        setTitles(sortedData);
    } // populate titles with data
   //console.log(sortType, titles)
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={'your tasks'} />

            <View style={styles.container}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <Dropdown
                        style={styles.dropdown}
                        data={[{ label: "priority", value: "priority" }, {label: "date due", value: "date due"}]}
                        placeholder={"sort by"}
                        placeholderStyle={{ fontFamily: "Poppins" }}
                        selectedTextStyle={{ fontFamily: "Poppins", fontSize: 14 }}
                        labelField="label"
                        valueField="value" 
                        value={sortType}
                        onChange={item=>setSortType(item.value)}
                    />
                    
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
    },
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        shadowColor: '#000',
        width: 120,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
})
