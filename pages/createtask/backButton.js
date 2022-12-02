import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Themes from '../../assets/Themes/index';
import { Text, View, Pressable } from 'react-native';

function BackButton({navigation}) {
    return (
        <Pressable style={{ left: 20, top: 160, position: "absolute" }} onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <MaterialCommunityIcons name="arrow-left" color={Themes.colors.purple} size={20} />
                <Text style={{ color: Themes.colors.purple, fontFamily: 'Poppins' }}>Back</Text>
            </View>
        </Pressable>
    );
}

export default BackButton;