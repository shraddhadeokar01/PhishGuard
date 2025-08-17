// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //     View,
// // //     Text,
// // //     TextInput,
// // //     TouchableOpacity,
// // //     StyleSheet,
// // //     ImageBackground,
// // //     SafeAreaView,
// // //     Alert
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // // import Icon2 from 'react-native-vector-icons/Ionicons';
// // // import Icon3 from 'react-native-vector-icons/Ionicons';
// // // import Icon4 from 'react-native-vector-icons/FontAwesome';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import axios from 'axios';

// // // const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

// // // const ProfileScreen = ({ navigation }) => {
// // //     const [link, setLink] = useState('');
// // //     const [activeTab, setActiveTab] = useState('ProfileScreen');

// // //     const [user, setUser] = useState({
// // //         fullName: '',
// // //         email: '',
// // //         mobile: '',
// // //     });

// // //     useEffect(() => {
// // //         const fetchUserData = async () => {
// // //             try {
// // //                 const identifier = await AsyncStorage.getItem('userIdentifier');
// // //                 if (!identifier) {
// // //                     Alert.alert('Error', 'User not logged in');
// // //                     return;
// // //                 }

// // //                 const response = await axios.get(URL);
// // //                 const users = response.data;

// // //                 const matchedUser = Object.values(users || {}).find(
// // //                     (u) =>
// // //                         u.email?.toLowerCase() === identifier.toLowerCase() ||
// // //                         u.contact === identifier
// // //                 );

// // //                 if (matchedUser) {
// // //                     setUser({
// // //                         fullName: matchedUser.name || '',
// // //                         email: matchedUser.email || '',
// // //                         mobile: matchedUser.contact || '',
// // //                     });
// // //                 } else {
// // //                     Alert.alert('Error', 'User data not found');
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Error fetching user:', error);
// // //                 Alert.alert('Error', 'Failed to load user data');
// // //             }
// // //         };

// // //         fetchUserData();
// // //     }, []);

// // //     return (
// // //         <ImageBackground
// // //             source={require('../assets/background1.jpg')}
// // //             style={styles.background}
// // //             resizeMode="cover"
// // //         >
// // //             <SafeAreaView style={styles.container}>
// // //                 <View style={styles.header}>
// // //                     <Text style={styles.title}>Profile</Text>
// // //                     <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
// // //                         <Text style={styles.edit}>Edit</Text>
// // //                     </TouchableOpacity>
// // //                 </View>

// // //                 <View style={styles.avatarContainer}>
// // //                     <Icon name="user-circle" size={80} color="#fff" />
// // //                     <Text style={styles.name}>{user.fullName}</Text>
// // //                 </View>

// // //                 <View style={styles.form}>
// // //                     <TextInput
// // //                         style={styles.input}
// // //                         placeholder="Full Name"
// // //                         placeholderTextColor="#001a33"
// // //                         value={user.fullName}
// // //                         editable={false}
// // //                     />
// // //                     <TextInput
// // //                         style={styles.input}
// // //                         placeholder="Email Address"
// // //                         placeholderTextColor="#001a33"
// // //                         keyboardType="email-address"
// // //                         value={user.email}
// // //                         editable={false}
// // //                     />
// // //                     <TextInput
// // //                         style={styles.input}
// // //                         placeholder="Mobile Number"
// // //                         placeholderTextColor="#001a33"
// // //                         keyboardType="phone-pad"
// // //                         value={user.mobile}
// // //                         editable={false}
// // //                     />
// // //                 </View>

// // //                 <View style={styles.bottomBar}>
// // //                     <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
// // //                         <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// // //                     </TouchableOpacity>
// // //                     <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
// // //                         <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// // //                     </TouchableOpacity>
// // //                     <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
// // //                         <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// // //                     </TouchableOpacity>
// // //                     <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
// // //                         <Icon4 name="user-circle-o" size={26} color={activeTab === 'ProfileScreen' ? '#13376eff' : 'gray'} />
// // //                     </TouchableOpacity>
// // //                 </View>
// // //             </SafeAreaView>
// // //         </ImageBackground>
// // //     );
// // // };

// // // const styles = StyleSheet.create({
// // //     background: {
// // //         flex: 1,
// // //     },
// // //     container: {
// // //         flex: 1,
// // //         padding: 20,
// // //     },
// // //     header: {
// // //         marginTop: 10,
// // //         flexDirection: 'row',
// // //         justifyContent: 'space-between',
// // //         alignItems: 'center',
// // //     },
// // //     title: {
// // //         fontSize: 26,
// // //         fontWeight: 'bold',
// // //         color: '#fff',
// // //         marginTop: -10
// // //     },
// // //     edit: {
// // //         fontSize: 16,
// // //         color: '#66b3ff',
// // //     },
// // //     avatarContainer: {
// // //         alignItems: 'center',
// // //         marginVertical: 30,
// // //     },
// // //     name: {
// // //         fontSize: 18,
// // //         color: '#fff',
// // //         marginTop: 10,
// // //         fontWeight: '600',
// // //         marginBottom: 15
// // //     },
// // //     form: {
// // //         width: '100%',
// // //     },
// // //     input: {
// // //         backgroundColor: '#c7daf7',
// // //         borderRadius: 15,
// // //         paddingVertical: 12,
// // //         paddingHorizontal: 15,
// // //         fontSize: 15,
// // //         marginBottom: 20,
// // //         color: '#001a33',
// // //     },
// // //     bottomBar: {
// // //         position: 'absolute',
// // //         bottom: 0,
// // //         left: 0,
// // //         right: 0,
// // //         height: 55,
// // //         backgroundColor: 'white',
// // //         borderTopWidth: 1,
// // //         flexDirection: 'row',
// // //         justifyContent: 'space-around',
// // //         alignItems: 'center',
// // //     },
// // //     tabItem: {
// // //         color: '#004d2c',
// // //         fontWeight: '600',
// // //         fontSize: 40,
// // //     },
// // // });

