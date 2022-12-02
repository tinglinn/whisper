

import React from "react";
import { Dimensions } from 'react-native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DropdownComponent from './DropDownTasks';
import { Dropdown } from "react-native-element-dropdown";
import BackButton from "./backButton";


export default function ScreenTaskType({ navigation }) { // note navigation pprop

  return (
    <View style={styles.screen}>
      <Header text={"add task"} />
    
      <View style={styles.card}>

      
        <Text style={[styles.title, {marginBottom: 25}]}>What kind of task is this? </Text>

        <Text style={[styles.subtitle, {marginBottom: 15}]}>Task Type</Text>

        <View><DropdownComponent></DropdownComponent></View>

        
        <Pressable onPress={() => navigation.navigate('ScreenCreateTasks')}>
        <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}><Text style={[styles.bodyText]}>or Create new task type </Text><MaterialCommunityIcons name="arrow-right-circle" color={Themes.colors.darkgray} size={25} /></View>
        </Pressable>

      </View>

      <Pressable onPress={() => navigation.navigate('ScreenTaskType2')}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Next</Text></View>
      </Pressable>
      

    </View>
    
  );
}

const styles = StyleSheet.create({

  bodyText:{
    fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: Themes.colors.darkgray,
  },
  subtitle: {
    fontFamily: 'Poppins',
        fontSize: 18,
        color: Themes.colors.darkgray,
  },
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