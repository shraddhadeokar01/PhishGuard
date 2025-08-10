import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotificationScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    const loadToggle = async () => {
      try {
        const value = await AsyncStorage.getItem('notificationsEnabled');
        if (value !== null) {
          setIsEnabled(JSON.parse(value));
        }
      } catch (e) {
        console.log('Failed to load notification setting', e);
      }
    };
    loadToggle();
  }, []);
  const toggleSwitch = async () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    try {
      await AsyncStorage.setItem('notificationsEnabled', JSON.stringify(newValue));
    } catch (e) {
      console.log('Failed to save notification setting', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/background1.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" marginBottom="54" marginLeft="-2"/>
          </TouchableOpacity>
          <Text style={styles.header}>Notifications</Text>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Allow Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#073866ff' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 60,
    marginTop:1,
    marginLeft: 10,
  },
  switchContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#000',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
export default NotificationScreen;
