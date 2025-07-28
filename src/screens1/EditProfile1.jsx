// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   SafeAreaView,
 
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/Ionicons';


// const EditProfileScreen = ({navigation}) => {
//   const [user, setUser] = useState({
//     firstName: 'Sujal',
//     lastName: 'Bidve',
//     email: 'sujalbidve001@gmail.com',
//     mobile: '9405941398',
//   });

//   const handleChange = (field, value) => {
//     setUser({ ...user, [field]: value });
//   };

//   const handleSave = () => {
//     alert('Profile Saved!');
//     // Save logic here (Firebase, API, etc.)
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.container}>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon1 name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>

//           <Text style={styles.title}>Edit Profile</Text>
//         </View>

//         <View style={styles.avatarContainer}>
//           <Icon name="user-circle" size={80} color="#fff" />
//           <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
//         </View>

//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             placeholderTextColor="#001a33"
//             value={user.firstName}
//             onChangeText={(text) => handleChange('firstName', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             placeholderTextColor="#001a33"
//             value={user.lastName}
//             onChangeText={(text) => handleChange('lastName', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="#001a33"
//             keyboardType="email-address"
//             value={user.email}
//             onChangeText={(text) => handleChange('email', text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             placeholderTextColor="#001a33"
//             keyboardType="phone-pad"
//             value={user.mobile}
//             onChangeText={(text) => handleChange('mobile', text)}
//           />

//           <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//             <Text style={styles.saveText}>Save</Text>
//           </TouchableOpacity>
//         </View>

//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     alignSelf: 'flex-start',
//     marginTop: 2,
//     marginLeft: 10
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center', // vertically center arrow and text
//     marginBottom: 25,
//   },
//   avatarContainer: {
//     alignItems: 'center',
//     marginVertical: 30,
//   },
//   name: {
//     fontSize: 18,
//     color: '#fff',
//     marginTop: 10,
//     fontWeight: '600',
//   },
//   form: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#c7daf7',
//     borderRadius: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     fontSize: 15,
//     marginBottom: 15,
//     color: '#001a33',
//   },
//   saveButton: {
//     backgroundColor: '#e0ecff',
//     borderRadius: 20,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   saveText: {
//     color: '#001a33',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 55,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderColor: 'darkgreen',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   tabItem: {
//     color: '#004d2c',
//     fontWeight: '600',
//     fontSize: 40,
//   },
// });

// export default EditProfileScreen;




