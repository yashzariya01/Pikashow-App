import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Bollywood from './src/screens/Bollywood';
import Hollywood from './src/screens/Hollywood';
import LiveTV from './src/screens/LiveTV';
import Series from './src/screens/Series';
import Search from './src/screens/Search';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isSplashvisible, setIsSplashvisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashvisible(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Splash">
      
      {isSplashvisible ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : null}

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bollywood" component={Bollywood} />
        <Stack.Screen name="Hollywood" component={Hollywood} />
        <Stack.Screen name="LiveTV" component={LiveTV} />
        <Stack.Screen name="Series" component={Series} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
