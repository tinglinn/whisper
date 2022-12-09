import React, { useState, useEffect } from "react";
import DatePicker from 'react-native-datepicker';
import { RadioButton  } from 'react-native-paper';
import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import BackButton from './backButton';
import NextButton from "./nextButton";
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function ScreenCreateTasks4({ navigation, route} ) { // note navigation pprop
  const [value, setValue] = React.useState('first');
  const params = route.params;


  const nextScreenName = 'ScreenCreateTasks5';
  return (
    <View style={styles.screen}>
      <Header text={"add task"} />


      <BackButton navigation={navigation} />

      <View style={styles.card}>

      
        <Text style={styles.title}>What’s the level of priority for this task? </Text>

        {/* <Text style={{marginTop: 20,}}> Task Name </Text> */}
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)} value={value}
          color={'green'}
        >
          <View style={[{flexDirection:'row', alignItems: 'center', marginTop: 20,}]}>
            <RadioButton value="first" />
            <Text style={styles.option}>Low</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RadioButton value="second" />
            <Text style={styles.option} >Medium</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RadioButton value="third" />
            <Text style={styles.option}>High</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks5', {
        priority: value,
        title: params.title,
        duedate: params.date,
        hours: params.hours,
        minutes: params.minutes,
      })}>
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
  
  input: {
    marginTop: 10,
    borderWidth: 1,
    width:'100%',
    padding: 20,
    borderRadius: 7,
    color: 'dark-grey',
    flexDirection: 'row',
    
  },

  option: {
    fontFamily: "Poppins",
    fontSize: 16
  }

});
//   return (
//     <View style={styles.screen}>

      
//       <View style={styles.card}>

//       <ProgressBar style={{borderRadius: 5,}} progress={0.2} color={'green'} />
      
//         <Text style={styles.titleText}>What do you want to call your task? </Text>



//       </View>

//       <Button style={styles.button} title="Next" onPress={() => navigation.navigate('ScreenCreateTasks3')}/>


//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center',
//   },

//  card: {
//     alignItems: 'left', 
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 7,
//     margin: 20,
//   },


//   titleText: {
//     backgroundColor: 'cornsilk',
//     borderRadius: 7,
//     fontSize: 20,
//     marginVertical: 30,
//   },

//   titleText: {
//     backgroundColor: 'cornsilk',
//     borderRadius: 7,
//     fontSize: 20,
//   },

//   inputBox: {
//     backgroundColor: 'cornsilk',
//     borderRadius: 7,
//   },

//   input: {
//     marginTop: 10,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 7,
//     backgroundColor: 'green',
//     color: 'grey',
//   },

//   button: {
//     padding: 50,
//   },

// });