import { Text, View, StyleSheet } from 'react-native';

// IMPORTED STATEMENTS **
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

// IMPORTED SCREENS **
import ScreenTaskType from './createtask/ScreenTaskType';
import ScreenTaskType2 from './createtask/ScreenTaskType2';
import ScreenTaskType3 from './createtask/ScreenTaskType3';
import ScreenReviewTaskInfo from './createtask/ScreenReviewTaskInfo';
import ScreenCreateTasks from './createtask/ScreenCreateTasks';
import ScreenCreateTasks2 from './createtask/ScreenCreateTasks2';
import ScreenCreateTasks3 from './createtask/ScreenCreateTasks3';
import ScreenCreateTasks4 from './createtask/ScreenCreateTasks4';
import ScreenCreateTasks5 from './createtask/ScreenCreateTasks5';
import ScreenCreateTasksComplete from './createtask/ScreenCreateTasksComplete';

import TasksOverview from './workSession/taskPage';
import SetGoal from './workSession/setGoal';
import Timer from './workSession/timer';
import EndTask from './workSession/endTask';
// CREATE A STACK **
const Stack = createStackNavigator();

export default function App() {
    return (

        // SET UP THE NAVIGATION ** 
        <NavigationContainer independent={true} options={{ headerShown: false, }}>
            <Stack.Navigator >
                <Stack.Screen name="TasksOverview" options={{ headerShown: false }} component={TasksOverview} />
                <Stack.Screen name="ScreenTaskType" options={{ headerShown: false }} component={ScreenTaskType} />
                <Stack.Screen name="ScreenTaskType2" options={{ headerShown: false }} component={ScreenTaskType2} />
                <Stack.Screen name="ScreenTaskType3" options={{ headerShown: false }} component={ScreenTaskType3} />

                <Stack.Screen name="ScreenCreateTasks" options={{ headerShown: false }} component={ScreenCreateTasks} />
                <Stack.Screen name="ScreenCreateTasks2" options={{ headerShown: false }} component={ScreenCreateTasks2} />
                <Stack.Screen name="ScreenCreateTasks3" options={{ headerShown: false }} component={ScreenCreateTasks3} />
                <Stack.Screen name="ScreenCreateTasks4" options={{ headerShown: false }} component={ScreenCreateTasks4} />
                <Stack.Screen name="ScreenCreateTasks5" options={{ headerShown: false }} component={ScreenCreateTasks5} />
                <Stack.Screen name="ScreenCreateTasksComplete" options={{ headerShown: false }} component={ScreenCreateTasksComplete} />

                <Stack.Screen name="ScreenReviewTaskInfo" options={{ headerShown: false }} component={ScreenReviewTaskInfo} />
                
    
                <Stack.Screen name="SetGoal" options={{ headerShown: false }} component={SetGoal} />
                <Stack.Screen name="Timer" options={{ headerShown: false }} component={Timer} />
                <Stack.Screen name="EndTask" options={{ headerShown: false }} component={EndTask} />
            </Stack.Navigator>
        </NavigationContainer>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
