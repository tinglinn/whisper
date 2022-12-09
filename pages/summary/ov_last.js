import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Pressable } from 'react-native';
import Themes from '../../assets/Themes/index';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import DisplayWeek from './displayWeek';
const windowWidth = Dimensions.get('window').width;

function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <Pressable onPress={() => navigation.navigate("PrevOverview")}><Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: Themes.colors.purple }}>Overview</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("PrevAccomplishments")}><Text style={styles.menuText}>Accomplishments</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("PrevTime")}><Text style={styles.menuText}>Time</Text></Pressable>
        </View>
    );
}

function renderStat({ item }) {
    return (
        <View style={styles.statItem}>
            <MaterialCommunityIcons name="bookmark-check-outline" color={Themes.colors.darkgray} size={20} />
            <View style={{ marginLeft: 6 }}><Text style={styles.stat}>{item}</Text></View>
        </View>
    );
}

function Box({ title, times, stats }) {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.boxBody}>
                <View style={{ flex: 1, alignContent: 'center', width: '40%' }}>
                    <FlatList data={times} keyExtractor={(item, index) => index} renderItem={({ item }) => (<Text style={styles.time}>{item}</Text>)} ItemSeparatorComponent={() => <View style={{ height: 5 }} />}></FlatList>
                </View>
                <View style={{ flex: 1, alignContent: 'center', width: '60%' }}>
                    <FlatList data={stats} keyExtractor={(item, index) => index} renderItem={renderStat} ItemSeparatorComponent={() => <View style={{ height: 5 }} />}></FlatList>
                </View>
            </View>
        </View>
    )
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

function SummaryOverview({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={"summary"} />
            <DisplayWeek week={"nov 21, 2022"} width={windowWidth} navigation={navigation} prev={"FirstOverview"} next={"Overview"} />
            <Menu navigation={navigation} />
            <Box title={"most productive day"} times={["thursday"]} stats={["4 work sessions", "2 tasks: Psych, Reading"]} />
            <Box title={"most focused periods"} times={["2-4pm", "8-10pm"]} stats={["Able to achieve 85% of goals scheduled during these times"]} />
            <Insights insights={["Finishing up the week strong - early afternoon sessions are most productive!"]} />
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
        flexDirection: 'row',
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
});

export default SummaryOverview;

