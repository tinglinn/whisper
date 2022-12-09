  import React, { useState, useEffect } from 'react';
  import { Flatlist} from 'react';
  import { StyleSheet, View, Text } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';

  import { supabase } from '../../env/supabase';
  import 'react-native-url-polyfill/auto'

  const DropdownComponent = () => {
  const [value, setValue] = useState("");
  const [selectedTask, setSelected] = useState("");

  const [titles, setTitles] = useState([])
  
  useEffect(() => {
    fetchTasks()
    console.log(titles);
  }, [])
  async function fetchTasks() {
    const {data, error} = await supabase
      .from("Tasks")
      .select("*")
    setTitles(data)
  }

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
          console.log(selectedTask);
        }}
        renderLeftIcon={() => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            <Text style={styles.textItem}>{selectedTask}</Text>
          </View>
        )}
        renderItem={renderItem}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
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