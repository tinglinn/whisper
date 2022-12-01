import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import React, { useState } from "react";
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import BackButton from './backButton';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
export default function ScreenTaskType({ navigation }) { // note navigation pprop
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  // for datepicker only'
  const [date, setDate] = useState(new Date());
  
  
  return (
    <View style={styles.screen}>
      <Header text={"Add Task"} />

      <BackButton navigation={navigation} />

      <View style={styles.card}>

      
        <Text style={styles.title}>What do you want to call your task? </Text>
  
        <Text style={{ marginTop: 20, width: '100%', fontFamily: 'Poppins', fontSize: 18, color: Themes.colors.darkgray}}> Task Name </Text>
        <View style={{ width: '100%'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Ex. CS106A"
            keyboardType="numeric"
          />
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks2')}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Next</Text></View>
      </Pressable>
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
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
    fontSize: 24,
  },

  card: {
    width: '85%',
    alignItems: 'left', 
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    margin: 20,
  },
 
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Themes.colors.darkgray,
  },
  // titleText: {
  //   backgroundColor: 'cornsilk',
  //   borderRadius: 7,
  //   fontSize: 20,
  //   marginVertical: 30,
  // },

  // titleText: {
  //   backgroundColor: 'cornsilk',
  //   borderRadius: 7,
  //   fontSize: 20,
  // },


  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 20,
    borderRadius: 7,
    color: 'dark-grey',
    height: '10%',
    width: '100%',
  },


});