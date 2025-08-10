

import React from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, Alert, StyleSheet, Style } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens1/Log1';
import SignUpScreen from './src/screens1/Sign1.jsx';
import HomeScreen from './src/screens1/Home1.jsx';
import ProfileScreen from './src/screens1/Profile1';
import EditProfileScreen from './src/screens1/EditProfile1';
import SettingsScreen from './src/screens1/Settings1';
import HelpSupportScreen from './src/screens1/HelpSupport';
import ChangePasswordScreen from './src/screens1/ChangePassword';
import ScanHistoryScreen from './src/screens1/ScanHistory';
import BackgroundSettingsScreen from './src/screens1/BackgroundPlay';
import AboutUsScreen from './src/screens1/AboutUs';
import NotificationScreen from './src/screens1/NotificationScreen.jsx';
import ChatBotScreen from './src/screens1/ChatBotScreen.jsx';
import SplashScreen from './src/screens1/SplashScreen.jsx';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="BackgroundSettingsScreen" component={BackgroundSettingsScreen} />
        <Stack.Screen name="ScanHistoryScreen" component={ScanHistoryScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationScreen} />
        <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default App;


