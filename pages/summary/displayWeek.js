import React, {useState} from 'react';
import { Text, View, Pressable, Alert } from 'react-native';
import Themes from '../../assets/Themes/index';
import { Feather } from '@expo/vector-icons';

function DisplayWeek({ week, width, navigation, prev, next }) {
    const prevDisabled = (prev == null) ? true : false;
    const nextDisabled = (next == null) ? true : false;
    
    return (
        <View style={{ marginTop: width * 0.32, paddingLeft: 25, paddingRight: 25, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Pressable onPress={() => prevDisabled ? Alert.alert("Previous week data not available!") : navigation.navigate(prev)}><Feather name='arrow-left' size={20} /></Pressable>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: Themes.colors.darkgray }}>week of {week}</Text>
            <Pressable onPress={() => nextDisabled ? Alert.alert("Next week data not available!") : navigation.navigate(next)}><Feather name='arrow-right' size={20} /></Pressable>
        </View>
    )
}

export default DisplayWeek;