// // // export default ProfileScreen;


// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //     View,
// // // //     Text,
// // // //     TextInput,
// // // //     TouchablOpacity,
// // // //     StyleSheet,
// // // //     ImageBackground,
// // // //     SafeAreaView,
// // // // } from 'react-native';
// // // // import AsyncStorage from '@react-native-async-storage/async-storage'; // ✅ ADDED
// // // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // // // import Icon2 from 'react-native-vector-icons/Ionicons';
// // // // import Icon3 from 'react-native-vector-icons/Ionicons';
// // // // import Icon4 from 'react-native-vector-icons/FontAwesome';

// // // // const ProfileScreen = ({ navigation }) => {
// // // //     const [link, setLink] = useState('');
// // // //     const [activeTab, setActiveTab] = useState('ProfileScreen');
// // // //     const [user, setUser] = useState({
// // // //         fullName: '',
// // // //         email: '',
// // // //         mobile: '',
// // // //     });

// // // //     // ✅ REPLACED hardcoded user with AsyncStorage data
// // // //     useEffect(() => {
// // // //         const fetchUser = async () => {
// // // //             try {
// // // //                 const storedUser = await AsyncStorage.getItem('loggedInUser');
// // // //                 if (storedUser) {
// // // //                     const parsed = JSON.parse(storedUser);
// // // //                     setUser({
// // // //                         fullName: parsed.name || '',
// // // //                         email: parsed.email || '',
// // // //                         mobile: parsed.contact || '',
// // // //                     });
// // // //                 }
// // // //             } catch (error) {
// // // //                 console.error('Error loading user from storage:', error);
// // // //             }
// // // //         };
// // // //         fetchUser();
// // // //     }, []);

// // // //     return (
// // // //         <ImageBackground
// // // //             source={require('../assets/background1.jpg')}
// // // //             style={styles.background}
// // // //             resizeMode="cover"
// // // //         >
// // // //             <SafeAreaView style={styles.container}>
// // // //                 <View style={styles.header}>
// // // //                     <Text style={styles.title}>Profile</Text>
// // // //                     <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
// // // //                         <Text style={styles.edit}>Edit</Text>
// // // //                     </TouchableOpacity>
// // // //                 </View>

// // // //                 <View style={styles.avatarContainer}>
// // // //                     <Icon name="user-circle" size={80} color="#fff" />
// // // //                     <Text style={styles.name}>{user.fullName}</Text>
// // // //                 </View>

// // // //                 <View style={styles.form}>
// // // //                     <TextInput
// // // //                         style={styles.input}
// // // //                         placeholder="Full Name"
// // // //                         placeholderTextColor="#001a33"
// // // //                         value={user.fullName}
// // // //                         editable={false}
// // // //                     />
// // // //                     <TextInput
// // // //                         style={styles.input}
// // // //                         placeholder="Email Address"
// // // //                         placeholderTextColor="#001a33"
// // // //                         keyboardType="email-address"
// // // //                         value={user.email}
// // // //                         editable={false}
// // // //                     />
// // // //                     <TextInput
// // // //                         style={styles.input}
// // // //                         placeholder="Mobile Number"
// // // //                         placeholderTextColor="#001a33"
// // // //                         keyboardType="phone-pad"
// // // //                         value={user.mobile}
// // // //                         editable={false}
// // // //                     />
// // // //                 </View>
// // // //                 <View style={styles.bottomBar}>
// // // //                     <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
// // // //                         <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// // // //                     </TouchableOpacity>
// // // //                     <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
// // // //                         <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// // // //                     </TouchableOpacity>
// // // //                     <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
// // // //                         <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// // // //                     </TouchableOpacity>
// // // //                     <TouchableOpacity onPress={() => { setActiveTab('Profile'); }}>
// // // //                         <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
// // // //                     </TouchableOpacity>
// // // //                 </View>
// // // //             </SafeAreaView>
// // // //         </ImageBackground>
// // // //     );
// // // // };

