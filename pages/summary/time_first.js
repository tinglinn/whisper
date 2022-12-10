import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Pressable } from 'react-native';
import Themes from '../../assets/Themes/index';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import DisplayWeek from './displayWeek'

const windowWidth = Dimensions.get('window').width;

function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <Pressable onPress={() => navigation.navigate("FirstOverview")}><Text style={styles.menuText}>Overview</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("FirstAccomplishments")}><Text style={styles.menuText}>Accomplishments</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("FirstTime")}><Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: Themes.colors.purple }}>Time</Text></Pressable>
        </View>
    );
}

function renderTime({ item }, maxTime) {
    const name = item.name;
    let timeLength = (parseFloat(item.stat) / parseFloat(maxTime)) * 80;
    timeLength = timeLength.toString() + "%";
    const stat = item.stat.toString();

    return (
        <View style={styles.timeItem}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.nameText}>{name}{': '}</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: Themes.colors.darkgray }}>{stat}{' hours'}</Text>
            </View>
            <View
                style={{
                    backgroundColor: Themes.colors.red, width: timeLength,
                    height: 30, borderRadius: 12.5, marginTop: 10
                }}>
            </View>
        </View>
    )
}

function TimeBreakdown({ data, title }) {
    const maxTime = Math.max(...data.map(data => data.stat));

    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.boxBody}>
                <FlatList data={data} keyExtractor={(item, index) => index} renderItem={(item) => renderTime(item, maxTime)}
                    ItemSeparatorComponent={() => <View style={{ height: 32 }} />}></FlatList>
            </View>
        </View>
    );
}

function renderInsight({ item }) {
    return (
        <View style={styles.statItem}>
            <MaterialCommunityIcons name="lightbulb-on-outline" color={Themes.colors.darkgray} size={20} />
            <View style={{ marginLeft: 8 }}><Text style={styles.stat}>{item}</Text></View>
        </View>
    );
}

function Insights({ insights }) {
    return (
        <View style={styles.insightBox}>
            <FlatList data={insights} keyExtractor={(item, index) => index} renderItem={renderInsight}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}></FlatList>
        </View>
    )
}

const data = [
    { name: "Time Estimated for Tasks", stat: 15 },
    { name: "Time Needed for Tasks", stat: 18 }];

function TimeEstimation({ title }) {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.boxBody}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 8 }}>
                    <Ionicons name="document-text-outline" size={25} />
                    <Text style={styles.nameText}> total time estimated: </Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Themes.colors.darkgray }}>15 hrs</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20 }}>
                    <Ionicons name="time-outline" size={25} />
                    <Text style={styles.nameText}> total time spent: </Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Themes.colors.darkgray }}>18 hrs</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.stat}>you underestimated the time needed for:</Text>
                    <View style={{ marginTop: 8, paddingLeft: 20 }}>
                        <Text style={styles.stat}>• Scholarship Application</Text>
                        <Text style={styles.stat}>• CS161 PSET</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.stat}>you overestimated the time needed for:</Text>
                    <View style={{ marginTop: 8, paddingLeft: 20 }}>
                        <Text style={styles.stat}>• Organize club meeting</Text>
                        <Text style={styles.stat}>• Grocery trip</Text>
                        <Text style={styles.stat}>• Interview prep</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
function Time({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={"summary"} />
            <DisplayWeek week={"nov 14, 2022"} width={windowWidth} navigation={navigation} prev={null} next={"PrevOverview"} />
            <Menu navigation={navigation} />
            <TimeEstimation title={"time estimation"} />
            <Insights insights={["On average, you underestimate the amount of time it will take for your application by 2 hours"]} />
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
    time: {
        fontFamily: 'Poppins',
        fontSize: 24,
        color: Themes.colors.purple
    },
    statItem: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    stat: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Themes.colors.darkgray,
        textAlign: 'left',
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: Themes.colors.darkgray
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Themes.colors.white,
        width: '100%',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        marginBottom: 12,
    },
    boxBody: {
        flexDirection: 'col',
        alignContent: 'space-between',
        justifyContent: 'center',
        paddingTop: 25,
    },
    insightBox: {
        flexDirection: 'column',
        backgroundColor: Themes.colors.white,
        width: '100%',
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        marginBotton: 12,
    },
    menu: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: Themes.colors.purple,
    },
    timeItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    nameText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        color: Themes.colors.darkgray,
    }
});

export default Time;
