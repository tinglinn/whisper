import React, { useState, useEffect } from "react";
import { Dimensions } from 'react-native';
import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'




export default function ScreenCreateTasks3({ navigation, route} ) { // note navigation pprop
  const params = route.params;
  // for datepicker only'
  const [valueHours, setValueHours] = React.useState(0);
  const [valueMins, setValueMins] = React.useState(0);


  
  return (
    <View style={styles.screen}>
      <Header text={"Add Task"} />
      

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}><MaterialCommunityIcons name="arrow-left" color={Themes.colors.darkgray} size={20} /><Text style={{color: Themes.colors.darkgray}}>Back</Text></View>
      </Pressable>

      <View style={styles.card}>

      
        <Text style={[styles.title, {marginBottom: 15}]}>How much time do you want for this task? </Text>

        {/* <Text style={{marginTop: 20,}}> Task Name </Text> */}
        <Slider
          style={{width: (Dimensions.get('window').width - 120), height: 40}}
          value={valueHours}
          onValueChange={value => setValueHours(value)}
          minimumValue={0}
          maximumValue={20}
          step={1}
          minimumTrackTintColor={Themes.colors.purple}
          maximumTrackTintColor={Themes.colors.background}
        />
        <Text>{valueHours} hours</Text>
        <Slider
          style={{width: (Dimensions.get('window').width - 120), height: 40}}
          value={valueMins}
          onValueChange={value => setValueMins(value)}
          minimumValue={0}
          maximumValue={59}
          step={1}
          minimumTrackTintColor={Themes.colors.purple}
          maximumTrackTintColor={Themes.colors.background}
        />
        <Text>{valueMins} minutes</Text>
      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks4')}>
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