import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });
  const [firebaseKey, setFirebaseKey] = useState('');

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const identifier = await AsyncStorage.getItem('userIdentifier');
        if (!identifier) return;

        const res = await axios.get('https://phishguard-78f53-default-rtdb.firebaseio.com/users.json');
        const users = res.data;

        for (const key in users) {
          const u = users[key];
          if (u.email?.toLowerCase() === identifier.toLowerCase() || u.contact === identifier) {
            const fullName = u.name?.split(' ') || ['', ''];
            setUser({
              firstName: fullName[0],
              lastName: fullName[1] || '',
              email: u.email || '',
              mobile: u.contact || '',
            });
            setFirebaseKey(key);
            break;
          }
        }
      } catch (err) {
        console.log('Fetch error:', err);
        Alert.alert('Error', 'Failed to load user data');
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    if (!firebaseKey) {
      Alert.alert('Error', 'User not identified');
      return;
    }

    const updatedUser = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      contact: user.mobile,
    };

    try {
      await axios.patch(`https://phishguard-78f53-default-rtdb.firebaseio.com/users/${firebaseKey}.json`, updatedUser);
      await AsyncStorage.setItem('currentUser', JSON.stringify(updatedUser));
      Alert.alert('Success ✅', 'Profile updated');
      navigation.goBack();
    } catch (err) {
      console.error('Update failed:', err);
      Alert.alert('Error ❌', 'Failed to update profile');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon1 name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Icon name="user-circle" size={80} color="#fff" />
          <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#001a33"
            value={user.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#001a33"
            value={user.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#001a33"
            keyboardType="email-address"
            value={user.email}
            onChangeText={(text) => handleChange('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#001a33"
            keyboardType="phone-pad"
            value={user.mobile}
            onChangeText={(text) => handleChange('mobile', text)}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 2,
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    fontWeight: '600',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#c7daf7',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 15,
    color: '#001a33',
  },
  saveButton: {
    backgroundColor: '#e0ecff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    color: '#001a33',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditProfileScreen;





// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ImageBackground,
// //   Alert,
// //   SafeAreaView,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const EditProfileScreen = ({ navigation }) => {
// //   const [user, setUser] = useState({
// //     fullName: '',
// //     email: '',
// //     mobile: '',
// //   });

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const userData = await AsyncStorage.getItem('loggedInUser');
// //         if (userData) {
// //           const parsed = JSON.parse(userData);
// //           setUser({
// //             fullName: parsed.name || '',
// //             email: parsed.email || '',
// //             mobile: parsed.contact || '',
// //           });
// //         }
// //       } catch (error) {
// //         Alert.alert('Error', 'Failed to load user data');
// //         console.error('AsyncStorage Error:', error);
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   const handleSave = () => {
// //     Alert.alert('Saved ✅', 'Profile updated (not really saved in this demo)');
// //     navigation.goBack();
// //   };

// //   return (
// //     <ImageBackground
// //       source={require('../assets/background1.jpg')}
// //       style={styles.background}
// //     >
// //       <SafeAreaView style={styles.container}>
// //         <Text style={styles.header}>Edit Profile</Text>

// //         <TextInput
// //           style={styles.input}
// //           placeholder="Full Name"
// //           value={user.fullName}
// //           onChangeText={(val) => setUser({ ...user, fullName: val })}
// //         />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Email Address"
// //           value={user.email}
// //           onChangeText={(val) => setUser({ ...user, email: val })}
// //         />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Mobile Number"
// //           value={user.mobile}
// //           onChangeText={(val) => setUser({ ...user, mobile: val })}
// //         />

// //         <TouchableOpacity style={styles.button} onPress={handleSave}>
// //           <Text style={styles.buttonText}>Save</Text>
// //         </TouchableOpacity>
// //       </SafeAreaView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //   },
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 26,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 30,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     backgroundColor: '#c7daf7',
// //     borderRadius: 15,
// //     paddingVertical: 12,
// //     paddingHorizontal: 15,
// //     fontSize: 15,
// //     marginBottom: 20,
// //     color: '#001a33',
// //   },
// //   button: {
// //     backgroundColor: '#003B73',
// //     paddingVertical: 12,
// //     borderRadius: 20,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //   },
// // });

// // export default EditProfileScreen;

// import React, { useEffect, useState } from 'react';
// import {
//   View, Text, TextInput, TouchableOpacity,
//   StyleSheet, ImageBackground, Alert
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const EditProfileScreen = ({ navigation }) => {
//   const [user, setUser] = useState({ fullName: '', email: '', mobile: '' });

//   useEffect(() => {
//     const loadUser = async () => {
//       const stored = await AsyncStorage.getItem('currentUser');
//       if (stored) setUser(JSON.parse(stored));
//     };
//     loadUser();
//   }, []);

//   const handleSave = async () => {
//     try {
//       await AsyncStorage.setItem('currentUser', JSON.stringify(user));
//       Alert.alert('Success', 'Profile updated');
//       navigation.goBack();
//     } catch (err) {
//       Alert.alert('Error', 'Failed to update');
//     }
//   };

//   return (
//     <ImageBackground source={require('../assets/background1.jpg')} style={styles.bg}>
//       <View style={styles.container}>
//         <Text style={styles.header}>Edit Profile</Text>

//         <TextInput style={styles.input} value={user.fullName}
//           onChangeText={(val) => setUser({ ...user, fullName: val })} placeholder="Full Name" />
//         <TextInput style={styles.input} value={user.email}
//           onChangeText={(val) => setUser({ ...user, email: val })} placeholder="Email" />
//         <TextInput style={styles.input} value={user.mobile}
//           onChangeText={(val) => setUser({ ...user, mobile: val })} placeholder="Mobile" />

//         <TouchableOpacity style={styles.button} onPress={handleSave}>
//           <Text style={styles.buttonText}>Save Changes</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   bg: { flex: 1 }, container: { flex: 1, padding: 20 },
//   header: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 30 },
//   input: { backgroundColor: '#fff', borderRadius: 15, marginBottom: 15, padding: 10 },
//   button: { backgroundColor: '#003B73', padding: 15, borderRadius: 10, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' }
// });

// export default EditProfileScreen;
