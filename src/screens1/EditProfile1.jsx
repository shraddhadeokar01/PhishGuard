// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   SafeAreaView,
//   Modal,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const EditProfileScreen = ({ navigation }) => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobile: '',
//   });
//   const [firebaseKey, setFirebaseKey] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const handleChange = (field, value) => {
//     setUser({ ...user, [field]: value });
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const identifier = await AsyncStorage.getItem('userIdentifier');
//         if (!identifier) return;

//         const res = await axios.get(
//           'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json'
//         );
//         const users = res.data;

//         for (const key in users) {
//           const u = users[key];
//           if (
//             u.email?.toLowerCase() === identifier.toLowerCase() ||
//             u.contact === identifier
//           ) {
//             const fullName = u.name?.split(' ') || ['', ''];
//             setUser({
//               firstName: fullName[0],
//               lastName: fullName[1] || '',
//               email: u.email || '',
//               mobile: u.contact || '',
//             });
//             setFirebaseKey(key);
//             break;
//           }
//         }
//       } catch (err) {
//         console.log('Fetch error:', err);
//         setModalMessage('Failed to load user data ❌');
//         setModalVisible(true);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleSave = async () => {
//     if (!firebaseKey) {
//       setModalMessage('User not identified ❌');
//       setModalVisible(true);
//       return;
//     }

//     const updatedUser = {
//       name: `${user.firstName} ${user.lastName}`,
//       email: user.email,
//       contact: user.mobile,
//     };

//     try {
//       await axios.patch(
//         `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${firebaseKey}.json`,
//         updatedUser
//       );
//       await AsyncStorage.setItem('currentUser', JSON.stringify(updatedUser));
//       setModalMessage('Profile updated ✅');
//       setModalVisible(true);
//     } catch (err) {
//       console.error('Update failed:', err);
//       setModalMessage('Failed to update profile ❌');
//       setModalVisible(true);
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.container}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon1 name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.title}>Edit Profile</Text>
//         </View>

//         {/* Avatar */}
//         <View style={styles.avatarContainer}>
//           <Icon name="user-circle" size={80} color="#fff" />
//           <Text style={styles.name}>
//             {user.firstName} {user.lastName}
//           </Text>
//         </View>

//         {/* Form */}
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

//         {/* Modal */}
//         <Modal
//           transparent
//           animationType="fade"
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalBox}>
//               <Text style={styles.modalText}>{modalMessage}</Text>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setModalVisible(false);
//                   if (modalMessage.includes('✅')) {
//                     navigation.goBack();
//                   }
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: { flex: 1 },
//   container: { flex: 1, padding: 20 },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     alignSelf: 'flex-start',
//     marginTop: 2,
//     marginLeft: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
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
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBox: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#001a33',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButton: {
//     backgroundColor: '#e0ecff',
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   modalButtonText: {
//     color: '#001a33',
//     fontWeight: 'bold',
//     fontSize: 16,
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
  Modal,
  Image,
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
    photoURL: '',
  });
  const [firebaseKey, setFirebaseKey] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isImageModalVisible, setImageModalVisible] = useState(false);

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const identifier = await AsyncStorage.getItem('userIdentifier');
        if (!identifier) return;

        const res = await axios.get(
          'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json'
        );
        const users = res.data;

        for (const key in users) {
          const u = users[key];
          if (
            u.email?.toLowerCase() === identifier.toLowerCase() ||
            u.contact === identifier
          ) {
            const fullName = u.name?.split(' ') || ['', ''];
            setUser({
              firstName: fullName[0],
              lastName: fullName[1] || '',
              email: u.email || '',
              mobile: u.contact || '',
              photoURL: u.photoURL || '',
            });
            setFirebaseKey(key);
            break;
          }
        }
      } catch (err) {
        console.log('Fetch error:', err);
        setModalMessage('Failed to load user data ❌');
        setModalVisible(true);
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    if (!firebaseKey) {
      setModalMessage('User not identified ❌');
      setModalVisible(true);
      return;
    }

    const updatedUser = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      contact: user.mobile,
      photoURL: user.photoURL, // ✅ Keep same photo (non-editable here)
    };

    try {
      await axios.patch(
        `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${firebaseKey}.json`,
        updatedUser
      );
      await AsyncStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setModalMessage('Profile updated ✅');
      setModalVisible(true);
    } catch (err) {
      console.error('Update failed:', err);
      setModalMessage('Failed to update profile ❌');
      setModalVisible(true);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon1 name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>

        {/* Avatar (Non-editable but tappable to full screen) */}
        <View style={styles.avatarContainer}>
          {user.photoURL ? (
            <TouchableOpacity onPress={() => setImageModalVisible(true)}>
              <Image source={{ uri: user.photoURL }} style={styles.avatar} resizeMode="cover" />
            </TouchableOpacity>
          ) : (
            <Icon name="user-circle" size={100} color="#fff" />
          )}
          <Text style={styles.name}>
            {user.firstName} {user.lastName}
          </Text>
        </View>

        {/* Form */}
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

        {/* Modal for status */}
        <Modal
          transparent
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>{modalMessage}</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  if (modalMessage.includes('✅')) {
                    navigation.goBack();
                  }
                }}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* ✅ Full Screen Image Viewer */}
        <Modal
          visible={isImageModalVisible}
          transparent={true}
          onRequestClose={() => setImageModalVisible(false)}
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
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#fff',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#001a33',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#e0ecff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#001a33',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fullImageContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

export default EditProfileScreen;
