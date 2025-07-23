// HomeScreen.js
/*import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// Dummy Screens
const Settings = () => <View style={styles.screen}><Text style={styles.text}>Settings</Text></View>;
const Theme = () => <View style={styles.screen}><Text style={styles.text}>Theme</Text></View>;
const Profile = () => <View style={styles.screen}><Text style={styles.text}>Profile</Text></View>;

const Home = () => {
  const [url, setUrl] = useState('');

  const handleScan = () => {
    if (url === '') return alert('Please paste a link first!');
    // Here you could call an API or scan logic
    alert(`Scanning link: ${url}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Text style={styles.heading}>🔍 Phishing Link Scanner</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Paste suspicious link here"
          placeholderTextColor="#4a785c"
          style={styles.input}
          value={url}
          onChangeText={setUrl}
        />
        <TouchableOpacity style={styles.button} onPress={handleScan}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';
          else if (route.name === 'Theme') iconName = 'color-palette-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#004d2c', // dark green
        tabBarInactiveTintColor: '#7fbf7f', // light green
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#eaffea', // very light green
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Theme" component={Theme} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}*/


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import SettingsScreen from './Settings';
import ProfileScreen from './Profile';

const Homee = ({navigation}) => {
  const [url, setUrl] = useState('');

  const handleScan = () => {
    if (!url.trim()) {
      Alert.alert('Paste a link first!');
    } else {
      Alert.alert('Scanning', `Scanning link: ${url}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Text style={styles.heading}>🔍 Phishing Link Scanner</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Paste suspicious link here"
          placeholderTextColor="#4a785c"
          style={styles.input}
          value={url}
          onChangeText={setUrl}
        />
        <TouchableOpacity style={styles.button} onPress={handleScan}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>

        </Text>
      </View>

       <View style={styles.tipContainer}>
        <Text style={{fontSize:20,color:'#004d2c',paddingBottom:10,}}>
          💡Tip of The Day:
        </Text>
        <Text style={{fontSize:14,color:'#004d2c'}}>
                      Use strong, unique passwords!</Text>
       </View>

      {/*<TouchableOpacity style={styles.reportButton}>
         <Text style={styles.actionButtonText}>Report above link</Text>
       </TouchableOpacity>*/}

       <TouchableOpacity style={styles.actionButton}>
         <Text style={styles.actionButtonText}>Full Device Scan</Text>
       </TouchableOpacity>
       
     

      {/* Custom bottom tabs */}
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

export default Homee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d2c',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#eaffea',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: '#004d2c',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#004d2c',
    marginBottom: 16,
    backgroundColor: '#eaffea',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eaffea',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: 'darkgreen',

  },
  tabItem: {
    color: '#004d2c',
    fontWeight: '600',
    fontSize:20
  },
  DeviceButton: {
    backgroundColor: '#004d2c',
    paddingVertical:1,
    borderRadius: 8,
    alignItems: 'left',
    height:10    
  },
  DeviceContainer: {
    backgroundColor: '#eaffea',
    padding: 20,
    borderRadius: 10,
    marginTop:20,
    height:180
  },
  actionButton: {
    borderWidth:1,
    width:'100%',
    padding:10,
    marginBottom:10,
    borderRadius:10,
    backgroundColor:'green',
    height:45,
    width:'100%',
   // backgroundColor: '#e6ffe6',
    marginTop:10,
    borderColor:'green'
    // paddingVertical: 12,
    // paddingHorizontal: 20,
    // borderRadius: 16,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  tipContainer : {
    backgroundColor: '#eaffea',
    padding: 20,
    borderRadius: 10,
    marginBottom : 20
  },
  actionButtonText: {
    alignItems:'center',
    justifyContent:'center',
    marginLeft:95,
    color:'white',
    fontWeight:'bold',
   
  }
});



