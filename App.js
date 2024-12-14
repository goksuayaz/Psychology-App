import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import EmotionScreen from './src/screens/EmotionScreen';



const Stack = createStackNavigator();

export default function App() {


  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="EmotionScreen" component={EmotionScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};