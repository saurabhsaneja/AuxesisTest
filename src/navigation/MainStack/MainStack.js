//react components
import React from 'react';
//stack
import {createStackNavigator} from '@react-navigation/stack';
//global
import {ScreenNames} from '../../global/Index';
//screens
import Login from 'screens/UserSection/Login/Login';
import Home from 'screens/UserSection/Home/Home';
const MainStack = () => {
  //variables
  const Stack = createStackNavigator();
  const initialRouteName = ScreenNames.LOGIN;
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
      <Stack.Screen name={ScreenNames.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
