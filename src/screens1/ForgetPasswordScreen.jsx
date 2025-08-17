// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
// // import auth from '@react-native-firebase/auth';

// // const ForgotPasswordScreen = ({ navigation }) => {
// //   const [email, setEmail] = useState('');
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [modalMessage, setModalMessage] = useState('');
// //   const [modalType, setModalType] = useState('success');

// //   const showModal = (message, type = 'success') => {
// //     setModalMessage(message);
// //     setModalType(type);
// //     setModalVisible(true);
// //     setTimeout(() => {
// //       setModalVisible(false);
// //     }, 2000);
// //   };

// //   const handlePasswordReset = async () => {
// //     if (!email.trim()) {
// //       showModal('Please enter your email', 'error');
// //       return;
// //     }

// //     try {
// //       await auth().sendPasswordResetEmail(email.trim());
// //       showModal('Password reset link sent ✅', 'success');
// //     } catch (error) {
// //       console.error(error);
// //       showModal('Error: ' + error.message, 'error');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Reset Password</Text>
// //       <TextInput
// //         placeholder="Enter your registered email"
// //         placeholderTextColor="#000"
// //         style={styles.input}
// //         value={email}
// //         onChangeText={setEmail}
// //       />

// //       <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
// //         <Text style={styles.buttonText}>Send Reset Link</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={() => navigation.goBack()}>
// //         <Text style={styles.backText}>⬅ Back to Login</Text>
// //       </TouchableOpacity>

// //       {/* Modal */}
// //       <Modal
// //         transparent
// //         animationType="fade"
// //         visible={modalVisible}
// //         onRequestClose={() => setModalVisible(false)}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View
// //             style={[
// //               styles.modalContainer,
// //               modalType === 'success' ? styles.modalSuccess : styles.modalError,
// //             ]}
// //           >
// //             <Text style={styles.modalText}>{modalMessage}</Text>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // export default ForgotPasswordScreen;

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#001f3f' },
// //   header: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
// //   input: { backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, height: 50, marginBottom: 15, color: '#000' },
// //   button: { backgroundColor: '#003B73', borderRadius: 20, paddingVertical: 12, alignItems: 'center', marginBottom: 15 },
// //   buttonText: { color: '#fff', fontWeight: 'bold' },
// //   backText: { color: '#ccc', textAlign: 'center' },
// //   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
// //   modalContainer: { padding: 20, borderRadius: 15, minWidth: 200, alignItems: 'center' },
// //   modalSuccess: { backgroundColor: 'white' },
// //   modalError: { backgroundColor: 'white' },
// //   modalText: { color: 'black', fontWeight: 'bold', textAlign: 'center' },
// // });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   Modal,
// } from 'react-native';
// import auth from '@react-native-firebase/auth';

// export default function ForgotPasswordScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const handlePasswordReset = async () => {
//     if (!email.trim()) {
//       setModalMessage('Please enter your registered email!');
//       setModalVisible(true);
//       return;
//     }

//     try {
//       await auth().sendPasswordResetEmail(email.trim());
//       setModalMessage('✅ Reset link sent! Check your email.');
//       setModalVisible(true);
//     } catch (error) {
//       console.error('Password Reset Error:', error);
//       setModalMessage(error.message);
//       setModalVisible(true);
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')} // 🔄 change if your bg is different
//       style={styles.container}
//     >
//       <View style={styles.innerContainer}>
//         <Text style={styles.title}>Forgot Password</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           placeholderTextColor="#aaa"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
//           <Text style={styles.buttonText}>Send Reset Link</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backText}>⬅ Back to Login</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for errors / success */}
//       <Modal
//         transparent
//         visible={modalVisible}
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   innerContainer: {
//     margin: 20,
//     padding: 20,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     borderRadius: 15,
//   },
//   title: {
//     fontSize: 26,
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 25,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#ff9900',
//     padding: 14,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   backText: {
//     textAlign: 'center',
//     color: '#ff9900',
//     fontSize: 15,
//     marginTop: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBox: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   modalButton: {
//     backgroundColor: '#ff9900',
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email.trim());
      Alert.alert(
        'Password Reset',
        '📩 A reset link has been sent to your email. Please check your inbox.'
      );
      navigation.goBack(); // back to login screen
    } catch (error) {
      console.error('Password Reset Error:', error);
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'No user found with this email');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Invalid email format');
      } else {
        Alert.alert('Error', 'Something went wrong, please try again');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅ Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backText: {
    fontSize: 14,
    color: '#0066cc',
    marginTop: 10,
  },
});
