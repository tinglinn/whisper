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
            <Pressable onPress={() => navigation.navigate("Overview")}><Text style={styles.menuText}>Overview</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Accomplishments")}><Text style={styles.menuText}>Accomplishments</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Time")}><Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: Themes.colors.purple}}>Time</Text></Pressable>
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
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.nameText}>{name}{': '}</Text>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: Themes.colors.darkgray}}>{stat}{' hours'}</Text>
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
    { name: "Time Estimated for Tasks", stat: 12, trend: "up" },
    { name: "Time Needed for Tasks", stat: 16, trend: "up" }];


function Time({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={"summary"} />
            <DisplayWeek week={"nov 1, 2022"} width={windowWidth} />
            <Menu navigation={navigation} />
            <TimeBreakdown data={data} title={"time management"} />
            <Insights insights={["You underestimated the time it would take to complete CS106A and Taxes",
                "Still, your time estimations were 10% more accurate than last week!"]} />
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
