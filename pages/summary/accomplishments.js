import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Pressable } from 'react-native';
import Themes from '../../assets/Themes/index';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <Pressable onPress={() => navigation.navigate("Overview")}><Text style={styles.menuText}>Overview</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Accomplishments")}><Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: Themes.colors.purple }}>Accomplishments</Text></Pressable>
            <Pressable onPress={() => navigation.navigate("Overview")}><Text style={styles.menuText}>Time</Text></Pressable>
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

function Accomplishments({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={"nov 11 - 15"} />
            <Menu navigation={navigation} />
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

export default Accomplishments;
