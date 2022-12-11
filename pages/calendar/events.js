import { Text, View, StyleSheet, FlatList, SafeAreaView, Pressable, Dimensions, ScrollView } from 'react-native';
import Header from '../../components/header';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Themes from '../../assets/Themes';
import React, { useState, useEffect } from "react";

const windowWidth = Dimensions.get('window').width;
// format: {name: , due: , time:, locatio: ,}

const data = [{name: "Leg Day", due: "2 hrs", time: "Today 9pm", location: "Farillaga" },
    {name: "Beach Trip", due: "14 hrs", time: "Tomorrow 9am", location: "Meet at the Oval" },
    { name: "Ting's Bday", due: "2 days", time: "Sunday 3pm", location: "Ng House" },
    { name: "Club Meeting", due: "3 days", time: "Monday 4pm", location: "Main Quad" }
]

function BackButton({ navigation }) {
    return (
        <Pressable style={{ left: 20, top: 120, position: "absolute" }} onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <MaterialCommunityIcons name="arrow-left" color={Themes.colors.darkgray} size={20} />
                <Text style={{ color: Themes.colors.darkgray, fontFamily: 'Poppins' }}>Back</Text>
            </View>
        </Pressable>
    );
}

function RenderEvent({ item }) {
    return (
        <EventCard name={item.name} due={item.due} time={item.time} location={item.location} />
    )
}
function EventCard({ name, due, time, location }) {
    return (
        <View style={styles.box}>
            <View style={styles.infoBox}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <MaterialCommunityIcons name="calendar-today" color={Themes.colors.darkgray} size={32} />
                        <View style={{marginLeft: 5}}><Text style={styles.eventtitle}>{name}</Text></View>
                    </View>
                    <Text style={styles.mark}>in {due}</Text>
                </View>
                <View style={{ marginTop: 25 }}>
                    <View style={{  }}><Text style={styles.info}> {time} </Text></View>
                    <View style={{ }}><Text style={styles.info}> {location} </Text></View>
                </View>
            </View>
        </View>
    )
}

export default function Events({navigation}) {
    return (
        <SafeAreaView style={styles.screen}>
            <Header text={'your events'} />
            <View style={styles.container}>
                <BackButton navigation={navigation} />
                <View style={{marginBottom: 10, width: '100%', paddingLeft: 30,flexDirection: 'row', justifyContent: 'flex-start'}}><Text style={styles.title}>Upcoming events</Text></View>
                <FlatList style={{ width: '100%' }}
                    data={data}
                    renderItem={RenderEvent} // function that renders each item
                    keyExtractor={(item, index) => index}/>
            </View>
        </SafeAreaView>

    )
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
        paddingTop: windowWidth * 0.4,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        width: '85%',
        marginLeft: '7.5%',
        height: 160,
        marginBottom: 25,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: Themes.colors.background,
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 25,
        color: Themes.colors.darkgray,
    },
    eventtitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: 'black',
    },
    mark: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: "#71716F",
    },
    infoBox: {
        height: 170,
        flexDirection: 'column',
        width: '100%',
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 10,
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
        fontSize: 16,
        color: 'black',
    }
});
