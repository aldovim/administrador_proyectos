import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { Home } from './app/Screens/Home';
import { Login } from './app/Screens/Login';
import { Register } from './app/Screens/Register';
import { Detail } from './app/Screens/Detail';

import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={({ navigation, route }) => ({
          headerShown: false
        })}/>

        <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
          headerBackVisible: false,
          headerRight: () => <Button title="Exit" onPress={() => { navigation.popToTop() }}/>
        })}/>

        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
