import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsScreen from './Settings';
import EditProfileScreen from './EditProfile';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Icon name="user-circle" size={60} color="black" />
        </View>
        <View style={styles.profileText}>
          <Text style={styles.name}>Sujal Bidve</Text>
          <Text style={styles.phone}>+91 9405941398</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate('EditProfilescreen')}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Mobile Number" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Homee')}>
          <Text style={styles.tabItem}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.tabItem}>⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Theme clicked!')}>
          <Text style={styles.tabItem}>🎨</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.tabItem}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 100, // Prevents overlap with bottom bar
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    marginRight: 10,
  },
  profileText: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  phone: {
    fontSize: 14,
    color: '#444',
  },
  editText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  inputContainer: {
    gap: 10,
    marginBottom: 30,
    borderColor:'darkgreen',
    
  },
  input: {
    backgroundColor: '#eaffea',
    padding: 12,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'darkgreen'
  },
  logoutButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
   bottomBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 60,
  backgroundColor: '#eaffea',
  borderTopWidth: 1,
  borderColor: 'darkgreen',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  },
  tabItem: {
    color: '#004d2c',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default ProfileScreen;
