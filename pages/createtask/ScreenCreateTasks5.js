import React from "react";
import { Dimensions } from 'react-native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import BackButton from './backButton';

export default function ScreenCreateTasks5({ navigation }) { // note navigation pprop

  // for datepicker only'
  const [valueHours, setValueHours] = React.useState(0);
  const [valueMins, setValueMins] = React.useState(0);


  
  return (
    <View style={styles.screen}>
      <Header text={"Add Task"} />
      
      <BackButton navigation={navigation} />

      <View style={styles.card}>

      
        <Text style={[styles.title, {marginBottom: 15}]}>How do you want to split up your work sessions? </Text>

        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
        <MaterialCommunityIcons name="lightbulb-on-outline" color={Themes.colors.purple} size={20} />
        <Text style={{fontFamily: 'Poppins', color:Themes.colors.purple,}}>Your average work session is 2 hours.</Text>
        </View>
        {/* <Text style={{marginTop: 20,}}> Task Name </Text> */}
        <Slider
          style={{width: (Dimensions.get('window').width - 120), height: 40}}
          value={valueHours}
          onValueChange={value => setValueHours(value)}
          minimumValue={0}
          maximumValue={10}
          step={1}
          minimumTrackTintColor={Themes.colors.purple}
          maximumTrackTintColor={Themes.colors.background}
        />
        <Text style={{ fontFamily: 'Poppins' }}>{valueHours} sessions</Text>

      </View>

      <Pressable onPress={() => navigation.navigate('ScreenCreateTasksComplete')}>
      <View style={styles.button} >
      <Text style={styles.buttontext}>Finish</Text></View>
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