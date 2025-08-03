// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   ScrollView,
// // //   Alert,
// // //   ImageBackground,
// // //   Platform,
// // //   KeyboardAvoidingView,
// // // } from 'react-native';
// // // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // // import Icon2 from 'react-native-vector-icons/Ionicons';
// // // import Icon3 from 'react-native-vector-icons/Ionicons';
// // // import Icon4 from 'react-native-vector-icons/FontAwesome';

// // // const HomeScreen = () => {
// // //   const [link, setLink] = useState('');

// // //   const handleScan = () => {
// // //     if (!link.trim()) {
// // //       Alert.alert('Please paste a link to scan!');
// // //     } else {
// // //       Alert.alert('Scanning link...', link);
// // //     }
// // //   };

// // //   const handleReport = () => {
// // //     if (!link.trim()) {
// // //       Alert.alert('No link to report!');
// // //     } else {
// // //       Alert.alert('Link reported!', link);
// // //     }
// // //   };

// // //   const handleFullScan = () => {
// // //     Alert.alert('Performing full device scan...');
// // //   };

// // //   return (
// // //     <ImageBackground
// // //       source={require('../assets/background1.jpg')} // Optional background
// // //       style={styles.bg}
// // //       resizeMode="cover"
// // //     >
// // //       <KeyboardAvoidingView
// // //         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
// // //         style={{ flex: 1 }}
// // //       >
// // //         <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
// // //           <Text style={styles.heading}>Phishing Link Scanner</Text>

// // //           <View style={styles.card}>
// // //             <TextInput
// // //               style={styles.input}
// // //               placeholder="Paste link here..."
// // //               placeholderTextColor="#001a33"
// // //               value={link}
// // //               onChangeText={setLink}
// // //             />
// // //             <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
// // //               <Text style={styles.scanText}>Scan</Text>
// // //             </TouchableOpacity>
// // //           </View>

// // //           <TouchableOpacity style={styles.secondaryButton} onPress={handleReport}>
// // //             <Text style={styles.secondaryText}>Report above link</Text>
// // //           </TouchableOpacity>

// // //           <TouchableOpacity style={styles.secondaryButton} onPress={handleFullScan}>
// // //             <Text style={styles.secondaryText}>Full Device Scan</Text>
// // //           </TouchableOpacity>

