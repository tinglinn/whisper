import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/header';
import Themes from '../../assets/Themes/index';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import DropdownComponent from './DropDownTasks';
import BackButton from "./backButton";
import React, { useState, useEffect } from 'react';
import { Flatlist} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { supabase } from '../../env/supabase';
import 'react-native-url-polyfill/auto'


export default function ScreenTaskType({ navigation }) { // note navigation pprop

 // store selected task and all tasks
  const [selectedTask, setSelected] = useState("");
    const [titles, setTitles] = useState([])
    
    // get tasks, store in titles
    useEffect(() => {
      fetchTasks()
      
    }, [])
    async function fetchTasks() {
      const {data, error} = await supabase
        .from("Tasks")
        .select("*")
      setTitles(data);
    }

    // render dropdown format
    const renderItem = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.Title}</Text>
          {item.value === item.Title && (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        </View>
      );
    };

  return (
    <View style={styles.screen}>
      <Header text={"add task"} />
      <BackButton navigation={navigation}/>
      <View style={styles.card}>

      
        <Text style={[styles.title, {marginBottom: 25}]}>What kind of task is this? </Text>

        <Text style={[styles.subtitle, {marginBottom: 15}]}>Task Type</Text>

        <View>
          <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={titles}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder=""
          searchPlaceholder="Search..."
          value={selectedTask}
          onChange={item => {
            setSelected(item.Title);
          }}
          renderLeftIcon={() => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              <Text style={styles.textItem}>{selectedTask}</Text>
            </View>
          )}
          renderItem={renderItem}
        />
        </View>

        
        <Pressable onPress={() => navigation.navigate('ScreenCreateTasks')}>
          <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}><Text style={[styles.bodyText]}>or Create new task type </Text><MaterialCommunityIcons name="arrow-right-circle" color={Themes.colors.darkgray} size={25} /></View>
        </Pressable>

      </View>

      <Pressable onPress={() => navigation.navigate('ScreenTaskType3', {data: titles, task: selectedTask})}>
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

  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    width: 320,
    
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    // flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins',
    
    
  },
  placeholderStyle: {
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  selectedTextStyle: {
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});
