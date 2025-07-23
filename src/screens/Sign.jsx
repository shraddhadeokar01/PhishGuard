import { useState } from 'react';
import Icon from 'react-native-vector-icons/Foundation'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Entypo'
import Icon4 from 'react-native-vector-icons/FontAwesome'
import Homee from './Homee';
import Log from './Log';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,Text,TextInput,TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Sign = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName,setfullName] = useState('');
  const [confirm,setConfirm] = useState('');
  const [email,setEmail] = useState('');

  const handleLogin1 = () => {
    navigation.navigate('Log');
  }

  const handleLogin = () => {
    if (username === '' || password === '' || fullName==='' || confirm==='' || email==='' ) {
      Alert.alert('Error', 'Please enter the info');
    } else {
      navigation.navigate('Homee');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <Icon name='shield' size={80} marginBottom='-10' color="darkgreen"/>
      <Text style={styles.title}>PhishGuard</Text>

       <TextInput
        style={styles.input1}
        placeholder="Enter Your Full Name"
        placeholderTextColor="black"
        value={fullName}
        onChangeText={setfullName}
      />
      <Icon4 name="id-card-o" size={25} color='black' style={styles.idIcon}/>

      <TextInput
        style={styles.input2}
        placeholder="Enter the Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
      />
      <Icon2 name="user" size={25} color='black' style={styles.userIcon}/>
      <TextInput
        style={styles.input}
        placeholder="Email OR Mobile Number"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
        
      />
      <Icon3 name="email" size={20} style={styles.emailIcon}/>
     

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        //   secureTextEntry for the dots instead of showing the password
        value={password}
        onChangeText={setPassword}
      />
      <Icon1 name="eye-with-line" size={25} color='black' style={styles.eyeIcon}/>

      <TextInput
        style={styles.inputconf}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        //   secureTextEntry for the dots instead of showing the password
        value={confirm}
        onChangeText={setConfirm}
      />
      <Icon4 name="lock" size={25} color='black' style={styles.eyeIcon}/>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.face} onPress={handleLogin1}>
       <Text style={{fontSize:13,color:'darkgreen',padding:10}}>Already Have An Account?Log in
       </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:20,
    color: 'darkgreen',
    paddingTop:15
  },
  input: {
    width: '100%',
    backgroundColor: '#C7EAC7',
    padding: 15,
    borderRadius: 15,
    marginBottom: 1,
    borderColor: 'black',
    borderWidth: 2,
    color:'black',
    marginTop:1
  },
  button: {
    width: '100%',
    backgroundColor: 'darkgreen',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:-2
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  eyeIcon: {
    left:150,
    bottom:40,
    paddingRight:50
  },
  userIcon: {
    size:20,
    left:130, 
    bottom:38
  },
  emailIcon: {
    left:40,
    bottom:38,
    paddingLeft:174
  },
  idIcon:{
    size:20,
    left:130, 
    bottom:-1
  },
  input1: {
    width: '100%',
    backgroundColor: '#C7EAC7',
    padding: 15,
    borderRadius: 15,
    marginBottom:-40,
    borderColor: 'black',
    borderWidth: 2,
    color:'black'
  },
  input2: {
    width: '100%',
    backgroundColor: '#C7EAC7',
    padding: 15,
    borderRadius: 15,
    marginTop:40,
    borderColor: 'black',
    borderWidth: 2,
    color:'black',
    marginBottom:-3
  },
  inputconf: {
    width: '100%',
    backgroundColor: '#C7EAC7',
    padding: 14,
    borderRadius: 15,
    marginBottom: 1,
    borderColor: 'black',
    borderWidth: 2,
    color:'black',
    marginTop:-4
  }
  
});
