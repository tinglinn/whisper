import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Themes from './assets/Themes/index';
import Header from './components/header';
import SummaryScreen from './pages/summary';
import HomeScreen from './pages/home';

const Tab = createBottomTabNavigator();

// IMPORT SCREENS
import TasksScreen from './pages/task';
// function TasksScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Header text={"tasks"} />
//       <Text>tasks!</Text>
//     </SafeAreaView>
//   );
// }

function CalendarScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header text={"calendar"} />
      <Text>calendar!</Text>
    </SafeAreaView>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="Home"
      inactiveColor={Themes.colors.darkgray}
      screenOptions={{
        tabBarActiveTintColor: Themes.colors.verydark,
        headerShown: false,
        tabBarStyle: {padding: 8, height: 85},
        tabBarLabelStyle: {fontSize: 12, fontFamily: 'Poppins'} 
      }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={Themes.fonts.iconSize} />
        ),
      }} />
      <Tab.Screen name="Summary" component={SummaryScreen} options={{
        tabBarLabel: 'Summary',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="lightbulb" color={color} size={Themes.fonts.iconSize} />
        ),
      }} />
      <Tab.Screen name="Tasks" component={TasksScreen} options={{
        tabBarLabel: 'Tasks',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="format-list-checks" color={color} size={Themes.fonts.iconSize} />
        ),
      }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{
        tabBarLabel: 'Calendar',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calendar-month" color={color} size={Themes.fonts.iconSize} />
        ),
      }} />
  </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
