import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import EmotionScreen from './src/screens/EmotionScreen';
import CounselingScreen from './src/screens/CounselingScreen';
import AwarenessScreen from './src/screens/AwarenessScreen';
import InnerJScreen from './src/screens/InnerJScreen';
import SMScreen from './src/screens/SMScreen';
import BurnoutScreen from './src/screens/BurnoutScreen';
import LonelinessScreen from './src/screens/LonelinessScreen';
import SleepScreen from './src/screens/SleepScreen';




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
        <Stack.Screen options={{ headerShown: false }} name="SMScreen" component={SMScreen} />
        <Stack.Screen options={{ headerShown: false }} name="BurnoutScreen" component={BurnoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="LonelinessScreen" component={LonelinessScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SleepScreen" component={SleepScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};