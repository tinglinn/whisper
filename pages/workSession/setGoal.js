import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import React, { useState } from "react";
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import BackButton from '../createtask/backButton';

function SetGoal({ route, navigation }) {
    const [text, onChangeText] = React.useState(null);
    const { name, page } = route.params;
   //console.log("in set goal", route.params);
    return (
        <View style={styles.screen}>
            <Header text={name} />
            <BackButton navigation={navigation} />
            <View style={styles.card}>
                <Text style={styles.title}>what goal do you want to set for this work session? </Text>
                <View style={{ width: '100%'}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="The goal I will reach is..."
                        value={text}
                        multiline={true}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <Pressable onPress={() => navigation.navigate("Timer", {task: name, goal: text, page: page})}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>start timer</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Themes.colors.white,
    },
    button: {
        marginTop: 20,
        padding: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: Themes.colors.purple,
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
    },
    card: {
        width: '85%',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 12,
        margin: 20,
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: Themes.colors.darkgray,
        textAlign: 'center'
    },
    input: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 30,
        borderWidth: 1,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 7,
        color: Themes.colors.darkgray,
        height: 100,
        width: '100%',
        fontFamily: 'Poppins',
        backgroundColor: 'rgba(217, 217, 217, 0.2)',
    },
});

export default SetGoal;