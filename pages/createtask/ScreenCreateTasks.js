import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import BackButton from './backButton';
import NextButton from './nextButton';
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function ScreenTaskType({ navigation, route} ) { // note navigation pprop
  const params = route.params;
  const [text, onChangeText] = React.useState("");

  const nextScreenName = 'ScreenCreateTasks2';
  let active = false;
  if (text != null) {
    active = true;
  }

  useEffect(() => {
    deleteTask()
  }, [])

  // delete current task
  async function deleteTask() {
    
    if (params != null) {
      console.log("title: ", params.title);
      const { data, error } = await supabase
      .from('Tasks')
      .delete()
      .eq('Title', params.title)
    // console.log("data: ", data)
    // console.log("error: ", error)
    }
  }

  return (
    <View style={styles.screen}>
      <Header text={"add task"} />

      <BackButton navigation={navigation} />

      <View style={styles.card}>

        <Text style={styles.title}>What do you want to call your task? </Text>
  
        <Text style={{ marginTop: 20, width: '100%', fontFamily: 'Poppins', fontSize: 18, color: Themes.colors.darkgray}}> Task Name </Text>
        <View style={{ width: '100%'}}>
          
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Ex. CS106A"
          />
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks2', {
        title: text,
      })}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Next</Text></View>
      </Pressable>
      

    </View>
    
  );
}

      //<Pressable onPress={() => navigation.navigate('ScreenCreateTasks2')}>
        //<View style={styles.button} >
        //<Text style={styles.buttontext}>Next</Text></View>
      //</Pressable>
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
    padding: 10,
    borderRadius: 7,
    color: Themes.colors.darkgray,
    //height: '10%',
    width: '100%',
    fontFamily: 'Poppins',
  },


});