// // //           <View style={styles.tipsCard}>
// // //             <Text style={styles.tipTitle}>Tips & Warning Section</Text>
// // //             <Text style={styles.tipText}>Don't click Unknown Shortened URLs</Text>
// // //             <Text style={styles.tipText}>
// // //               Scam Alert : <Text style={{ fontWeight: 'bold' }}>FAKE banking SMSes are on the rise !</Text>
// // //             </Text>
// // //           </View>
// // //           <View style={styles.bottomBar}>
// // //             <TouchableOpacity onPress={() => alert('Home clicked!')}>
// // //               <Icon1 name="home" size={26} color="#0052cc" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity onPress={() => alert('Settings clicked!')}>
// // //               <Icon2 name="settings" size={26} color="#0052cc" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity onPress={() => alert('Theme clicked!')}>
// // //               <Icon3 name="chatbox-ellipses" size={26} color="#0052cc" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity onPress={() => alert('Profile clicked!')}>
// // //               <Icon4 name="user-circle-o" size={26} color="#0052cc" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         </ScrollView>
// // //       </KeyboardAvoidingView>
// // //     </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   bg: {
// // //     flex: 1,
// // //     backgroundColor: '#001f3f', // Fallback color if no image
// // //   },
// // //   container: {
// // //     flexGrow: 1,
// // //     padding: 20,
// // //     alignItems: 'center',
// // //     justifyContent: 'flex-start',
// // //   },
// // //   heading: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginTop: 30,
// // //     marginBottom: 10,
// // //   },
// // //   subheading: {
// // //     fontSize: 16,
// // //     color: '#fff',
// // //     marginBottom: 20,
// // //   },
// // //   card: {
// // //     backgroundColor: '#d6e4f5',
// // //     borderRadius: 15,
// // //     width: '100%',
// // //     padding: 20,
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   input: {
// // //     backgroundColor: '#eee',
// // //     width: '100%',
// // //     borderRadius: 10,
// // //     paddingHorizontal: 15,
// // //     paddingVertical: 10,
// // //     fontSize: 14,
// // //     marginBottom: 15,
// // //     color: 'black',
// // //     borderWidth: 0.5
// // //   },
// // //   scanButton: {
// // //     backgroundColor: '#e0ecff',
// // //     paddingHorizontal: 30,
// // //     paddingVertical: 10,
// // //     borderRadius: 20,
// // //   },
// // //   scanText: {
// // //     color: '#0052cc',
// // //     fontWeight: 'bold',
// // //     fontSize: 14,
// // //   },
// // //   secondaryButton: {
// // //     backgroundColor: '#b3c9e7',
// // //     width: '100%',
// // //     borderRadius: 15,
// // //     paddingVertical: 15,
// // //     alignItems: 'center',
// // //     marginBottom: 15,
// // //   },
// // //   secondaryText: {
// // //     color: '#001a33',
// // //     fontWeight: '600',
// // //     fontSize: 15,
// // //   },
// // //   tipsCard: {
// // //     backgroundColor: '#d6e4f5',
// // //     width: '100%',
// // //     borderRadius: 15,
// // //     padding: 20,
// // //     marginTop: 10,
// // //   },
// // //   tipTitle: {
// // //     fontWeight: 'bold',
// // //     fontSize: 16,
// // //     marginBottom: 10,
// // //     color: '#001a33',
// // //   },
// // //   tipText: {
// // //     color: '#222',
// // //     fontSize: 14,
// // //     marginBottom: 5,
// // //   },
// // //   tabBar: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     paddingVertical: 10,
// // //     borderTopWidth: 1,
// // //     borderColor: '#ccc',
// // //     backgroundColor: '#f0f8ff',
// // //   },
// // //   tabItem: {
// // //     alignItems: 'center',
// // //   },
// // //   tabText: {
// // //     fontSize: 12,
// // //     color: '#0052cc',
// // //     marginTop: 2,
// // //   },
// // //     bottomBar: {
// // //   position: 'absolute',
// // //   bottom: 0,
// // //   left: 0,
// // //   right: 0,
// // //   height: 60,
// // //   backgroundColor: '#eaffea',
// // //   borderTopWidth: 1,
// // //   borderColor: 'darkgreen',
// // //   flexDirection: 'row',
// // //   justifyContent: 'space-around',
// // //   alignItems: 'center',
// // //   },
// // //   tabItem: {
// // //     color: '#004d2c',
// // //     fontWeight: '600',
// // //     fontSize:40,
// // //   },
// // // });

// // // export default HomeScreen;



// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ScrollView,
// //   Alert,
// //   ImageBackground,
// //   Platform,
// //   KeyboardAvoidingView,
// // } from 'react-native';
// // import Icon1 from 'react-native-vector-icons/FontAwesome';
// // import Icon2 from 'react-native-vector-icons/Ionicons';
// // import Icon3 from 'react-native-vector-icons/Ionicons';
// // import Icon4 from 'react-native-vector-icons/FontAwesome';
// // import { decode as atob, encode as btoa } from 'base-64';
// // import database from '@react-native-firebase/database';
// // const HomeScreen = ({ navigation }) => {
// //   const [link, setLink] = useState('');
// //   const [activeTab, setActiveTab] = useState('HomeScreen');

// //   const handleScan = async () => {
// //   if (!link.trim()) {
// //     Alert.alert('Please paste a link to scan!');
// //     return;
// //   }

// //   try {
// //     const trimmedLink = link.trim();
// //     const encodedUrl = btoa(trimmedLink);

// //     const snapshot = await database()
// //       .ref(`phishing_links/${encodedUrl}`) 
// //       .once('value');

// //     if (snapshot.exists()) {
// //       const data = snapshot.val();

// //       Alert.alert(
// //         '⚠ Phishing Link Detected!',
// //         `URL: ${data.url}\nStatus: ${data.status}\nTags: ${data.tags}\nReported: ${data.date_added}`
// //       );
// //     } else {
// //       Alert.alert('✅ Safe Link', 'No phishing threat found for this URL.');
// //     }
// //   } catch (error) {
// //     console.error('Error scanning link:', error);
// //     Alert.alert('Error occurred during scan. Please try again.');
// //   }
// // };

// //   const handleReport = () => {
// //     if (!link.trim()) {
// //       Alert.alert('No link to report!');
// //     } else {
// //       Alert.alert('Link reported!', link);
// //     }
// //   };

// //   const handleFullScan = () => {
// //     Alert.alert('Performing full device scan...');
// //   };

// //   return (
// //     <ImageBackground
// //       source={require('../assets/background1.jpg')}
// //       style={styles.bg}
// //       resizeMode="cover"
// //     >
// //       <KeyboardAvoidingView
// //         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
// //         style={{ flex: 1 }}
// //       >
// //         <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
// //           <Text style={styles.heading}>Phishing Link Scanner</Text>

// //           <View style={styles.card}>
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Paste link here..."
// //               placeholderTextColor="#001a33"
// //               value={link}
// //               onChangeText={setLink}
// //             />
// //             <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
// //               <Text style={styles.scanText}>Scan</Text>
// //             </TouchableOpacity>
// //           </View>

// //           <TouchableOpacity style={styles.secondaryButton} onPress={handleReport}>
// //             <Text style={styles.secondaryText}>Report above link</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity style={styles.secondaryButton1} onPress={handleFullScan}>
// //             <Text style={styles.secondaryText1}>Full Device Scan</Text>
// //           </TouchableOpacity>

// //           <View style={styles.tipsCard}>
// //             <Text style={styles.tipTitle}>Tips & Warning Section</Text>
// //             <Text style={styles.tipText}>Don't click Unknown Shortened URLs</Text>
// //             <Text style={styles.tipText}>
// //               Scam Alert : <Text style={{ fontWeight: 'bold' }}>FAKE banking SMSes are on the rise !</Text>
// //             </Text>
// //           </View>

// //           {/* 🔵 Bottom Bar with active state icons */}
// //           <View style={styles.bottomBar}>
// //             <TouchableOpacity onPress={() => { setActiveTab('HomeScreen'); }}>
// //               <Icon1 name="home" size={26} color={activeTab === 'HomeScreen' ? '#13376eff' : 'gray'} />
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
// //               <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
// //               <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
// //               <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
// //             </TouchableOpacity>
// //           </View>
// //         </ScrollView>
// //       </KeyboardAvoidingView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   bg: {
// //     flex: 1,
// //     backgroundColor: '#001f3f',
// //   },
// //   container: {
// //     flexGrow: 1,
// //     padding: 20,
// //     alignItems: 'center',
// //     justifyContent: 'flex-start',
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginTop: 30,
// //     marginBottom: 10,
// //   },
// //   subheading: {
// //     fontSize: 16,
// //     color: '#fff',
// //     marginBottom: 20,
// //   },
// //   card: {
// //     backgroundColor: '#d6e4f5',
// //     borderRadius: 15,
// //     width: '100%',
// //     padding: 20,
// //     alignItems: 'center',
// //     marginBottom: -30,
// //     marginTop: 50
// //   },
// //   input: {
// //     backgroundColor: '#eee',
// //     width: '100%',
// //     borderRadius: 10,
// //     paddingHorizontal: 15,
// //     paddingVertical: 10,
// //     fontSize: 14,
// //     marginBottom: 15,
// //     color: 'black',
// //     borderWidth: 0.5,
// //   },
// //   scanButton: {
// //     backgroundColor: '#e0ecff',
// //     paddingHorizontal: 30,
// //     paddingVertical: 10,
// //     borderRadius: 20,
// //   },
// //   scanText: {
// //     color: '#0052cc',
// //     fontWeight: 'bold',
// //     fontSize: 14,
// //   },
// //   secondaryButton: {
// //     backgroundColor: '#b3c9e7',
// //     width: '100%',
// //     borderRadius: 15,
// //     paddingVertical: 15,
// //     alignItems: 'center',
// //     marginBottom: -45,
// //     marginTop: 70
// //   },
// //   secondaryText: {
// //     color: '#001a33',
// //     fontWeight: '600',
// //     fontSize: 15,
// //   },
// //   secondaryButton1: {
// //     backgroundColor: '#b3c9e7',
// //     width: '100%',
// //     borderRadius: 15,
// //     paddingVertical: 15,
// //     alignItems: 'center',
// //     marginBottom: -60,
// //     marginTop: 70
// //   },
// //   secondaryText1: {
// //     color: '#001a33',
// //     fontWeight: '600',
// //     fontSize: 15,
// //   },
// //   tipsCard: {
// //     backgroundColor: '#d6e4f5',
// //     width: '100%',
// //     borderRadius: 15,
// //     padding: 20,
// //     marginTop: 90,

// //   },
// //   tipTitle: {
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //     marginBottom: 10,
// //     color: '#001a33',
// //   },
// //   tipText: {
// //     color: '#222',
// //     fontSize: 14,
// //     marginBottom: 5,
// //   },
// //   tabBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     paddingVertical: 10,
// //     borderTopWidth: 1,
// //     borderColor: '#ccc',
// //     backgroundColor: '#f0f8ff',
// //   },
// //   tabItem: {
// //     alignItems: 'center',
// //   },
// //   tabText: {
// //     fontSize: 12,
// //     color: '#0052cc',
// //     marginTop: 2,
// //   },
// //   bottomBar: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     height: 55,
// //     backgroundColor: 'white',
// //     borderTopWidth: 1,
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     alignItems: 'center',
// //   },

// //   tabItem: {
// //     color: '#004d2c',
// //     fontWeight: '600',
// //     fontSize: 40,
// //   },
// // });

// // export default HomeScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   ImageBackground,
//   Platform,
//   KeyboardAvoidingView,
//   Modal,
// } from 'react-native';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';
// import { decode as atob, encode as btoa } from 'base-64';
// import database from '@react-native-firebase/database';

// const HomeScreen = ({ navigation }) => {
//   const [link, setLink] = useState('');
//   const [activeTab, setActiveTab] = useState('HomeScreen');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isPhishing, setIsPhishing] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const handleScan = async () => {
//     if (!link.trim()) {
//       setIsPhishing(true);
//       setModalMessage('Please paste a link to scan!');
//       setModalVisible(true);
//       return;
//     }

//     try {
//       const trimmedLink = link.trim();
//       const encodedUrl = btoa(trimmedLink);

//       const snapshot = await database()
//         .ref(`phishing_links/${encodedUrl}`)
//         .once('value');

//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         setIsPhishing(true);
//         setModalMessage(
//           `⚠ Phishing Link Detected!\n\nURL: ${data.url}\nStatus: ${data.status}\nTags: ${data.tags}\nReported: ${data.date_added}`
//         );
//         setModalVisible(true);
//       } else {
//         setIsPhishing(false);
//         setModalMessage('✅ Safe Link\n\nNo phishing threat found for this URL.');
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error('Error scanning link:', error);
//       setIsPhishing(true);
//       setModalMessage('Error occurred during scan. Please try again.');
//       setModalVisible(true);
//     }
//   };

//   const handleReport = () => {
//     if (!link.trim()) {
//       setIsPhishing(true);
//       setModalMessage('No link to report!');
//       setModalVisible(true);
//     } else {
//       setIsPhishing(false);
//       setModalMessage('Link reported!\n\n' + link);
//       setModalVisible(true);
//     }
//   };

//   const handleFullScan = () => {
//     setIsPhishing(false);
//     setModalMessage('Performing full device scan...');
//     setModalVisible(true);
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
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

//           <TouchableOpacity style={styles.secondaryButton1} onPress={handleFullScan}>
//             <Text style={styles.secondaryText1}>Full Device Scan</Text>
//           </TouchableOpacity>

//           <View style={styles.tipsCard}>
//             <Text style={styles.tipTitle}>Tips & Warning Section</Text>
//             <Text style={styles.tipText}>Don't click Unknown Shortened URLs</Text>
//             <Text style={styles.tipText}>
//               Scam Alert : <Text style={{ fontWeight: 'bold' }}>FAKE banking SMSes are on the rise !</Text>
//             </Text>
//           </View>

//           {/* 🔵 Bottom Bar with active state icons */}
//           <View style={styles.bottomBar}>
//             <TouchableOpacity onPress={() => { setActiveTab('HomeScreen'); }}>
//               <Icon1 name="home" size={26} color={activeTab === 'HomeScreen' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
//               <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
//               <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
//               <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* 🔴🟢 Modal */}
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { backgroundColor: isPhishing ? '#ff4d4d' : '#4CAF50' }]}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({

//    bg: {
//     flex: 1,
//     backgroundColor: '#001f3f',
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
//     marginBottom: -30,
//     marginTop: 50
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
//     borderWidth: 0.5,
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
//     marginBottom: -45,
//     marginTop: 70
//   },
//   secondaryText: {
//     color: '#001a33',
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   secondaryButton1: {
//     backgroundColor: '#b3c9e7',
//     width: '100%',
//     borderRadius: 15,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginBottom: -60,
//     marginTop: 70
//   },
//   secondaryText1: {
//     color: '#001a33',
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   tipsCard: {
//     backgroundColor: '#d6e4f5',
//     width: '100%',
//     borderRadius: 15,
//     padding: 20,
//     marginTop: 90,

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
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 55,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
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

// export default HomeScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   ImageBackground,
//   Platform,
//   KeyboardAvoidingView,
//   Modal,
// } from 'react-native';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';
// import { decode as atob, encode as btoa } from 'base-64';
// import database from '@react-native-firebase/database';
// import auth from '@react-native-firebase/auth';

// const HomeScreen = ({ navigation }) => {
//   const [link, setLink] = useState('');
//   const [activeTab, setActiveTab] = useState('HomeScreen');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isPhishing, setIsPhishing] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [tip, setTip] = useState(null);

//   useEffect(() => {
//     database()
//       .ref('/phishing_tips')
//       .once('value')
//       .then(snapshot => {
//         const tipsObj = snapshot.val();
//         if (tipsObj) {
//           const tipsArray = Object.values(tipsObj);
//           const randomTip = tipsArray[Math.floor(Math.random() * tipsArray.length)];
//           setTip(randomTip);
//         }
//       });
//   }, []);

//   const handleScan = async () => {
//     if (!link.trim()) {
//       setIsPhishing(true);
//       setModalMessage('Please paste a link to scan!');
//       setModalVisible(true);
//       return;
//     }

//     try {
//       const trimmedLink = link.trim();
//       const encodedUrl = btoa(trimmedLink);

//       const snapshot = await database()
//         .ref(`phishing_links/${encodedUrl}`)
//         .once('value');

//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         setIsPhishing(true);
//         setModalMessage(
//           `⚠ Phishing Link Detected!\n\nURL: ${data.url}\nStatus: ${data.status}\nTags: ${data.tags}\nReported: ${data.date_added}`
//         );
//         setModalVisible(true);
//       } else {
//         setIsPhishing(false);
//         setModalMessage('✅ Safe Link\n\nNo phishing threat found for this URL.');
//         setModalVisible(true);
//       }
//     } catch (error) {
//       console.error('Error scanning link:', error);
//       setIsPhishing(true);
//       setModalMessage('Error occurred during scan. Please try again.');
//       setModalVisible(true);
//     }
//   };

//   const handleReport = () => {
//     if (!link.trim()) {
//       setIsPhishing(true);
//       setModalMessage('No link to report!');
//       setModalVisible(true);
//     } else {
//       setIsPhishing(false);
//       setModalMessage('Link reported!\n\n' + link);
//       setModalVisible(true);
//     }
//   };

//   const handleFullScan = () => {
//     setIsPhishing(false);
//     setModalMessage('Performing full device scan...');
//     setModalVisible(true);
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
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

//           <TouchableOpacity style={styles.secondaryButton1} onPress={handleFullScan}>
//             <Text style={styles.secondaryText1}>Full Device Scan</Text>
//           </TouchableOpacity>

//           <View style={styles.tipsCard}>
//             <Text style={styles.tipTitle}>Tips & Warning Section</Text>
//             {tip ? (
//               <>
//                 <Text style={styles.tipText}>{tip.title}</Text>
//                 <Text style={styles.tipText}>{tip.description}</Text>
//               </>
//             ) : (
//               <Text style={styles.tipText}>Loading phishing tip...</Text>
//             )}
//           </View>

//           <View style={styles.bottomBar}>
//             <TouchableOpacity onPress={() => { setActiveTab('HomeScreen'); }}>
//               <Icon1 name="home" size={26} color={activeTab === 'HomeScreen' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
//               <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
//               <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
//               <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Centered Modal */}
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' }}>
//           <View style={[styles.modalContent, { backgroundColor: isPhishing ? '#c32a2aff' : '#219124ff' }]}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
//               <TouchableOpacity
//                 style={[styles.modalButton, { backgroundColor: 'white' }]}
//                 onPress={() => setModalVisible(false)}
//               >
//                 <Text style={styles.modalButtonText}>OK</Text>
//               </TouchableOpacity>

//               {isPhishing && (
//                 <TouchableOpacity
//                   style={[styles.modalButton, { backgroundColor: '#ffcccc' }]}
//                   onPress={() => {
//                     setLink('');
//                     setModalVisible(false);
//                   }}
//                 >
//                   <Text style={[styles.modalButtonText, { color: 'red' }]}>Delete</Text>
//                 </TouchableOpacity>
//               )}
//             </View>

//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   bg: {
//     flex: 1,
//     backgroundColor: '#001f3f',
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
//     marginBottom: -30,
//     marginTop: 50
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
//     borderWidth: 0.5,
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
//     marginBottom: -45,
//     marginTop: 70
//   },
//   secondaryText: {
//     color: '#001a33',
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   secondaryButton1: {
//     backgroundColor: '#b3c9e7',
//     width: '100%',
//     borderRadius: 15,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginBottom: -60,
//     marginTop: 70
//   },
//   secondaryText1: {
//     color: '#001a33',
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   tipsCard: {
//     backgroundColor: '#d6e4f5',
//     width: '100%',
//     borderRadius: 15,
//     padding: 20,
//     marginTop: 90,
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
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 55,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   modalContent: {
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginHorizontal: 30,
//   },
//   modalText: {
//     color: '#fff',
//     fontSize: 16,
//     marginBottom: 15,
//     textAlign: 'center'
//   },
//   modalButton: {
//     backgroundColor: '#ffffff',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   modalButtonText: {
//     color: '#333',
//     fontWeight: 'bold',
//   }
// });

// export default HomeScreen;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { DEEPSEEK_API_KEY } from '@env';

const HomeScreen = ({ navigation }) => {
  const [link, setLink] = useState('');
  const [activeTab, setActiveTab] = useState('HomeScreen');
  const [modalVisible, setModalVisible] = useState(false);
  const [isPhishing, setIsPhishing] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [tip, setTip] = useState(null);

  useEffect(() => {
    database()
      .ref('/phishing_tips')
      .once('value')
      .then(snapshot => {
        const tipsObj = snapshot.val();
        if (tipsObj) {
          const tipsArray = Object.values(tipsObj);
          const randomTip = tipsArray[Math.floor(Math.random() * tipsArray.length)];
          setTip(randomTip);
        }
      });

    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (!user) {
        await auth().signInAnonymously();
      }
    });

    return unsubscribe;
  }, []);

  const handleScan = async () => {
    if (!link.trim()) {
      setIsPhishing(true);
      setModalMessage('Please paste a link to scan!');
      setModalVisible(true);
      return;
    }

    try {
      const prompt = `Is the following URL a phishing website or a safe one? Just reply with either "phishing" or "safe" only. Do not add anything else.\n\nURL: ${link.trim()}`;

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const result = await response.json();
      const reply = result.choices?.[0]?.message?.content?.toLowerCase();

      const isPhishingDetected = reply.includes('phishing');
      setIsPhishing(isPhishingDetected);
      setModalMessage(
        isPhishingDetected
          ? `⚠ Phishing Link Detected!\n\nURL: ${link.trim()}`
          : '✅ Safe Link\n\nNo phishing threat found for this URL.'
      );
      setModalVisible(true);

      const user = auth().currentUser;
      if (user) {
        const ref = database().ref(`/scan_history/${user.uid}`).push();
        await ref.set({
          url: link.trim(),
          isPhishing: isPhishingDetected,
          scannedAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      setIsPhishing(true);
      setModalMessage('Error occurred during scan. Please try again.');
      setModalVisible(true);
    }
  };

  const handleReport = () => {
    if (!link.trim()) {
      setIsPhishing(true);
      setModalMessage('No link to report!');
    } else {
      setIsPhishing(false);
      setModalMessage('Link reported!\n\n' + link);
    }
    setModalVisible(true);
  };

  const handleFullScan = () => {
    setIsPhishing(false);
    setModalMessage('Performing full device scan...');
    setModalVisible(true);
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
            {tip ? (
              <>
                <Text style={styles.tipText}>{tip.title}</Text>
                <Text style={styles.tipText}>{tip.description}</Text>
              </>
            ) : (
              <Text style={styles.tipText}>Loading phishing tip...</Text>
            )}
          </View>

          <View style={styles.bottomBar}>
            <TouchableOpacity onPress={() => setActiveTab('HomeScreen')}>
              <Icon1 name="home" size={26} color={activeTab === 'HomeScreen' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen'); }}>
              <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen'); }}>
              <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen'); }}>
              <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' }}>
          <View style={[styles.modalContent, { backgroundColor: isPhishing ? '#c32a2aff' : '#219124ff' }]}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: 'white' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
              {isPhishing && (
                <TouchableOpacity
                  style={[styles.modalButton, { backgroundColor: '#ffcccc' }]}
                  onPress={() => {
                    setLink('');
                    setModalVisible(false);
                  }}
                >
                  <Text style={[styles.modalButtonText, { color: 'red' }]}>Delete</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // styles unchanged...
  bg: { flex: 1, backgroundColor: '#001f3f' },
  container: { flexGrow: 1, padding: 20, alignItems: 'center', justifyContent: 'flex-start' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 30, marginBottom: 10 },
  subheading: { fontSize: 16, color: '#fff', marginBottom: 20 },
  card: {
    backgroundColor: '#d6e4f5',
    borderRadius: 15,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginBottom: -30,
    marginTop: 50
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
  scanText: { color: '#0052cc', fontWeight: 'bold', fontSize: 14 },
  secondaryButton: {
    backgroundColor: '#b3c9e7',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: -45,
    marginTop: 70
  },
  secondaryText: { color: '#001a33', fontWeight: '600', fontSize: 15 },
  secondaryButton1: {
    backgroundColor: '#b3c9e7',
    width: '100%',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: -60,
    marginTop: 70
  },
  secondaryText1: { color: '#001a33', fontWeight: '600', fontSize: 15 },
  tipsCard: {
    backgroundColor: '#d6e4f5',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginTop: 90,
  },
  tipTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 10, color: '#001a33' },
  tipText: { color: '#222', fontSize: 14, marginBottom: 5 },
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
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center'
  },
  modalButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#333',
    fontWeight: 'bold',
  }
});

export default HomeScreen;
