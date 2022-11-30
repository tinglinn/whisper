import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <Button onPress={() => navigation.navigate("Overview")}><Text style={styles.menuText}>Overview</Text></Button>
            <Button onPress={() => navigation.navigate("Accomplishments")}><Text style={styles.menuText}>Accomplishments</Text></Button>
            <Button onPress={() => navigation.navigate("Time")}><Text style={styles.menuText}>Time</Text></Button >
        </View>
    );
}

const styles = StyleSheet.create({
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
})

export default Menu;