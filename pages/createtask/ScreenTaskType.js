import { Text, View, StyleSheet, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DropdownComponent from './DropDownTasks';

// 
export default function ScreenTaskType({ navigation }) { // note navigation pprop
  return (
    <View style={styles.screenOne}>
      
      <Text style={styles.screenOneText}> What kind of task is this? </Text>
      
      <Text > Task Type </Text>
      <DropdownComponent></DropdownComponent>

      <Button title="Next" onPress={() => navigation.navigate('ScreenReviewTaskInfo')}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});