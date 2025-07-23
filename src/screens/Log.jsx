import React from 'react';
import {Text ,View,Button,TextInput,TouchableOpacity,Alert,StyleSheet,Style} from 'react-native';
import { useState } from 'react';


import Icon from 'react-native-vector-icons/Foundation'
import Icon1 from 'react-native-vector-icons/Entypo'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Sign from "./Sign"
const Log = ({navigation}) => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    navigation.navigate('Sign');
  };
  const handleLogin1 = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
    } else {
      // Navigate to Homee screen
      navigation.navigate('Homee');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2"/>
      <Icon name='shield' size={70} color="green"/>
      <Text style={styles.title}>PhishGuard</Text>

      <TextInput
        style={styles.input}
        placeholder="Email OR Mobile Number"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        //   secureTextEntry for the dots instead of showing the password
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Icon1 name="eye-with-line" size={25} color='black' style={styles.eyeIcon}/>

      <TouchableOpacity style={styles.button} onPress={handleLogin1} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.face} onPress={handleLogin}>
       <Text style={{fontSize:15,color:'green',padding:10}}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Log;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 5
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    paddingTop:15
  },
  input: {
    width: '100%',
    backgroundColor: '#C7EAC7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 2,
    color:'black',
    borderColor:'black'
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',

  },
  eyeIcon: {
    left:150,
    bottom:53,
    paddingRight:50
  }
});




  