import React, { useState, useEffect } from "react";
import DatePicker from 'react-native-datepicker';
import { RadioButton  } from 'react-native-paper';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { supabase } from '../../env/supabase';
import BackButton from "./backButton";
import NextButton from "./nextButton";

export default function ScreenCreateTasks2({ navigation, route}) { // note navigation pprop
  const params = route.params;

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  // for datepicker only'
  const [date, setDate] = useState(new Date());
  const [value, setValue] = React.useState('false');

  return (
    <View style={styles.screen}>
      <Header text={"add task"} />


      <BackButton navigation={navigation}/>

      <View style={styles.card}>

      
        <Text style={styles.title}>Does this task have a set due date? </Text>

        {/* <Text style={{marginTop: 20,}}> Task Name </Text> */}
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginRight: 25}}>
              <RadioButton value="true" />
              <Text style={styles.option}>Yes, it is due...   </Text>
              <DatePicker date={date} onDateChange={setDate} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 25}}>
            <RadioButton value="false" />
            <Text style={styles.option}>No, I don't need to finish it by a set time.</Text>
          </View>
        </RadioButton.Group>
      </View>

      <NextButton navigation={navigation} screenName={'ScreenCreateTasks3'} params={{
        title: params.title,
        duedate: date,
        isdue: value,
      }} active={true} warning={"Adjust slider"}/>
      

    </View>
    
  );
}

/*
<Pressable onPress={() => navigation.navigate('ScreenCreateTasks3', {
  title: params.title,
  duedate: date,
  isdue: value,
})}>
  <View style={styles.button} >
    <Text style={styles.buttontext}>Next</Text></View>
</Pressable>*/
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
    width: '100%',
    padding: 20,
    borderRadius: 7,
    color: 'dark-grey',
    flexDirection: 'row',
    
  },

  option: {
    flexShrink: 1,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: Themes.colors.black,
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