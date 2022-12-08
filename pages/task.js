import { Text, View, StyleSheet, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Themes from '../assets/Themes';
import React, { useState } from "react";

// CREATE A STACK **
const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;

// each task should be
// task: {name: , session: {length: , total: , completed: }, timeDue: {date: , day: }}

function PlayButton({ active }) {
  let text = null;
  if (active) {
    text = "resume";
  } else {
    text = "play";
  }
  return (
    <Pressable>
      <View style={{ width: 150, height: 45, backgroundColor: Themes.colors.purple, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 18, paddingRight: 18 }}>
        <Feather name="play-circle" color='white' size={28} />
        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white' }}>{text}</Text>
      </View>
    </Pressable>
  )
}

function AddTaskButton({navigation}) {
  return (
    <Pressable onPress={() => navigation.navigate('AddTasks')}>
      <View style={{backgroundColor: Themes.colors.darkgray, borderRadius: 6, padding: 10}}>
        <Text style={{fontFamily: 'Poppins', fontSize: 20, color: 'white'}}>+ add task</Text>
      </View>
    </Pressable>
  )
}

function TaskCard({ task }) {
  const [active, setActive] = React.useState(false);

  return (
    <View style={styles.box}>
      <LinearGradient colors={[Themes.colors.lightpurple, Themes.colors.white]}>
      <View style={styles.infoBox}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={styles.title}>{task.name}</Text>
          <Pressable><Text style={styles.mark}>mark as done</Text></Pressable>
        </View>
        <View style={{marginTop: 25}}>
          <View style={styles.infoLine}>
            <Feather name="clock" color={Themes.colors.purple} size={24} />
            <View style={{marginLeft: 5}}><Text style={styles.info}>{task.session.length} hr session: ({task.session.completed} of {task.session.total}) </Text></View>
          </View>
          <View style={styles.infoLine}>
            <Feather name="calendar" color={Themes.colors.purple} size={24} />
            <View style={{ marginLeft: 5 }}><Text style={styles.info}>{task.timeDue.day} {task.timeDue.date}</Text></View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 15, marginRight: 10, marginBottom: 15, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Pressable>
          <View style={{width: 150, height: 45, backgroundColor: Themes.colors.purple, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 18, paddingRight: 18}}>
            <Feather name="play-circle" color='white' size={28} />
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: 'white' }}>resume</Text>
          </View>
        </Pressable>
      </View>
      </LinearGradient>
    </View>
  );
}
export default function Tasks({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <Header text={'your tasks'} />
      
      <View style={styles.container}>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
          <MaterialCommunityIcons name="sort-ascending" color={Themes.colors.darkgray} size={40} />
          <AddTaskButton navigation={navigation} />
        </View>
        <ScrollView style={{ width: '100%' }}>
          <TaskCard task={{ name: 'CS106A', session: {length: 4, total: 2, completed: 1}, timeDue: {day: 'monday', date: '11/5'} }} />
          <TaskCard task={{ name: 'Taxes', session: { length: 2, total: 1, completed: 0}, timeDue: { day: 'monday', date: '11/5' } }} />
          <TaskCard task={{ name: 'Psych PSET', session: { length: 2, total: 4, completed: 0 }, timeDue: { day: 'monday', date: '11/5' } }} />
        </ScrollView>  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: windowWidth * 0.32,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    marginLeft: '2.5%',
    width: '95%',
    height: 240, 
    marginBottom: 25,
    borderRadius: 12,
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: Themes.colors.darkgray
  },
  mark: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: Themes.colors.purple,
  },
  infoBox: {
    height: 170,
    flexDirection: 'column',
    backgroundColor: Themes.colors.white,
    width: '100%',
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    marginBotton: 20,
  },
  infoLine: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  info: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: Themes.colors.darkgray,
  }
});
