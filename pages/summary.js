import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Button } from 'react-native';
import Themes from '../assets/Themes/index';
import Header from '../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SummaryOverview from './summary/summary-overview';


function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <Text style={styles.menuText}>Overview</Text>
            <Text style={styles.menuText}>Accomplishments</Text>
            <Text style={styles.menuText}>Time</Text>
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
            <Feather name="thumbs-up" color={Themes.colors.darkgray} size={16} />
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

function SummaryScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={"nov 11 - 15"} />
            <Menu />
            <Box title={"most productive day"} times={["monday"]} stats={["3 work sessions", "1 task: CS106A"]} />
            <Box title={"most focused periods"} times={["1-3pm", "7-10pm"]} stats={["Able to achieve 80% of goals scheduled during these times"]} />
            <Insights insights={["You started the week off on a great note!",
                "ADHD Insight: periods after meals and exercise are often most productive!"]} />
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
        marginTop: windowWidth * 0.32,
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

export default SummaryScreen;

