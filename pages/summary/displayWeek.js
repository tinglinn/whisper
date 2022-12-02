import React from 'react';
import { Text, View } from 'react-native';
import Themes from '../../assets/Themes/index';
import { Feather } from '@expo/vector-icons';

function DisplayWeek({ week, width }) {
    return (
        <View style={{ marginTop: width * 0.32, paddingLeft: 25, paddingRight: 25, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Feather name='arrow-left' size={20} />
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: Themes.colors.darkgray }}>week of {week}</Text>
            <Feather name='arrow-right' size={20} />
        </View>
    )
}

export default DisplayWeek;