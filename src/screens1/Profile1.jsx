import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

const ProfileScreen = ({ navigation }) => {
    const [link, setLink] = useState('');
    const [activeTab, setActiveTab] = useState('ProfileScreen');

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        mobile: '',
    });

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

                const matchedUser = Object.values(users || {}).find(
                    (u) =>
                        u.email?.toLowerCase() === identifier.toLowerCase() ||
                        u.contact === identifier
                );

                if (matchedUser) {
                    setUser({
                        fullName: matchedUser.name || '',
                        email: matchedUser.email || '',
                        mobile: matchedUser.contact || '',
                    });
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
                    <Icon name="user-circle" size={80} color="#fff" />
                    <Text style={styles.name}>{user.fullName}</Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#001a33"
                        value={user.fullName}
                        editable={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="#001a33"
                        keyboardType="email-address"
                        value={user.email}
                        editable={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        placeholderTextColor="#001a33"
                        keyboardType="phone-pad"
                        value={user.mobile}
                        editable={false}
                    />
                </View>

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
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: -10
    },
    edit: {
        fontSize: 16,
        color: '#66b3ff',
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
        marginBottom: 15
    },
    form: {
        width: '100%',
    },
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
    tabItem: {
        color: '#004d2c',
        fontWeight: '600',
        fontSize: 40,
    },
});

export default ProfileScreen;


// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchablOpacity,
//     StyleSheet,
//     ImageBackground,
//     SafeAreaView,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // ✅ ADDED
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';

// const ProfileScreen = ({ navigation }) => {
//     const [link, setLink] = useState('');
//     const [activeTab, setActiveTab] = useState('ProfileScreen');
//     const [user, setUser] = useState({
//         fullName: '',
//         email: '',
//         mobile: '',
//     });

//     // ✅ REPLACED hardcoded user with AsyncStorage data
//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const storedUser = await AsyncStorage.getItem('loggedInUser');
//                 if (storedUser) {
//                     const parsed = JSON.parse(storedUser);
//                     setUser({
//                         fullName: parsed.name || '',
//                         email: parsed.email || '',
//                         mobile: parsed.contact || '',
//                     });
//                 }
//             } catch (error) {
//                 console.error('Error loading user from storage:', error);
//             }
//         };
//         fetchUser();
//     }, []);

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
//                     <Icon name="user-circle" size={80} color="#fff" />
//                     <Text style={styles.name}>{user.fullName}</Text>
//                 </View>

//                 <View style={styles.form}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Full Name"
//                         placeholderTextColor="#001a33"
//                         value={user.fullName}
//                         editable={false}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email Address"
//                         placeholderTextColor="#001a33"
//                         keyboardType="email-address"
//                         value={user.email}
//                         editable={false}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Mobile Number"
//                         placeholderTextColor="#001a33"
//                         keyboardType="phone-pad"
//                         value={user.mobile}
//                         editable={false}
//                     />
//                 </View>
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
//                     <TouchableOpacity onPress={() => { setActiveTab('Profile'); }}>
//                         <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                 </View>
//             </SafeAreaView>
//         </ImageBackground>
//     );
// };

// // Styles unchanged
// const styles = StyleSheet.create({
//     background: { flex: 1 },
//     container: { flex: 1, padding: 20 },
//     header: {
//         marginTop: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 26,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginTop: -10,
//     },
//     edit: {
//         fontSize: 16,
//         color: '#66b3ff',
//     },
//     avatarContainer: {
//         alignItems: 'center',
//         marginVertical: 30,
//     },
//     name: {
//         fontSize: 18,
//         color: '#fff',
//         marginTop: 10,
//         fontWeight: '600',
//         marginBottom: 15,
//     },
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
//         borderColor: 'darkgreen',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//     },
//     tabItem: {
//         color: '#004d2c',
//         fontWeight: '600',
//         fontSize: 40,
//     },
// });

// export default ProfileScreen;


// //imp^^^^^^




// // import React, { useEffect, useState } from 'react';
// // import {
// //   View, Text, TextInput, TouchableOpacity,
// //   StyleSheet, ImageBackground, SafeAreaView
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // import Icon2 from 'react-native-vector-icons/Ionicons';
// // import Icon3 from 'react-native-vector-icons/Ionicons';
// // import Icon4 from 'react-native-vector-icons/FontAwesome';

// // const ProfileScreen = ({ navigation }) => {
// //   const [link, setLink] = useState('');
// //   const [activeTab, setActiveTab] = useState('ProfileScreen');
// //   const [user, setUser] = useState({ fullName: '', email: '', mobile: '' });

// //   useEffect(() => {
// //     const loadUser = async () => {
// //       const stored = await AsyncStorage.getItem('currentUser');
// //       if (stored) setUser(JSON.parse(stored));
// //     };
// //     loadUser();
// //   }, []);

// //   return (
// //     <ImageBackground source={require('../assets/background1.jpg')} style={styles.background}>
// //       <SafeAreaView style={styles.container}>
// //         <View style={styles.header}>
// //           <Text style={styles.title}>Profile</Text>
// //           <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
// //             <Text style={styles.edit}>Edit</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.avatarContainer}>
// //           <Icon name="user-circle" size={80} color="#fff" />
// //           <Text style={styles.name}>{user.fullName}</Text>
// //         </View>

// //         <View style={styles.form}>
// //           <TextInput style={styles.input} value={user.fullName} placeholder="Full Name" editable={false} />
// //           <TextInput style={styles.input} value={user.email} placeholder="Email" editable={false} />
// //           <TextInput style={styles.input} value={user.mobile} placeholder="Mobile" editable={false} />
// //         </View>

