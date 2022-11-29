import React, { useState } from "react";
import DatePicker from 'react-native-datepicker';
import { RadioButton  } from 'react-native-paper';
import { Text, View, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function ScreenCreateTasks2({ navigation }) { // note navigation pprop
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  // for datepicker only'
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState('first');
  return (
    <View style={styles.screen}>
      <Header text={"Add Task"} />


      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}><MaterialCommunityIcons name="arrow-left" color={Themes.colors.darkgray} size={20} /><Text style={{color: Themes.colors.darkgray}}>Back</Text></View>
      </Pressable>

      <View style={styles.card}>

      
        <Text style={styles.title}>Does this task have a set due date? </Text>

        {/* <Text style={{marginTop: 20,}}> Task Name </Text> */}
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={{flexDirection:'row', alignItems: 'center', marginTop: 20,}}>
            <RadioButton value="first" />
            <Text>Yes, it is due...  </Text>
            <DatePicker date={date} onDateChange={setDate} />
          </View>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <RadioButton value="second" />
            <Text>No, I don't need to finish it by a set time.</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasks3')}>
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