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
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Settings');
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

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
        setLogoutModalVisible(true); // Show modal instead of alert
        break;
      default:
        console.log(`${option} pressed`);
    }
  };

  const confirmLogout = async () => {
    try {
      await AsyncStorage.clear();
      setLogoutModalVisible(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (e) {
      console.log('Logout Error:', e);
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
      source={require('../assets/background1.jpg')}
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

        {/* Logout Confirmation Modal */}
        <Modal
          transparent
          visible={logoutModalVisible}
          animationType="fade"
          onRequestClose={() => setLogoutModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Confirm Logout</Text>
              <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={[styles.modalButton, { backgroundColor: 'gray' }]} onPress={() => setLogoutModalVisible(false)}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#ff4444' }]} onPress={confirmLogout}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    marginTop: -45,
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: 'white',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SettingsScreen;
