
import React from 'react';
import {
  StyleSheet, Text, StatusBar, View, Image, TextInput, Button, Touchable, TouchableOpacity, ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginView from './src/screen/login/LoginView';
import SignUpView from './src/screen/Signup/SignupView';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
       
          name="login"
          component={LoginView}
          options={{ title: 'Welcome',
          headerShown: false,
        headerStyle:{
          backgroundColor:'green',
        },
        headerTitleStyle: { color: 'red' },
       }}
        />
        <Stack.Screen name="signUp" component={SignUpView}  options={{ title: 'Register' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
export default App;