// // // // // Styles unchanged
// // // // const styles = StyleSheet.create({
// // // //     background: { flex: 1 },
// // // //     container: { flex: 1, padding: 20 },
// // // //     header: {
// // // //         marginTop: 10,
// // // //         flexDirection: 'row',
// // // //         justifyContent: 'space-between',
// // // //         alignItems: 'center',
// // // //     },
// // // //     title: {
// // // //         fontSize: 26,
// // // //         fontWeight: 'bold',
// // // //         color: '#fff',
// // // //         marginTop: -10,
// // // //     },
// // // //     edit: {
// // // //         fontSize: 16,
// // // //         color: '#66b3ff',
// // // //     },
// // // //     avatarContainer: {
// // // //         alignItems: 'center',
// // // //         marginVertical: 30,
// // // //     },
// // // //     name: {
// // // //         fontSize: 18,
// // // //         color: '#fff',
// // // //         marginTop: 10,
// // // //         fontWeight: '600',
// // // //         marginBottom: 15,
// // // //     },
// // // //     form: { width: '100%' },
// // // //     input: {
// // // //         backgroundColor: '#c7daf7',
// // // //         borderRadius: 15,
// // // //         paddingVertical: 12,
// // // //         paddingHorizontal: 15,
// // // //         fontSize: 15,
// // // //         marginBottom: 20,
// // // //         color: '#001a33',
// // // //     },
// // // //     bottomBar: {
// // // //         position: 'absolute',
// // // //         bottom: 0,
// // // //         left: 0,
// // // //         right: 0,
// // // //         height: 55,
// // // //         backgroundColor: 'white',
// // // //         borderTopWidth: 1,
// // // //         borderColor: 'darkgreen',
// // // //         flexDirection: 'row',
// // // //         justifyContent: 'space-around',
// // // //         alignItems: 'center',
// // // //     },
// // // //     tabItem: {
// // // //         color: '#004d2c',
// // // //         fontWeight: '600',
// // // //         fontSize: 40,
// // // //     },
// // // // });

// // // // export default ProfileScreen;


// // // // //imp^^^^^^




// // // // // import React, { useEffect, useState } from 'react';
// // // // // import {
// // // // //   View, Text, TextInput, TouchableOpacity,
// // // // //   StyleSheet, ImageBackground, SafeAreaView
// // // // // } from 'react-native';
// // // // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // // // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // // // // import Icon2 from 'react-native-vector-icons/Ionicons';
// // // // // import Icon3 from 'react-native-vector-icons/Ionicons';
// // // // // import Icon4 from 'react-native-vector-icons/FontAwesome';

// // // // // const ProfileScreen = ({ navigation }) => {
// // // // //   const [link, setLink] = useState('');
// // // // //   const [activeTab, setActiveTab] = useState('ProfileScreen');
// // // // //   const [user, setUser] = useState({ fullName: '', email: '', mobile: '' });

// // // // //   useEffect(() => {
// // // // //     const loadUser = async () => {
// // // // //       const stored = await AsyncStorage.getItem('currentUser');
// // // // //       if (stored) setUser(JSON.parse(stored));
// // // // //     };
// // // // //     loadUser();
// // // // //   }, []);

// // // // //   return (
// // // // //     <ImageBackground source={require('../assets/background1.jpg')} style={styles.background}>
// // // // //       <SafeAreaView style={styles.container}>
// // // // //         <View style={styles.header}>
// // // // //           <Text style={styles.title}>Profile</Text>
// // // // //           <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
// // // // //             <Text style={styles.edit}>Edit</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>

// // // // //         <View style={styles.avatarContainer}>
// // // // //           <Icon name="user-circle" size={80} color="#fff" />
// // // // //           <Text style={styles.name}>{user.fullName}</Text>
// // // // //         </View>

// // // // //         <View style={styles.form}>
// // // // //           <TextInput style={styles.input} value={user.fullName} placeholder="Full Name" editable={false} />
// // // // //           <TextInput style={styles.input} value={user.email} placeholder="Email" editable={false} />
// // // // //           <TextInput style={styles.input} value={user.mobile} placeholder="Mobile" editable={false} />
// // // // //         </View>

// // // // //         <View style={styles.bottomBar}>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
// // // // //             <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
// // // // //             <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
// // // // //             <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity onPress={() => setActiveTab('Profile')}>
// // // // //             <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </SafeAreaView>
// // // // //     </ImageBackground>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //     background: { flex: 1 },
// // // // //     container: { flex: 1, padding: 20 },
// // // // //     header: {
// // // // //         marginTop: 10,
// // // // //         flexDirection: 'row',
// // // // //         justifyContent: 'space-between',
// // // // //         alignItems: 'center',
// // // // //     },
// // // // //     title: {
// // // // //         fontSize: 26,
// // // // //         fontWeight: 'bold',
// // // // //         color: '#fff',
// // // // //         marginTop: -10,
// // // // //     },
// // // // //     edit: {
// // // // //         fontSize: 16,
// // // // //         color: '#66b3ff',
// // // // //     },
// // // // //     avatarContainer: {
// // // // //         alignItems: 'center',
// // // // //         marginVertical: 30,
// // // // //     },
// // // // //     name: {
// // // // //         fontSize: 18,
// // // // //         color: '#fff',
// // // // //         marginTop: 10,
// // // // //         fontWeight: '600',
// // // // //         marginBottom: 15,
// // // // //     },
// // // // //     form: { width: '100%' },
// // // // //     input: {
// // // // //         backgroundColor: '#c7daf7',
// // // // //         borderRadius: 15,
// // // // //         paddingVertical: 12,
// // // // //         paddingHorizontal: 15,
// // // // //         fontSize: 15,
// // // // //         marginBottom: 20,
// // // // //         color: '#001a33',
// // // // //     },
// // // // //     bottomBar: {
// // // // //         position: 'absolute',
// // // // //         bottom: 0,
// // // // //         left: 0,
// // // // //         right: 0,
// // // // //         height: 55,
// // // // //         backgroundColor: 'white',
// // // // //         borderTopWidth: 1,
// // // // //         borderColor: 'darkgreen',
// // // // //         flexDirection: 'row',
// // // // //         justifyContent: 'space-around',
// // // // //         alignItems: 'center',
// // // // //     },
// // // // //     tabItem: {
// // // // //         color: '#004d2c',
// // // // //         fontWeight: '600',
// // // // //         fontSize: 40,
// // // // //     },
// // // // // });

