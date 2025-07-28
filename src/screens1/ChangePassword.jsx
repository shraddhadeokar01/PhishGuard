

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com';

// const ChangePasswordScreen = ({ navigation }) => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleChangePassword = async () => {
//     if (!currentPassword || !newPassword || !confirmPassword) {
//       return Alert.alert('All fields are required!');
//     }

//     if (newPassword !== confirmPassword) {
//       return Alert.alert('Passwords do not match!');
//     }

//     try {
//       const storedUser = await AsyncStorage.getItem('currentUser');
//       const currentUser = JSON.parse(storedUser);

//       if (!currentUser) {
//         return Alert.alert('Error', 'No user is currently logged in.');
//       }

//       if (currentUser.password !== currentPassword) {
//         return Alert.alert('Incorrect Password', 'Current password is incorrect.');
//       }

//       // Fetch all users to get the Firebase key of current user
//       const response = await axios.get(`${URL}/users.json`);
//       const users = response.data;

//       const userEntry = Object.entries(users || {}).find(
//         ([key, user]) =>
//           (user.email === currentUser.email || user.contact === currentUser.contact) &&
//           user.password === currentUser.password
//       );

//       if (!userEntry) {
//         return Alert.alert('Error', 'User not found in database.');
//       }

//       const userKey = userEntry[0];

//       // Update password in DB
//       await axios.patch(`${URL}/users/${userKey}.json`, {
//         password: newPassword,
//       });

//       // Update password in AsyncStorage
//       const updatedUser = { ...currentUser, password: newPassword };
//       await AsyncStorage.setItem('currentUser', JSON.stringify(updatedUser));

//       Alert.alert('Success ✅', 'Password changed successfully!');
//       navigation.goBack();
//     } catch (error) {
//       console.error('Password Change Error:', error);
//       Alert.alert('❌ Error', 'Something went wrong');
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
//       style={styles.background}
//     >
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.header}>Change Password</Text>
//       </View>

//       <Text style={styles.label}>Current Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter current password"
//         secureTextEntry={true}
//         placeholderTextColor="gray"
//         value={currentPassword}
//         onChangeText={setCurrentPassword}
//       />

//       <Text style={styles.label}>New Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter new password"
//         secureTextEntry={true}
//         placeholderTextColor="gray"
//         value={newPassword}
//         onChangeText={setNewPassword}
//       />

//       <Text style={styles.label}>Confirm Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm new password"
//         secureTextEntry={true}
//         placeholderTextColor="gray"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
//         <Text style={styles.buttonText}>Save</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     padding: 20,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 60,
//   },
//   header: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     marginTop: -2,
//   },
//   label: {
//     color: 'white',
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: 'rgba(255,255,255,0.6)',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 15,
//     color: 'black',
//   },
//   button: {
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 20,
//     paddingVertical: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#000',
//     fontWeight: '600',
//   },
// });

// export default ChangePasswordScreen;

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com';

const ChangePasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strengthLabel, setStrengthLabel] = useState('');
  const [strengthColor, setStrengthColor] = useState('red');
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const evaluateStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[\W_]/.test(password)) score++;

    let label = '🔓 Weak';
    let width = 30;
    let color = 'red';

    if (score >= 3) {
      label = '🛡️ Medium';
      width = 66;
      color = 'orange';
    }
    if (score === 4) {
      label = '💪 Strong';
      width = 100;
      color = 'lightgreen';
    }

    setStrengthLabel(label);
    setStrengthColor(color);

    Animated.timing(animatedWidth, {
      toValue: width,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return Alert.alert('All fields are required!');
    }

    if (newPassword.length < 8) {
      return Alert.alert('Password too short', 'Password must be at least 8 characters long.');
    }

    if (newPassword !== confirmPassword) {
      return Alert.alert('Passwords do not match!');
    }

    try {
      const storedUser = await AsyncStorage.getItem('currentUser');
      const currentUser = JSON.parse(storedUser);

      if (!currentUser) {
        return Alert.alert('Error', 'No user is currently logged in.');
      }

      if (currentUser.password !== currentPassword) {
        return Alert.alert('Incorrect Password', 'Current password is incorrect.');
      }

      const response = await axios.get(`${URL}/users.json`);
      const users = response.data;

      const userEntry = Object.entries(users || {}).find(
        ([key, user]) =>
          (user.email === currentUser.email || user.contact === currentUser.contact) &&
          user.password === currentUser.password
      );

      if (!userEntry) {
        return Alert.alert('Error', 'User not found in database.');
      }

      const userKey = userEntry[0];

      await axios.patch(`${URL}/users/${userKey}.json`, {
        password: newPassword,
      });

      const updatedUser = { ...currentUser, password: newPassword };
      await AsyncStorage.setItem('currentUser', JSON.stringify(updatedUser));

      Alert.alert('✅ Success', 'Password changed successfully!');
      navigation.goBack();
    } catch (error) {
      console.error('Password Change Error:', error);
      Alert.alert('❌ Error', 'Something went wrong');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" marginBottom="-7" marginLeft="-5"/>
        </TouchableOpacity>
        <Text style={styles.header}>Change Password</Text>
      </View>

      <Text style={styles.label}>Current Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter current password"
        secureTextEntry={true}
        placeholderTextColor="gray"
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry={true}
        placeholderTextColor="gray"
        value={newPassword}
        onChangeText={(text) => {
          setNewPassword(text);
          evaluateStrength(text);
        }}
      />

      {/* Animated Strength Meter */}
      {newPassword.length > 0 && (
        <>
          <View style={styles.strengthBarContainer}>
            <Animated.View
              style={[
                styles.strengthBar,
                {
                  width: animatedWidth.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                  }),
                  backgroundColor: strengthColor,
                },
              ]}
            />
          </View>
          <Text style={[styles.strengthLabel, { color: strengthColor }]}>
            {strengthLabel}
          </Text>
        </>
      )}

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        secureTextEntry={true}
        placeholderTextColor="gray"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop:1.25,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: 'black',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
  strengthBarContainer: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 6,
  },
  strengthBar: {
    height: 10,
    borderRadius: 6,
  },
  strengthLabel: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default ChangePasswordScreen;
