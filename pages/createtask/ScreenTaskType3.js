import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-datepicker';
import { RadioButton  } from 'react-native-paper';
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'DatePickerIOS has been merged with DatePickerAndroid',
]);

export default function ScreenTaskType3({ navigation, route }) { // note navigation pprop
  const params = route.params;
  
  const [date, setDate] = useState(new Date());

  const [valueHours, setValueHours] = React.useState(0);
  const [valueMins, setValueMins] = React.useState(0);
  const [valueSessions, setValueSessions] = React.useState(0);
  
  const [value, setValue] = React.useState('first');

  const [titles, setTitles] = useState([])
  
  useEffect(() => {
    fetchTasks()
    //console.log("data: ", params.data);
    //console.log("titles: ", params.task)
  }, [])
  async function fetchTasks() {
    const {data, error} = await supabase
      .from("Tasks")
      .select("*")
      .eq("Title", params.task)
    setTitles(data)
    console.log("titles: ", titles[0])

    setDate(titles[0].Date);
    setValue(titles[0].Priority);
    setValueHours(Math.floor(titles[0].Minutes / 60));
    setValueMins(titles[0].Minutes % 60);
    setValueSessions(titles[0].NumSessions);
    // console.log("date: ", date, "priority: ", value, "num sesh: ", valueSessions, "minutes: ", valueMins, "hours: ", valueHours);
    // // console.log("date: ", date);
  }

  return (
    <View style={styles.screen}>
    
    
      <Pressable style={{position: 'absolute', left: 20, top: 70}} onPress={() => navigation.navigate('ScreenTaskType')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="arrow-left" color={Themes.colors.purple} size={20} />
          <Text style={{ fontFamily: 'Poppins', color: Themes.colors.purple }}>Back</Text>
        </View>
      </Pressable>

      <View style={styles.card}>

        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20}}>
          <Text style={[styles.title]}>Review CS106A:</Text>
          {/* <Pressable onPress={() => navigation.navigate('ScreenTaskType3')}><MaterialCommunityIcons style={styles.clickable_icon} name="pencil-circle" color={Themes.colors.darkgray} size={30} /></Pressable> */}
        </View>
        
        <View style={styles.statItem}>
          <Text style={[styles.bodyText]}>Set date:  </Text>
          <DatePicker date={date} onDateChange={setDate} />
        </View>
        
        <View style={styles.statItem}>
            <Text style={[styles.bodyText]}>Set time:  </Text>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Slider
                  style={{width: (150), height: 30}}
                  value={valueHours}
                  onValueChange={value => setValueHours(value)}
                  minimumValue={0}
                  maximumValue={20}
                  step={1}
                  minimumTrackTintColor={Themes.colors.purple}
                  maximumTrackTintColor={Themes.colors.background}
                />
                <Text>{valueHours} hr</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Slider
                  style={{width: (150), height: 20}}
                  value={valueMins}
                  onValueChange={value => setValueMins(value)}
                  minimumValue={0}
                  maximumValue={59}
                  step={1}
                  minimumTrackTintColor={Themes.colors.purple}
                  maximumTrackTintColor={Themes.colors.background}
                />
                <Text>{valueMins} min</Text>
              </View>
          </View>
        </View>

        <View style={styles.statItem}>
          <Text style={[styles.bodyText]}>Set priority:</Text>
          <RadioButton.Group
          onValueChange={newValue => setValue(newValue)} value={value}
          color={'green'}
        >
          <View style={[{flexDirection:'row', alignItems: 'center'}]}>
            <RadioButton value="first" />
            <Text>Low</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RadioButton value="second" />
            <Text>Medium</Text>
          </View>
          <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RadioButton value="third" />
            <Text>High</Text>
          </View>
        </RadioButton.Group>
        </View>

        <View style={styles.statItem}>
          <Text style={[styles.bodyText]}>Set sessions: </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Slider
                  style={{width: (150), height: 20}}
                  value={valueSessions}
                  onValueChange={value => setValueSessions(value)}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  minimumTrackTintColor={Themes.colors.purple}
                  maximumTrackTintColor={Themes.colors.background}
                />
                <Text>{valueSessions}x</Text>
              </View>
        </View>
        

      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasksComplete', {
        numSessions: valueSessions,
        priority: value,
        title: params.task,
        duedate: date,
        hours: valueHours,
        minutes: valueMins
      })}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Save and Add</Text></View>
      </Pressable>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
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