// // // // // export default ProfileScreen;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   TextInput,
// // // // //   TouchableOpacity,
// // // // //   StyleSheet,
// // // // //   ImageBackground,
// // // // //   SafeAreaView,
// // // // // } from 'react-native';
// // // // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // // // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // // // // import Icon2 from 'react-native-vector-icons/Ionicons';
// // // // // import Icon3 from 'react-native-vector-icons/Ionicons';
// // // // // import Icon4 from 'react-native-vector-icons/FontAwesome';
// // // // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // // // import axios from 'axios';
// // // // // import { Alert } from 'react-native';

// // // // // const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

// // // // // const ProfileScreen = ({ navigation }) => {
// // // // //   const [activeTab, setActiveTab] = useState('ProfileScreen');
// // // // //   const [user, setUser] = useState({
// // // // //     fullName: '',
// // // // //     email: '',
// // // // //     mobile: '',
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     const fetchUserData = async () => {
// // // // //       try {
// // // // //         const identifier = await AsyncStorage.getItem('userIdentifier');
// // // // //         if (!identifier) {
// // // // //           Alert.alert('Error', 'User not logged in');
// // // // //           return;
// // // // //         }

// // // // //         const response = await axios.get(URL);
// // // // //         const users = response.data;

// // // // //         const matchedUser = Object.values(users || {}).find(
// // // // //           (u) =>
// // // // //             u.email?.toLowerCase() === identifier.toLowerCase() ||
// // // // //             u.contact === identifier
// // // // //         );

// // // // //         if (matchedUser) {
// // // // //           setUser({
// // // // //             fullName: matchedUser.name || '',
// // // // //             email: matchedUser.email || '',
// // // // //             mobile: matchedUser.contact || '',
// // // // //           });
// // // // //         } else {
// // // // //           Alert.alert('Error', 'User data not found');
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching user:', error);
// // // // //         Alert.alert('Error', 'Failed to load user data');
// // // // //       }
// // // // //     };

// // // // //     fetchUserData();
// // // // //   }, []);

// // // // //   return (
// // // // //     <ImageBackground
// // // // //       source={require('../assets/background1.jpg')}
// // // // //       style={styles.background}
// // // // //       resizeMode="cover"
// // // // //     >
// // // // //       <SafeAreaView style={styles.container}>
// // // // //         <View style={styles.header}>
// // // // //           <Text style={styles.title}>Profile</Text>
// // // // //           <TouchableOpacity onPress={() => navigation.navigate('EditProfile1')}>
// // // // //             <Text style={styles.edit}>Edit</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>

// // // // //         <View style={styles.avatarContainer}>
// // // // //           <Icon name="user-circle" size={80} color="#fff" />
// // // // //           <Text style={styles.name}>{user.fullName}</Text>
// // // // //         </View>

// // // // //         <View style={styles.form}>
// // // // //           <TextInput
// // // // //             style={styles.input}
// // // // //             placeholder="Full Name"
// // // // //             placeholderTextColor="#001a33"
// // // // //             value={user.fullName}
// // // // //             editable={false}
// // // // //           />
// // // // //           <TextInput
// // // // //             style={styles.input}
// // // // //             placeholder="Email Address"
// // // // //             placeholderTextColor="#001a33"
// // // // //             keyboardType="email-address"
// // // // //             value={user.email}
// // // // //             editable={false}
// // // // //           />
// // // // //           <TextInput
// // // // //             style={styles.input}
// // // // //             placeholder="Mobile Number"
// // // // //             placeholderTextColor="#001a33"
// // // // //             keyboardType="phone-pad"
// // // // //             value={user.mobile}
// // // // //             editable={false}
// // // // //           />
// // // // //         </View>

// // // // //         <View style={styles.bottomBar}>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('Home1'); navigation.navigate('Home1') }}>
// // // // //             <Icon1 name="home" size={35} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('Settings1'); navigation.navigate('Settings1') }}>
// // // // //             <Icon2 name="settings" size={35} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('ChatBotScreen'); navigation.navigate('ChatBotScreen') }}>
// // // // //             <Icon3 name="chatbox-ellipses" size={35} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity onPress={() => { setActiveTab('Profile1'); }}>
// // // // //             <Icon4 name="user-circle-o" size={35} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </SafeAreaView>
// // // // //     </ImageBackground>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   background: { flex: 1 },
// // // // //   container: { flex: 1, padding: 20 },
// // // // //   header: {
// // // // //     marginTop: 10,
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
// // // // //   edit: { fontSize: 16, color: '#66b3ff' },
// // // // //   avatarContainer: {
// // // // //     alignItems: 'center',
// // // // //     marginVertical: 30,
// // // // //   },
// // // // //   name: {
// // // // //     fontSize: 18,
// // // // //     color: '#fff',
// // // // //     marginTop: 10,
// // // // //     fontWeight: '600',
// // // // //     marginBottom: 15,
// // // // //   },
// // // // //   form: { width: '100%' },
// // // // //   input: {
// // // // //     backgroundColor: '#c7daf7',
// // // // //     borderRadius: 15,
// // // // //     paddingVertical: 12,
// // // // //     paddingHorizontal: 15,
// // // // //     fontSize: 15,
// // // // //     marginBottom: 20,
// // // // //     color: '#001a33',
// // // // //   },
// // // // //   bottomBar: {
// // // // //     position: 'absolute',
// // // // //     bottom: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     height: 75,
// // // // //     backgroundColor: 'white',
// // // // //     borderTopWidth: 1,
// // // // //     borderColor: 'darkgreen',
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-around',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // // });

// // // // // export default ProfileScreen;




// // import React, { useState, useEffect } from 'react';
// // import {
// //     View,
// //     Text,
// //     TextInput,
// //     TouchableOpacity,
// //     StyleSheet,
// //     ImageBackground,
// //     SafeAreaView,
// //     Alert,
// //     Image
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // import Icon2 from 'react-native-vector-icons/Ionicons';
// // import Icon3 from 'react-native-vector-icons/Ionicons';
// // import Icon4 from 'react-native-vector-icons/FontAwesome';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // ✅ for plus icon
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import axios from 'axios';
// // import { launchImageLibrary } from 'react-native-image-picker';
// // import Modal from 'react-native-modal'; // ✅ Instagram-style bottom sheet

// // const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

// // const ProfileScreen = ({ navigation }) => {
// //     const [activeTab, setActiveTab] = useState('ProfileScreen');
// //     const [isModalVisible, setModalVisible] = useState(false);

// //     const [user, setUser] = useState({
// //         fullName: '',
// //         email: '',
// //         mobile: '',
// //         photoURL: '',
// //     });
// //     const [userKey, setUserKey] = useState(null);

// //     useEffect(() => {
// //         const fetchUserData = async () => {
// //             try {
// //                 const identifier = await AsyncStorage.getItem('userIdentifier');
// //                 if (!identifier) {
// //                     Alert.alert('Error', 'User not logged in');
// //                     return;
// //                 }

// //                 const response = await axios.get(URL);
// //                 const users = response.data;

// //                 const matchedUserKey = Object.keys(users || {}).find(
// //                     (key) =>
// //                         users[key].email?.toLowerCase() === identifier.toLowerCase() ||
// //                         users[key].contact === identifier
// //                 );

// //                 if (matchedUserKey) {
// //                     const matchedUser = users[matchedUserKey];
// //                     setUser({
// //                         fullName: matchedUser.name || '',
// //                         email: matchedUser.email || '',
// //                         mobile: matchedUser.contact || '',
// //                         photoURL: matchedUser.photoURL || '',
// //                     });
// //                     setUserKey(matchedUserKey);
// //                 } else {
// //                     Alert.alert('Error', 'User data not found');
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching user:', error);
// //                 Alert.alert('Error', 'Failed to load user data');
// //             }
// //         };

// //         fetchUserData();
// //     }, []);

// //     // ✅ Pick image
// //     const handleChangePhoto = () => {
// //         launchImageLibrary({ mediaType: 'photo' }, async (response) => {
// //             if (response.didCancel) return;
// //             if (response.errorMessage) {
// //                 Alert.alert('Error', response.errorMessage);
// //                 return;
// //             }
// //             const uri = response.assets[0].uri;
// //             setUser((prev) => ({ ...prev, photoURL: uri }));

// //             if (userKey) {
// //                 try {
// //                     await axios.patch(
// //                         `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
// //                         { photoURL: uri }
// //                     );
// //                 } catch (err) {
// //                     console.log(err);
// //                     Alert.alert('Error', 'Could not update photo');
// //                 }
// //             }
// //         });
// //         setModalVisible(false);
// //     };

// //     // ✅ Remove photo
// //     const handleRemovePhoto = async () => {
// //         setUser((prev) => ({ ...prev, photoURL: '' }));
// //         if (userKey) {
// //             try {
// //                 await axios.patch(
// //                     `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
// //                     { photoURL: '' }
// //                 );
// //             } catch (err) {
// //                 console.log(err);
// //                 Alert.alert('Error', 'Could not remove photo');
// //             }
// //         }
// //         setModalVisible(false);
// //     };

// //     return (
// //         <ImageBackground
// //             source={require('../assets/background1.jpg')}
// //             style={styles.background}
// //             resizeMode="cover"
// //         >
// //             <SafeAreaView style={styles.container}>
// //                 <View style={styles.header}>
// //                     <Text style={styles.title}>Profile</Text>
// //                     <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
// //                         <Text style={styles.edit}>Edit</Text>
// //                     </TouchableOpacity>
// //                 </View>

// //                 <View style={styles.avatarContainer}>
// //                     {user.photoURL ? (
// //                         <Image source={{ uri: user.photoURL }} style={styles.avatar} />
// //                     ) : (
// //                         <Icon name="user-circle" size={100} color="#fff" />
// //                     )}

// //                     {/* ✅ Stylish Plus Icon */}
// //                     <TouchableOpacity style={styles.plusIcon} onPress={() => setModalVisible(true)}>
// //                         <MaterialIcons name="add" size={24} color="#fff" />
// //                     </TouchableOpacity>

// //                     <Text style={styles.name}>{user.fullName}</Text>
// //                 </View>

// //                 <View style={styles.form}>
// //                     <TextInput style={styles.input} placeholder="Full Name" value={user.fullName} editable={false} />
// //                     <TextInput style={styles.input} placeholder="Email Address" value={user.email} editable={false} />
// //                     <TextInput style={styles.input} placeholder="Mobile Number" value={user.mobile} editable={false} />
// //                 </View>

// //                 {/* ✅ Instagram Style Bottom Sheet */}
// //                 <Modal
// //                     isVisible={isModalVisible}
// //                     onBackdropPress={() => setModalVisible(false)}
// //                     style={styles.modal}
// //                 >
// //                     <View style={styles.modalContent}>
// //                         <TouchableOpacity style={styles.modalButton} onPress={handleChangePhoto}>
// //                             <Text style={styles.modalText}>🖼️ Add New Profile Picture</Text>
// //                         </TouchableOpacity>
// //                         <TouchableOpacity style={[styles.modalButton, { borderBottomWidth: 0 }]} onPress={handleRemovePhoto}>
// //                             <Text style={[styles.modalText, { color: 'red' }]}>❌ Remove Profile Picture</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 </Modal>

// //                 <View style={styles.bottomBar}>
// //                     <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
// //                         <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
// //                         <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
// //                         <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
// //                         <Icon4 name="user-circle-o" size={26} color={activeTab === 'ProfileScreen' ? '#13376eff' : 'gray'} />
// //                     </TouchableOpacity>
// //                 </View>
// //             </SafeAreaView>
// //         </ImageBackground>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     background: { flex: 1 },
// //     container: { flex: 1, padding: 20 },
// //     header: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// //     title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
// //     edit: { fontSize: 16, color: '#66b3ff' },
// //     avatarContainer: { alignItems: 'center', marginVertical: 30, position: 'relative' },
// //     avatar: { width: 100, height: 100, borderRadius: 50 },
// //     plusIcon: {
// //         position: 'absolute',
// //         bottom: 0,
// //         right: '35%',
// //         backgroundColor: '#007bff',
// //         width: 35,
// //         height: 35,
// //         borderRadius: 20,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         borderWidth: 2,
// //         borderColor: '#fff',
// //     },
// //     name: { fontSize: 18, color: '#fff', marginTop: 10, fontWeight: '600', marginBottom: 15 },
// //     form: { width: '100%' },
// //     input: {
// //         backgroundColor: '#c7daf7',
// //         borderRadius: 15,
// //         paddingVertical: 12,
// //         paddingHorizontal: 15,
// //         fontSize: 15,
// //         marginBottom: 20,
// //         color: '#001a33',
// //     },
// //     bottomBar: {
// //         position: 'absolute',
// //         bottom: 0,
// //         left: 0,
// //         right: 0,
// //         height: 55,
// //         backgroundColor: 'white',
// //         borderTopWidth: 1,
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         alignItems: 'center',
// //     },
// //     modal: { justifyContent: 'flex-end', margin: 0 },
// //     modalContent: {
// //         backgroundColor: '#fff',
// //         borderTopLeftRadius: 20,
// //         borderTopRightRadius: 20,
// //         paddingVertical: 15,
// //         paddingHorizontal: 20,
// //     },
// //     modalButton: {
// //         paddingVertical: 15,
// //         borderBottomWidth: 1,
// //         borderBottomColor: '#ddd',
// //     },
// //     modalText: {
// //         fontSize: 16,
// //         fontWeight: '600',
// //         color: '#333',
// //         textAlign: 'center',
// //     },
// // });

// // export default ProfileScreen;

// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     ImageBackground,
//     SafeAreaView,
//     Alert,
//     Image
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // ✅ for plus icon
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { launchImageLibrary } from 'react-native-image-picker';
// import Modal from 'react-native-modal'; // ✅ Instagram-style bottom sheet

// const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

// const ProfileScreen = ({ navigation }) => {
//     const [activeTab, setActiveTab] = useState('ProfileScreen');
//     const [isModalVisible, setModalVisible] = useState(false);

//     const [user, setUser] = useState({
//         fullName: '',
//         email: '',
//         mobile: '',
//         photoURL: '',
//     });
//     const [userKey, setUserKey] = useState(null);

//     // ✅ new state for full image modal
//     const [isImageModalVisible, setImageModalVisible] = useState(false);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const identifier = await AsyncStorage.getItem('userIdentifier');
//                 if (!identifier) {
//                     Alert.alert('Error', 'User not logged in');
//                     return;
//                 }

//                 const response = await axios.get(URL);
//                 const users = response.data;

//                 const matchedUserKey = Object.keys(users || {}).find(
//                     (key) =>
//                         users[key].email?.toLowerCase() === identifier.toLowerCase() ||
//                         users[key].contact === identifier
//                 );

//                 if (matchedUserKey) {
//                     const matchedUser = users[matchedUserKey];
//                     setUser({
//                         fullName: matchedUser.name || '',
//                         email: matchedUser.email || '',
//                         mobile: matchedUser.contact || '',
//                         photoURL: matchedUser.photoURL || '',
//                     });
//                     setUserKey(matchedUserKey);
//                 } else {
//                     Alert.alert('Error', 'User data not found');
//                 }
//             } catch (error) {
//                 console.error('Error fetching user:', error);
//                 Alert.alert('Error', 'Failed to load user data');
//             }
//         };

//         fetchUserData();
//     }, []);

//     // ✅ Pick image
//     const handleChangePhoto = () => {
//         launchImageLibrary({ mediaType: 'photo' }, async (response) => {
//             if (response.didCancel) return;
//             if (response.errorMessage) {
//                 Alert.alert('Error', response.errorMessage);
//                 return;
//             }
//             const uri = response.assets[0].uri;
//             setUser((prev) => ({ ...prev, photoURL: uri }));

//             if (userKey) {
//                 try {
//                     await axios.patch(
//                         `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
//                         { photoURL: uri }
//                     );
//                 } catch (err) {
//                     console.log(err);
//                     Alert.alert('Error', 'Could not update photo');
//                 }
//             }
//         });
//         setModalVisible(false);
//     };

//     // ✅ Remove photo
//     const handleRemovePhoto = async () => {
//         setUser((prev) => ({ ...prev, photoURL: '' }));
//         if (userKey) {
//             try {
//                 await axios.patch(
//                     `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
//                     { photoURL: '' }
//                 );
//             } catch (err) {
//                 console.log(err);
//                 Alert.alert('Error', 'Could not remove photo');
//             }
//         }
//         setModalVisible(false);
//     };

//     return (
//         <ImageBackground
//             source={require('../assets/background1.jpg')}
//             style={styles.background}
//             resizeMode="cover"
//         >
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Profile</Text>
//                     <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
//                         <Text style={styles.edit}>Edit</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.avatarContainer}>
//                     {user.photoURL ? (
//                         <TouchableOpacity onPress={() => setImageModalVisible(true)}>
//                             <Image source={{ uri: user.photoURL }} style={styles.avatar} resizeMode="cover" />
//                         </TouchableOpacity>
//                     ) : (
//                         <Icon name="user-circle" size={100} color="#fff" />
//                     )}

//                     {/* ✅ Stylish Plus Icon */}
//                     <TouchableOpacity style={styles.plusIcon} onPress={() => setModalVisible(true)}>
//                         <MaterialIcons name="add" size={24} color="#fff" />
//                     </TouchableOpacity>

//                     <Text style={styles.name}>{user.fullName}</Text>
//                 </View>

//                 <View style={styles.form}>
//                     <TextInput style={styles.input} placeholder="Full Name" value={user.fullName} editable={false} />
//                     <TextInput style={styles.input} placeholder="Email Address" value={user.email} editable={false} />
//                     <TextInput style={styles.input} placeholder="Mobile Number" value={user.mobile} editable={false} />
//                 </View>

//                 {/* ✅ Instagram Style Bottom Sheet */}
//                 <Modal
//                     isVisible={isModalVisible}
//                     onBackdropPress={() => setModalVisible(false)}
//                     style={styles.modal}
//                 >
//                     <View style={styles.modalContent}>
//                         <TouchableOpacity style={styles.modalButton} onPress={handleChangePhoto}>
//                             <Text style={styles.modalText}>🖼️ Add New Profile Picture</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={[styles.modalButton, { borderBottomWidth: 0 }]} onPress={handleRemovePhoto}>
//                             <Text style={[styles.modalText, { color: 'red' }]}>❌ Remove Profile Picture</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Modal>

//                 {/* ✅ Full Screen Image Viewer */}
//                 <Modal
//                     isVisible={isImageModalVisible}
//                     onBackdropPress={() => setImageModalVisible(false)}
//                     style={styles.fullImageModal}
//                 >
//                     <View style={styles.fullImageContainer}>
//                         <Image
//                             source={{ uri: user?.photoURL }}
//                             style={styles.fullImage}
//                             resizeMode="contain"
//                         />
//                     </View>
//                 </Modal>

//                 <View style={styles.bottomBar}>
//                     <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
//                         <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
//                         <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
//                         <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
//                         <Icon4 name="user-circle-o" size={26} color={activeTab === 'ProfileScreen' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                 </View>
//             </SafeAreaView>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     background: { flex: 1 },
//     container: { flex: 1, padding: 20 },
//     header: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//     title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
//     edit: { fontSize: 16, color: '#66b3ff' },
//     avatarContainer: { alignItems: 'center', marginVertical: 30, position: 'relative' },
//     avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff' },
//     plusIcon: {
//         position: 'absolute',
//         bottom: 0,
//         right: '35%',
//         backgroundColor: '#007bff',
//         width: 35,
//         height: 35,
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 2,
//         borderColor: '#fff',
//     },
//     name: { fontSize: 18, color: '#fff', marginTop: 10, fontWeight: '600', marginBottom: 15 },
//     form: { width: '100%' },
//     input: {
//         backgroundColor: '#c7daf7',
//         borderRadius: 15,
//         paddingVertical: 12,
//         paddingHorizontal: 15,
//         fontSize: 15,
//         marginBottom: 20,
//         color: '#001a33',
//     },
//     bottomBar: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         height: 55,
//         backgroundColor: 'white',
//         borderTopWidth: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//     },
//     modal: { justifyContent: 'flex-end', margin: 0 },
//     modalContent: {
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         paddingVertical: 15,
//         paddingHorizontal: 20,
//     },
//     modalButton: {
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     modalText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//         textAlign: 'center',
//     },
//     fullImageModal: {
//         margin: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     fullImageContainer: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     fullImage: {
//         width: '100%',
//         height: '100%',
//     },
// });

// export default ProfileScreen;

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
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // ✅ for plus icon
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Modal from 'react-native-modal'; // ✅ Instagram-style bottom sheet
import ImagePicker from 'react-native-image-crop-picker'; // ✅ for square crop

const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

const ProfileScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('ProfileScreen');
    const [isModalVisible, setModalVisible] = useState(false);

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        mobile: '',
        photoURL: '',
    });
    const [userKey, setUserKey] = useState(null);

    // ✅ new state for full image modal
    const [isImageModalVisible, setImageModalVisible] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const identifier = await AsyncStorage.getItem('userIdentifier');
                if (!identifier) {
                    Alert.alert('Error', 'User not logged in');
                    return;
                }

                const response = await axios.get(URL);
                const users = response.data;

                const matchedUserKey = Object.keys(users || {}).find(
                    (key) =>
                        users[key].email?.toLowerCase() === identifier.toLowerCase() ||
                        users[key].contact === identifier
                );

                if (matchedUserKey) {
                    const matchedUser = users[matchedUserKey];
                    setUser({
                        fullName: matchedUser.name || '',
                        email: matchedUser.email || '',
                        mobile: matchedUser.contact || '',
                        photoURL: matchedUser.photoURL || '',
                    });
                    setUserKey(matchedUserKey);
                } else {
                    Alert.alert('Error', 'User data not found');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                Alert.alert('Error', 'Failed to load user data');
            }
        };

        fetchUserData();
    }, []);

    // ✅ Pick image with square crop
    const handleChangePhoto = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true, // enable cropping
            cropperCircleOverlay: false, // ✅ square frame
        }).then(async (image) => {
            const uri = image.path;
            setUser((prev) => ({ ...prev, photoURL: uri }));

            if (userKey) {
                try {
                    await axios.patch(
                        `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
                        { photoURL: uri }
                    );
                } catch (err) {
                    console.log(err);
                    Alert.alert('Error', 'Could not update photo');
                }
            }
        }).catch(err => console.log(err));

        setModalVisible(false);
    };

    // ✅ Remove photo
    const handleRemovePhoto = async () => {
        setUser((prev) => ({ ...prev, photoURL: '' }));
        if (userKey) {
            try {
                await axios.patch(
                    `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
                    { photoURL: '' }
                );
            } catch (err) {
                console.log(err);
                Alert.alert('Error', 'Could not remove photo');
            }
        }
        setModalVisible(false);
    };

    return (
        <ImageBackground
            source={require('../assets/background1.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
                        <Text style={styles.edit}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.avatarContainer}>
                    {user.photoURL ? (
                        <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                            <Image source={{ uri: user.photoURL }} style={styles.avatar} resizeMode="cover" />
                        </TouchableOpacity>
                    ) : (
                        <Icon name="user-circle" size={100} color="#fff" />
                    )}

                    {/* ✅ Stylish Plus Icon */}
                    <TouchableOpacity style={styles.plusIcon} onPress={() => setModalVisible(true)}>
                        <MaterialIcons name="add" size={24} color="#fff" />
                    </TouchableOpacity>

                    <Text style={styles.name}>{user.fullName}</Text>
                </View>

                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Full Name" value={user.fullName} editable={false} />
                    <TextInput style={styles.input} placeholder="Email Address" value={user.email} editable={false} />
                    <TextInput style={styles.input} placeholder="Mobile Number" value={user.mobile} editable={false} />
                </View>

                {/* ✅ Instagram Style Bottom Sheet */}
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.modal}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.modalButton} onPress={handleChangePhoto}>
                            <Text style={styles.modalText}>🖼 Add New Profile Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, { borderBottomWidth: 0 }]} onPress={handleRemovePhoto}>
                            <Text style={[styles.modalText, { color: 'red' }]}>❌ Remove Profile Picture</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                {/* ✅ Full Screen Image Viewer (tap anywhere to exit) */}
                <Modal
                    isVisible={isImageModalVisible}
                    onBackdropPress={() => setImageModalVisible(false)}
                    style={styles.fullImageModal}
                >
                    <TouchableOpacity 
                        style={styles.fullImageContainer} 
                        activeOpacity={1} 
                        onPress={() => setImageModalVisible(false)}
                    >
                        <Image
                            source={{ uri: user?.photoURL }}
                            style={styles.fullImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </Modal>

                <View style={styles.bottomBar}>
                    <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
                        <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
                        <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
                        <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
                        <Icon4 name="user-circle-o" size={26} color={activeTab === 'ProfileScreen' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: { flex: 1 },
    container: { flex: 1, padding: 20 },
    header: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
    edit: { fontSize: 16, color: '#66b3ff' },
    avatarContainer: { alignItems: 'center', marginVertical: 30, position: 'relative' },
    avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 2, borderColor: '#fff' },
    plusIcon: {
        position: 'absolute',
        bottom: 48,
        right: '34%',
        backgroundColor: '#007bff',
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    name: { fontSize: 18, color: '#fff', marginTop: 10, fontWeight: '600', marginBottom: 15 },
    form: { width: '100%' },
    input: {
        backgroundColor: '#c7daf7',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 15,
        marginBottom: 20,
        color: '#001a33',
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
    modal: { justifyContent: 'flex-end', margin: 0 },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    modalButton: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    modalText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    fullImageModal: {
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '100%',
        height: '100%',
    },
});

export default ProfileScreen;