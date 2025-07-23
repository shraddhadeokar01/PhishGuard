// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   ImageBackground,
//   Platform,
//   KeyboardAvoidingView,
// } from 'react-native';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';

// const HomeScreen = () => {
//   const [link, setLink] = useState('');

//   const handleScan = () => {
//     if (!link.trim()) {
//       Alert.alert('Please paste a link to scan!');
//     } else {
//       Alert.alert('Scanning link...', link);
//     }
//   };

//   const handleReport = () => {
//     if (!link.trim()) {
//       Alert.alert('No link to report!');
//     } else {
//       Alert.alert('Link reported!', link);
//     }
//   };

//   const handleFullScan = () => {
//     Alert.alert('Performing full device scan...');
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')} // Optional background
//       style={styles.bg}
//       resizeMode="cover"
//     >
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={{ flex: 1 }}
//       >
//         <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
//           <Text style={styles.heading}>Phishing Link Scanner</Text>

//           <View style={styles.card}>
//             <TextInput
//               style={styles.input}
//               placeholder="Paste link here..."
//               placeholderTextColor="#001a33"
//               value={link}
//               onChangeText={setLink}
//             />
//             <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
//               <Text style={styles.scanText}>Scan</Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.secondaryButton} onPress={handleReport}>
//             <Text style={styles.secondaryText}>Report above link</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.secondaryButton} onPress={handleFullScan}>
//             <Text style={styles.secondaryText}>Full Device Scan</Text>
//           </TouchableOpacity>

//           <View style={styles.tipsCard}>
//             <Text style={styles.tipTitle}>Tips & Warning Section</Text>
//             <Text style={styles.tipText}>Don't click Unknown Shortened URLs</Text>
//             <Text style={styles.tipText}>
//               Scam Alert : <Text style={{ fontWeight: 'bold' }}>FAKE banking SMSes are on the rise !</Text>
//             </Text>
//           </View>
//           <View style={styles.bottomBar}>
//             <TouchableOpacity onPress={() => alert('Home clicked!')}>
//               <Icon1 name="home" size={26} color="#0052cc" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => alert('Settings clicked!')}>
//               <Icon2 name="settings" size={26} color="#0052cc" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => alert('Theme clicked!')}>
//               <Icon3 name="chatbox-ellipses" size={26} color="#0052cc" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => alert('Profile clicked!')}>
//               <Icon4 name="user-circle-o" size={26} color="#0052cc" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   bg: {
//     flex: 1,
//     backgroundColor: '#001f3f', // Fallback color if no image
//   },
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: 30,
//     marginBottom: 10,
//   },
//   subheading: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#d6e4f5',
//     borderRadius: 15,
//     width: '100%',
//     padding: 20,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: '#eee',
//     width: '100%',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     fontSize: 14,
//     marginBottom: 15,
//     color: 'black',
//     borderWidth: 0.5
//   },
//   scanButton: {
//     backgroundColor: '#e0ecff',
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   scanText: {
//     color: '#0052cc',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   secondaryButton: {
//     backgroundColor: '#b3c9e7',
//     width: '100%',
//     borderRadius: 15,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   secondaryText: {
//     color: '#001a33',
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   tipsCard: {
//     backgroundColor: '#d6e4f5',
//     width: '100%',
//     borderRadius: 15,
//     padding: 20,
//     marginTop: 10,
//   },
//   tipTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#001a33',
//   },
//   tipText: {
//     color: '#222',
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#f0f8ff',
//   },
//   tabItem: {
//     alignItems: 'center',
//   },
//   tabText: {
//     fontSize: 12,
//     color: '#0052cc',
//     marginTop: 2,
//   },
//     bottomBar: {
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   right: 0,
//   height: 60,
//   backgroundColor: '#eaffea',
//   borderTopWidth: 1,
//   borderColor: 'darkgreen',
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   },
//   tabItem: {
//     color: '#004d2c',
//     fontWeight: '600',
//     fontSize:40,
//   },
// });

// export default HomeScreen;



import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const [link, setLink] = useState('');
  const [activeTab, setActiveTab] = useState('Home'); // 🔵 Added active tab state

  const handleScan = () => {
    if (!link.trim()) {
      Alert.alert('Please paste a link to scan!');
    } else {
      Alert.alert('Scanning link...', link);
    }
  };

  const handleReport = () => {
    if (!link.trim()) {
      Alert.alert('No link to report!');
    } else {
      Alert.alert('Link reported!', link);
    }
  };

  const handleFullScan = () => {
    Alert.alert('Performing full device scan...');
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>Phishing Link Scanner</Text>

          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Paste link here..."
              placeholderTextColor="#001a33"
              value={link}
              onChangeText={setLink}
            />
            <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
              <Text style={styles.scanText}>Scan</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleReport}>
            <Text style={styles.secondaryText}>Report above link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton1} onPress={handleFullScan}>
            <Text style={styles.secondaryText1}>Full Device Scan</Text>
          </TouchableOpacity>

          <View style={styles.tipsCard}>
            <Text style={styles.tipTitle}>Tips & Warning Section</Text>
            <Text style={styles.tipText}>Don't click Unknown Shortened URLs</Text>
            <Text style={styles.tipText}>
              Scam Alert : <Text style={{ fontWeight: 'bold' }}>FAKE banking SMSes are on the rise !</Text>
            </Text>
          </View>

          {/* 🔵 Bottom Bar with active state icons */}
          <View style={styles.bottomBar}>
            <TouchableOpacity onPress={() => { setActiveTab('Home');}}>
              <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab('Settings');navigation.navigate('SettingsScreen')}}>
              <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
              <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab('Profile');navigation.navigate('ProfileScreen')}}>
              <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#001f3f',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#d6e4f5',
    borderRadius: 15,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginBottom: -30,
    marginTop:50
  },
  input: {
    backgroundColor: '#eee',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 15,
    color: 'black',
    borderWidth: 0.5,
  },
  scanButton: {
    backgroundColor: '#e0ecff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  scanText: {
    color: '#0052cc',
    fontWeight: 'bold',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: '#b3c9e7',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: -45,
    marginTop:70
  },
  secondaryText: {
    color: '#001a33',
    fontWeight: '600',
    fontSize: 15,
  },
    secondaryButton1: {
    backgroundColor: '#b3c9e7',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: -60,
    marginTop:70
  },
  secondaryText1: {
    color: '#001a33',
    fontWeight: '600',
    fontSize: 15,
  },
  tipsCard: {
    backgroundColor: '#d6e4f5',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginTop: 90,

  },
  tipTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#001a33',
  },
  tipText: {
    color: '#222',
    fontSize: 14,
    marginBottom: 5,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f8ff',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#0052cc',
    marginTop: 2,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'darkgreen',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    color: '#004d2c',
    fontWeight: '600',
    fontSize: 40,
  },
});

export default HomeScreen;
