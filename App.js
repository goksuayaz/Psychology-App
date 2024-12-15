import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import EmotionScreen from './src/screens/EmotionScreen';
import CounselingScreen from './src/screens/CounselingScreen';
import AwarenessScreen from './src/screens/AwarenessScreen';
import InnerJScreen from './src/screens/InnerJScreen';



const Stack = createStackNavigator();

export default function App() {


  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="EmotionScreen" component={EmotionScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CounselingScreen" component={CounselingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AwarenessScreen" component={AwarenessScreen} />
        <Stack.Screen options={{ headerShown: false }} name="InnerJScreen" component={InnerJScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};