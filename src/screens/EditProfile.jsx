// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const EditProfileScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />

//       <Text style={styles.header}>Edit Profile</Text>

//       <View style={styles.profileSection}>
//         <Icon name="user-circle" size={70} color="black" />
//         <View style={styles.userInfo}>
//           <Text style={styles.name}>Sujal Bidve</Text>
//           <Text style={styles.phone}>+91 9405941398</Text>
//         </View>
//       </View>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>First Name</Text>
//         <TextInput value="Sujal" style={styles.input} />

//         <Text style={styles.label}>Last Name</Text>
//         <TextInput value="Bidve" style={styles.input} />

//         <Text style={styles.label}>Email</Text>
//         <TextInput value="sujalbidve001@gmail.com" style={styles.input} />

//         <Text style={styles.label}>Mobile Number</Text>
//         <TextInput value="9405941398" style={styles.input} />
//       </View>

//       <TouchableOpacity style={styles.saveButton}>
//         <Text style={styles.saveButtonText}>Save</Text>
//       </TouchableOpacity>

//       {/* Bottom Tab Bar */}
//       <View style={styles.bottomBar}>
//         <TouchableOpacity>
//           <Icon name="home" size={24} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="cog" size={24} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="credit-card" size={24} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="user-circle-o" size={24} color="#000" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 80,
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: 'green',
//     marginBottom: 20,
//   },
//   profileSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   userInfo: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   phone: {
//     fontSize: 14,
//     color: '#333',
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     marginBottom: 5,
//     marginTop: 10,
//     fontWeight: '500',
//     color: '#000',
//   },
//   input: {
//     backgroundColor: '#C8FACC',
//     padding: 12,
//     borderRadius: 8,
//   },
//   saveButton: {
//     backgroundColor: 'green',
//     paddingVertical: 12,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 60,
//     backgroundColor: '#f5fff5',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//   },
// });

// export default EditProfileScreen;



import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSave = () => {
    const message = `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Mobile Number: ${mobileNumber}
    `;
    Alert.alert('Profile Info Saved', message.trim());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={70}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.header}>Edit Profile</Text>

          <View style={styles.profileSection}>
            <Icon name="user-circle" size={70} color="black" />
            <View style={styles.userInfo}>
              <Text style={styles.name}>Sujal Bidve</Text>
              <Text style={styles.phone}>+91 9405941398</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              value={firstName}
              onChangeText={setFirstName}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Bottom Tab Bar */}
       <View style={styles.bottomBar}>
               <TouchableOpacity onPress={() => alert('Home clicked!')}>
                 <Text style={styles.tabItem}>🏠</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => alert('Settings clicked!')}>
                 <Text style={styles.tabItem}>⚙️</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => alert('Theme clicked!')}>
                 <Text style={styles.tabItem}>🎨</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => alert('Profile clicked!')}>
                 <Text style={styles.tabItem}>👤</Text>
               </TouchableOpacity>
             </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // Leave space for bottom bar
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'darkgreen',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  phone: {
    fontSize: 14,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '500',
    color: '#000',
  },
  input: {
    backgroundColor: '#eaffea',
    padding: 12,
    borderRadius: 8,
    borderWidth:1,
  },
  saveButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 60,
  backgroundColor: '#eaffea',
  borderTopWidth: 1,
  borderColor: 'darkgreen',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  },
  tabItem: {
    color: '#004d2c',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default EditProfileScreen;
