import React, { useState } from "react";
import { Dimensions } from 'react-native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-datepicker';
import { RadioButton  } from 'react-native-paper';


export default function ScreenTaskType3({ navigation }) { // note navigation pprop
  const [date, setDate] = useState(new Date());

  const [valueHours, setValueHours] = React.useState(0);
  const [valueMins, setValueMins] = React.useState(0);
  const [valueSessions, setValueSessions] = React.useState(0);
  
  const [value, setValue] = React.useState('first');
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
          <Text style={[styles.title]}>Edit CS106A:</Text>
          <Pressable onPress={() => navigation.navigate('ScreenTaskType3')}><MaterialCommunityIcons style={styles.clickable_icon} name="pencil-circle" color={Themes.colors.darkgray} size={30} /></Pressable>
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

      <Pressable onPress={() => navigation.navigate('ScreenTaskType2')}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Save and Continue</Text></View>
      </Pressable>
cube2.transform.Rotate(90.0f, 0.0f, 0.0f, Space.World);
      
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