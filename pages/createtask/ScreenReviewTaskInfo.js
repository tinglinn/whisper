import { Text, View, StyleSheet } from 'react-native';

export default function ScreenReviewTaskInfo({ navigation }) {
  return (
    <View style={styles.screenTwo}>
      <Text style={styles.screenTwoText}>Screen Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});