// //         <View style={styles.bottomBar}>
// //           <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
// //             <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
// //             <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
// //             <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => setActiveTab('Profile')}>
// //             <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //         </View>
// //       </SafeAreaView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //     background: { flex: 1 },
// //     container: { flex: 1, padding: 20 },
// //     header: {
// //         marginTop: 10,
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //     },
// //     title: {
// //         fontSize: 26,
// //         fontWeight: 'bold',
// //         color: '#fff',
// //         marginTop: -10,
// //     },
// //     edit: {
// //         fontSize: 16,
// //         color: '#66b3ff',
// //     },
// //     avatarContainer: {
// //         alignItems: 'center',
// //         marginVertical: 30,
// //     },
// //     name: {
// //         fontSize: 18,
// //         color: '#fff',
// //         marginTop: 10,
// //         fontWeight: '600',
// //         marginBottom: 15,
// //     },
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
// //         borderColor: 'darkgreen',
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //         alignItems: 'center',
// //     },
// //     tabItem: {
// //         color: '#004d2c',
// //         fontWeight: '600',
// //         fontSize: 40,
// //     },
// // });

// // export default ProfileScreen;

// // import React, { useEffect, useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ImageBackground,
// //   SafeAreaView,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // import Icon2 from 'react-native-vector-icons/Ionicons';
// // import Icon3 from 'react-native-vector-icons/Ionicons';
// // import Icon4 from 'react-native-vector-icons/FontAwesome';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import axios from 'axios';
// // import { Alert } from 'react-native';

// // const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

// // const ProfileScreen = ({ navigation }) => {
// //   const [activeTab, setActiveTab] = useState('ProfileScreen');
// //   const [user, setUser] = useState({
// //     fullName: '',
// //     email: '',
// //     mobile: '',
// //   });

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const identifier = await AsyncStorage.getItem('userIdentifier');
// //         if (!identifier) {
// //           Alert.alert('Error', 'User not logged in');
// //           return;
// //         }

// //         const response = await axios.get(URL);
// //         const users = response.data;

// //         const matchedUser = Object.values(users || {}).find(
// //           (u) =>
// //             u.email?.toLowerCase() === identifier.toLowerCase() ||
// //             u.contact === identifier
// //         );

// //         if (matchedUser) {
// //           setUser({
// //             fullName: matchedUser.name || '',
// //             email: matchedUser.email || '',
// //             mobile: matchedUser.contact || '',
// //           });
// //         } else {
// //           Alert.alert('Error', 'User data not found');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching user:', error);
// //         Alert.alert('Error', 'Failed to load user data');
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   return (
// //     <ImageBackground
// //       source={require('../assets/background1.jpg')}
// //       style={styles.background}
// //       resizeMode="cover"
// //     >
// //       <SafeAreaView style={styles.container}>
// //         <View style={styles.header}>
// //           <Text style={styles.title}>Profile</Text>
// //           <TouchableOpacity onPress={() => navigation.navigate('EditProfile1')}>
// //             <Text style={styles.edit}>Edit</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.avatarContainer}>
// //           <Icon name="user-circle" size={80} color="#fff" />
// //           <Text style={styles.name}>{user.fullName}</Text>
// //         </View>

// //         <View style={styles.form}>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Full Name"
// //             placeholderTextColor="#001a33"
// //             value={user.fullName}
// //             editable={false}
// //           />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Email Address"
// //             placeholderTextColor="#001a33"
// //             keyboardType="email-address"
// //             value={user.email}
// //             editable={false}
// //           />
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Mobile Number"
// //             placeholderTextColor="#001a33"
// //             keyboardType="phone-pad"
// //             value={user.mobile}
// //             editable={false}
// //           />
// //         </View>

// //         <View style={styles.bottomBar}>
// //           <TouchableOpacity onPress={() => { setActiveTab('Home1'); navigation.navigate('Home1') }}>
// //             <Icon1 name="home" size={35} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => { setActiveTab('Settings1'); navigation.navigate('Settings1') }}>
// //             <Icon2 name="settings" size={35} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => { setActiveTab('ChatBotScreen'); navigation.navigate('ChatBotScreen') }}>
// //             <Icon3 name="chatbox-ellipses" size={35} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => { setActiveTab('Profile1'); }}>
// //             <Icon4 name="user-circle-o" size={35} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
// //           </TouchableOpacity>
// //         </View>
// //       </SafeAreaView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: { flex: 1 },
// //   container: { flex: 1, padding: 20 },
// //   header: {
// //     marginTop: 10,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
// //   edit: { fontSize: 16, color: '#66b3ff' },
// //   avatarContainer: {
// //     alignItems: 'center',
// //     marginVertical: 30,
// //   },
// //   name: {
// //     fontSize: 18,
// //     color: '#fff',
// //     marginTop: 10,
// //     fontWeight: '600',
// //     marginBottom: 15,
// //   },
// //   form: { width: '100%' },
// //   input: {
// //     backgroundColor: '#c7daf7',
// //     borderRadius: 15,
// //     paddingVertical: 12,
// //     paddingHorizontal: 15,
// //     fontSize: 15,
// //     marginBottom: 20,
// //     color: '#001a33',
// //   },
// //   bottomBar: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     height: 75,
// //     backgroundColor: 'white',
// //     borderTopWidth: 1,
// //     borderColor: 'darkgreen',
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     alignItems: 'center',
// //   },
// // });

// // export default ProfileScreen;
