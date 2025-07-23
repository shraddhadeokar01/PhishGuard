import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import AboutUsScreen from './AboutUs';
import BackgroundSettingsScreen from './BackgroundPlay';
import ChangePasswordScreen from './ChangePassword';
import HelpSupportScreen from './HelpSupport';
import ScanHistoryScreen from './ScanHistory';
import NotificationScreen from './NotificationScreen';

const SettingsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Settings');

  const handlePress = (option) => {
    switch (option) {
      case 'Notifications':
        navigation.navigate('NotificationsScreen');
        break;
      case 'Background':
        navigation.navigate('BackgroundSettingsScreen');
        break;
      case 'Scan History':
        navigation.navigate('ScanHistoryScreen');
        break;
      case 'Change Password':
        navigation.navigate('ChangePasswordScreen');
        break;
      case 'Help & Support':
        navigation.navigate('HelpSupportScreen');
        break;
      case 'About Us':
        navigation.navigate('AboutUsScreen');
        break;
      case 'Log Out':
        alert('Logged Out!');
        break;
      default:
        console.log(`${option} pressed`);
    }
    };

    const settingsOptions = [
      'Notifications',
      'Background',
      'Scan History',
      'Change Password',
      'Help & Support',
      'About Us',
      'Log Out',
    ];

    return (
      <ImageBackground
        source={require('../assets/background1.jpg')} // replace with your background image
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
              <Text style={styles.title}>Settings</Text>
              {settingsOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionButton}
                  onPress={() => handlePress(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                  <Icon name="chevron-forward-outline" size={20} color="#000" />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.bottomBar}>
              <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
                <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setActiveTab('Settings'); }}>
                <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
                <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
                <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      padding: 20,
      paddingBottom: 100,
      marginTop: 50,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 45,
      marginTop: -45
    },
    optionButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 12,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    optionText: {
      fontSize: 16,
      color: '#000',
    },
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderTopWidth: 1,
      borderColor: '#ccc',
    },
  });

  export default SettingsScreen;
