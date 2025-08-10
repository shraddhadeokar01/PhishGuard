import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HelpSupportScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background1.jpg')} 
      style={styles.background}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" marginBottom="-1" />
        </TouchableOpacity>
        <Text style={styles.header}>Help & Support</Text>
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="gray" />

      <Text style={styles.label}>Phone number</Text>
      <TextInput style={styles.input} placeholder="Enter your phone number" placeholderTextColor="gray" />

      <Text style={styles.label}>Problem Discription</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Describe your problem"
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="gray"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Or you can chat now</Text>
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
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 10,
    marginTop: 1.5
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 25,
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
  textArea: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 10,
    padding: 10,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});

export default HelpSupportScreen;