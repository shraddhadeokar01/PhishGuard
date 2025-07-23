// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import IconUser from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <ImageBackground
//       source={require('../assets/background.jpg')} // Replace with your background image
//       style={styles.background}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Image
//           source={require('../assets/logo.png')} // Replace with your app logo
//           style={styles.logo}
//         />
//         <Text style={styles.appName}>PhishGuard</Text>

//         <Text style={styles.header}>Welcome Back !</Text>

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Email OR Mobile Number"
//             placeholderTextColor="#000"
//             style={styles.inputInner}
//           />
//           <IconUser name="user" size={20} color="#000" />
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Password"
//             secureTextEntry={!showPassword}
//             placeholderTextColor="#000"
//             style={styles.inputInner}
//           />
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Icon name={showPassword ? 'eye' : 'eye-with-line'} size={20} color="#000" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.forgotPassword}>
//           <Text style={styles.forgotText}>Forgotten Password ?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Text style={styles.signUpText}>
//             Don’t have an Account? <Text style={{ color: '#fff' }}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//     marginBottom: 130,
//     marginTop:-90
//   },
//   appName: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30,
//     marginBottom: 70,
//     marginTop:-160
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 25,
//     alignSelf: 'flex-start',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     height: 50,
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   inputInner: {
//     flex: 1,
//     color: '#000',
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 20,
//     marginTop:-10
//   },
//   forgotText: {
//     color: '#ccc',
//     fontSize: 13,
//   },
//   button: {
//     backgroundColor: '#003B73',
//     borderRadius: 20,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginBottom: 15,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   signUpText: {
//     color: '#ccc',
//     textAlign: 'center',
//     marginTop: 10,
//   },
// });



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import IconUser from 'react-native-vector-icons/FontAwesome';
// const LoginScreen = ({ navigation }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username === '' || password === '') {
//       Alert.alert('Error', 'Please enter both email and password');
//     } else {
//       navigation.navigate('HomeScreen'); 
//     }
//   };

//   const handleLogin1 = () => {
//     navigation.navigate('SignUpScreen'); 
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background.jpg')}
//       style={styles.background}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Image
//           source={require('../assets/logo.png')}
//           style={styles.logo}
//         />
//         <Text style={styles.appName}>PhishGuard</Text>
//         <Text style={styles.header}>Welcome Back !</Text>

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Email OR Mobile Number"
//             placeholderTextColor="#000"
//             style={styles.inputInner}
//             value={username}
//             onChangeText={setUsername}
//           />
//           <IconUser name="user" size={20} color="#000" />
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Password"
//             secureTextEntry={!showPassword}
//             placeholderTextColor="#000"
//             style={styles.inputInner}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Icon name={showPassword ? 'eye' : 'eye-with-line'} size={20} color="#000" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.forgotPassword}>
//           <Text style={styles.forgotText}>Forgotten Password ?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleLogin1}>
//           <Text style={styles.signUpText}>
//             Don’t have an Account? <Text style={{ color: '#fff' , fontWeight:'bold'}}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//     marginBottom: 130,
//     marginTop: -90
//   },
//   appName: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30,
//     marginBottom: 70,
//     marginTop: -160
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 25,
//     alignSelf: 'flex-start',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     height: 50,
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   inputInner: {
//     flex: 1,
//     color: '#000',
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 20,
//     marginTop: -10
//   },
//   forgotText: {
//     color: '#ccc',
//     fontSize: 13,
//   },
//   button: {
//     backgroundColor: '#003B73',
//     borderRadius: 20,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginBottom: 15,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   signUpText: {
//     color: '#ccc',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   background: {
//     flex: 1,
//     backgroundColor: '#001f3f',
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import IconUser from 'react-native-vector-icons/FontAwesome';
// import { loginUser } from './AuthService'; 

// const LoginScreen = ({ navigation }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');


//   const handleLogin = async () => {
//     if (username === '' || password === '') {
//       Alert.alert('Error', 'Please enter both email and password');
//     } else {
//       try {
//         const user = await loginUser(username.trim(), password);
//         navigation.navigate('HomeScreen');
//       } catch (err) {
//         Alert.alert('Login Failed', err.message);
//       }
//     }
//   };

//   const handleLogin1 = () => {
//     navigation.navigate('SignUpScreen');
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
//       style={styles.background}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Image
//           source={require('../assets/logo.png')}
//           style={styles.logo}
//         />
//         <Text style={styles.appName}>PhishGuard</Text>
//         <Text style={styles.header}>Welcome Back !</Text>

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Email OR Mobile Number"
//             placeholderTextColor="#000"
//             style={styles.inputInner}
//             value={username}
//             onChangeText={setUsername}
//           />
//           <IconUser name="user" size={20} color="#000" />
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Password"
//             secureTextEntry={!showPassword}
//             placeholderTextColor="#000"
//             style={styles.inputInner}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Icon name={showPassword ? 'eye' : 'eye-with-line'} size={20} color="#000" />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.forgotPassword}>
//           <Text style={styles.forgotText}>Forgotten Password ?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={handleLogin1}>
//           <Text style={styles.signUpText}>
//             Don’t have an Account? <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     backgroundColor: '#001f3f',
//   },
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//     marginBottom: 130,
//     marginTop: -90,
//   },
//   appName: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30,
//     marginBottom: 70,
//     marginTop: -160,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 25,
//     alignSelf: 'flex-start',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     height: 50,
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   inputInner: {
//     flex: 1,
//     color: '#000',
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 20,
//     marginTop: -10,
//   },
//   forgotText: {
//     color: '#ccc',
//     fontSize: 13,
//   },
//   button: {
//     backgroundColor: '#003B73',
//     borderRadius: 20,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginBottom: 15,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   signUpText: {
//     color: '#ccc',
//     textAlign: 'center',
//     marginTop: 10,
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconUser from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com';

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async () => {
  //   if (!username.trim() || !password.trim()) {
  //     Alert.alert('Error', 'Please enter both email and password');
  //     return;
  //   }

  //   try {
  //     const response = await axios.get(`${URL}/users.json`);
  //     const data = response.data;

  //     if (data) {
  //       const matchedUser = Object.values(data).find(
  //         (user) =>
  //           (user.email === username || user.contact === username) &&
  //           user.password === password
  //       );

  //       if (matchedUser) {
  //         Alert.alert('Success ✅', 'Login successful');
  //         navigation.navigate('HomeScreen');
  //       } else {
  //         Alert.alert('Login Failed ❌', 'Invalid credentials');
  //       }
  //     } else {
  //       Alert.alert('No Users ❌', 'No user records found');
  //     }
  //   } catch (error) {
  //     console.error('Login Error:', error);
  //     Alert.alert('Error', 'Something went wrong while logging in');
  //   }
  // };
  const handleLogin = async () => {
  if (!username || !password) {
    Alert.alert('Warning ⚠️', 'Please fill in all fields');
    return;
  }

  try {
    const response = await axios.get(`${URL}/users.json`);
    const users = response.data;

    if (!users) {
      Alert.alert('Login Failed ❌', 'No registered users found');
      return;
    }

    const matchedUser = Object.values(users).find((user) => {
      const userInput = username.trim().toLowerCase();
      const userPassword = String(password).trim();

      const userEmail = String(user.email || '').trim().toLowerCase();
      const userContact = String(user.contact || '').trim();
      const storedPassword = String(user.password || '').trim();

      const matchUsername =
        userEmail === userInput || userContact === userInput;

      return matchUsername && storedPassword === userPassword;
    });

    if (matchedUser) {
      Alert.alert('Success ✅', 'Login successful');
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Login Failed ❌', 'Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error ❌', 'Something went wrong');
  }
};

  const handleLogin1 = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>PhishGuard</Text>
        <Text style={styles.header}>Welcome Back !</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email OR Mobile Number"
            placeholderTextColor="#000"
            style={styles.inputInner}
            value={username}
            onChangeText={setUsername}
          />
          <IconUser name="user" size={20} color="#000" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            placeholderTextColor="#000"
            style={styles.inputInner}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye' : 'eye-with-line'} size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgotten Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin1}>
          <Text style={styles.signUpText}>
            Don’t have an Account? <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#001f3f',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 130,
    marginTop: -90
  },
  appName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 70,
    marginTop: -160
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
  },
  inputInner: {
    flex: 1,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: -10
  },
  forgotText: {
    color: '#ccc',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#003B73',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
});
