

import React, { useState } from "react";
import { Dimensions } from 'react-native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DropdownComponent from './DropDownTasks';
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from 'react-native-datepicker';


export default function ScreenTaskType({ navigation }) { // note navigation pprop
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.screen}>
      <Header text={"Add Task"} />
    
    
      <Pressable onPress={() => navigation.navigate('ScreenTaskType')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}><MaterialCommunityIcons name="arrow-left" color={Themes.colors.darkgray} size={20} /><Text style={{color: Themes.colors.darkgray}}>Back</Text></View>
      </Pressable>


      <View style={styles.card}>

      <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20}}>
      <Text style={[styles.title]}>Review CS106A:</Text>
      <Pressable onPress={() => navigation.navigate('ScreenTaskType3')}><MaterialCommunityIcons style={styles.clickable_icon} name="pencil-circle" color={Themes.colors.darkgray} size={30} /></Pressable>
        </View>
        
        <View style={styles.statItem}>
          <MaterialCommunityIcons name="calendar" color={Themes.colors.darkgray} size={20} />
          <Text style={[styles.bodyText, {marginLeft: 10}]}>Due on December 1st, 2022</Text>
          {/* <DatePicker date={date} onDateChange={setDate} /> */}
        </View>
        <View style={styles.statItem}>
          <MaterialCommunityIcons name="clock-outline" color={Themes.colors.darkgray} size={20} />
          <Text style={[styles.bodyText, {marginLeft: 10}]}>8 hours</Text>
        </View>
        <View style={styles.statItem}>
          <MaterialCommunityIcons name="exclamation-thick" color={Themes.colors.darkgray} size={20} />
          <Text style={[styles.bodyText, {marginLeft: 10}]}>Medium priority</Text>
        </View>
        <View style={styles.statItem}>
          <MaterialCommunityIcons name="call-split" color={Themes.colors.darkgray} size={20} />
          <Text style={[styles.bodyText, {marginLeft: 10}]}>Split into 4 2-hr sessions </Text>
        </View>
        

      </View>

      <Pressable onPress={() => navigation.navigate('ScreenTaskType2')}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Next</Text></View>
      </Pressable>
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
  },

  bodyText:{
    fontFamily: 'Poppins',
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
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    
  },

  clickable_icon: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 30,
  },

  buttontext: {
  color: 'white',
  fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },

 card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    margin: 20,
    width: 360,
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