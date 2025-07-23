import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';


const EditProfileScreen = () => {
  const [user, setUser] = useState({
    firstName: 'Sujal',
    lastName: 'Bidve',
    email: 'sujalbidve001@gmail.com',
    mobile: '9405941398',
  });

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const handleSave = () => {
    alert('Profile Saved!');
    // Save logic here (Firebase, API, etc.)
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Icon1 name="arrow-back" size={24} color="#fff" />
                </Pressable>
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
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 2,
    marginLeft:10
  },
  headerContainer: {
  flexDirection: 'row',
  alignItems: 'center', // vertically center arrow and text
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

export default EditProfileScreen;
