import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = ({navigation}) => {
  const options = [
    'Themes',
    'Notifications',
    'Background',
    'Scan History',
    'Change password',
    'Help & Support',
    'About Us',
  ];

  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.header}> ⚙️ Settings</Text>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{option}</Text>
            <Icon name="arrow-right" size={18} color="#000" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Homee')}>
                 <Text style={styles.tabItem}>🏠</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Settingscreen')}>
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
    backgroundColor: '#fff',
  },
  header: {
    color: 'darkgreen',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  optionsContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  button: {
    backgroundColor: '#eaffea',
    borderRadius: 10,
    padding: 16,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'darkgreen'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: 'darkgreen',
    backgroundColor: '#eaffea',
  },
  tabItem: {
    color: '#004d2c',
    fontWeight: '600',
    fontSize:20
  },
});

export default SettingsScreen;