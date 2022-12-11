import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function ScreenCreateTasksComplete({ navigation, route} ) { // note navigation pprop
  const params = route.params;
  const [titles, setTitles] = useState([]) // store data supabase
  useEffect(() => {
    //console.log("minutes spent:", params.MinutesSpent);
    getTask()
    
  }, [])

  async function getTask() {
    this.forceUpdate();
    const {data, error} = await supabase
      .from("Tasks")
      //.select("*")
      .update({ "CurrentSessionMinutes": params.MinutesSpent})
      .eq("Title", params.title)
    setTitles(data)
    // setTitles(titles[0]);
    // console.log("the title is: ", params.title);

    // console.log("data for the current title: ", titles);
    // console.log("num sessions completed: ", titles[0].NumSessionsCompleted - Math.floor(params.MinutesSpent / (titles[0].Minutes / titles[0].NumSessions)));
    // console.log("num minutes of session completed: ", titles[0].CurrentSessionMinutes + params.MinutesSpent % (titles[0].Minutes / titles[0].NumSessions))

    // const {data2, error2} = await supabase
    // .from("Tasks")
    // .update({ "NumSessionsCompleted": titles[0].NumSessionsCompleted + Math.floor(params.MinutesSpent / (titles[0].Minutes / titles[0].NumSessions))})
    // .update({ "CurrentSessionMinutes": titles[0].CurrentSessionMinutes + params.MinutesSpent % (titles[0].Minutes / titles[0].NumSessions)})
    // .eq("Title", params.title)
  }
  
  return (
    <View style={styles.screen}>
      <LinearGradient style={styles.background} colors={[Themes.colors.red, Themes.colors.mediumpurple, Themes.colors.red, Themes.colors.mediumpurple]}>
        <MaterialCommunityIcons name="checkbox-marked-circle" color={Themes.colors.white} size={50} style={{marginBottom:10}} />
        <Text style={[styles.title, {marginBottom: 15}]}>Great work! </Text>
        <Pressable onPress={() => navigation.navigate("TasksOverview")}>
          <View style={styles.button} >
          <Text style={styles.buttontext}>Your Tasks</Text></View>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 50,
  },

  button: {
    marginTop: 20,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: Themes.colors.white,
    justifyContent: 'center'
  },

  buttontext: {
  color: Themes.colors.darkgray,
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
    fontSize: 30,
    color: Themes.colors.white,
    
  },
  
  input: {
    marginTop: 10,
    borderWidth: 1,
    width:'100%',
    padding: 20,
    borderRadius: 7,
    color: 'dark-grey',
    flexDirection: 'row',
    
  },


});