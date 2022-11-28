import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Themes from '../assets/Themes/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Header({ text }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={[Themes.colors.red, Themes.colors.mediumpurple, Themes.colors.red, Themes.colors.mediumpurple]} style={styles.header}>
                <Text style={styles.headerText}>{text}</Text>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 40,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
    },
    header: {
        position: 'relative',
        top: -windowWidth * 0.5,
        width: windowWidth * 0.8,
        height: windowWidth * 0.8,
        backgroundColor: Themes.colors.red,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: windowWidth * 0.4,
        paddingBottom: 40,
    },
    headerText: {
        zIndex: 5,
        fontSize: 32,
        fontFamily: 'Poppins-SemiBold',
        color: Themes.colors.white,
    }
});

export default Header;