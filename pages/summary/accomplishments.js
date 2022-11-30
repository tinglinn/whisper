import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Pressable } from 'react-native';
import Themes from '../../assets/Themes/index';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <Pressable onPress={() => navigation.navigate("Overview")}><Text style={styles.menuText}>Overview</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Accomplishments")}><Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: Themes.colors.purple }}>Accomplishments</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Time")}><Text style={styles.menuText}>Time</Text></Pressable>
        </View>
    );
}

function renderAccomplishment({ item }) {
    const name = item.name;
    const stat = item.stat;
    const trend = item.trend;
    let icon = null;
    if (trend == "up") {
        icon = <Ionicons name="ios-arrow-up-circle-outline" color={Themes.colors.darkgray} size={24} />
    } else {
        icon = <Ionicons name="ios-arrow-up-circle-outline" color={Themes.colors.darkgray} size={24} />
    }
    return (
        <View style={styles.accomplishItem}>
            <View style={{width: '65%'}}><Text style={styles.nameText}>{name}</Text></View>
            <View style={{ width: '20%', alignItems: 'flex-end' }}><Text style={styles.statText}>{stat}</Text></View>
            {icon}
        </View>
    )
}

function AccomplishmentList({data, title}) {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.boxBody}>
                <FlatList data={data} keyExtractor={(item, index) => index} renderItem={renderAccomplishment}
                    ItemSeparatorComponent={() => <View style={{ height: 25 }} />}></FlatList>
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
    { name: "Tasks completed", stat: "6", trend: "up" },
    { name: "Work sessions started", stat: "12", trend: "up" },
    { name: "Work session goals completed", stat: "10", trend: "up" },
    { name: "Average work session length", stat: "1.5h", trend: "up" }];

function Accomplishments({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={"nov 11 - 15"} />
            <Menu navigation={navigation} />
            <AccomplishmentList data={data} title={"accomplishments"} />
            <Insights insights={["You accomplished 3 tasks more than one day before their due date!"]} />
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
    accomplishItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        color: Themes.colors.darkgray,
    },
    statText: {
        fontFamily: 'Poppins',
        fontSize: 30,
        color: Themes.colors.purple,
    }
});

export default Accomplishments;
