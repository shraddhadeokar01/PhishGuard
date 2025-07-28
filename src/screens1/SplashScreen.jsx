// // // import React, { useEffect, useRef } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   Image,
// // //   Animated,
// // //   StyleSheet,
// // //   ImageBackground,
// // // } from 'react-native';

// // // export default function SplashScreen({ navigation }) {
// // //   const scaleAnim = useRef(new Animated.Value(0.5)).current;
// // //   const opacityAnim = useRef(new Animated.Value(0)).current;

// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.spring(scaleAnim, {
// // //         toValue: 1,
// // //         friction: 5,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(opacityAnim, {
// // //         toValue: 1,
// // //         duration: 1000,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();

// // //     const timer = setTimeout(() => {
// // //       navigation.replace('HomeScreen');
// // //     }, 2000);

// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   return (
// // //     <ImageBackground
// // //       source={require('../assets/background.jpg')} // Replace with your image path
// // //       style={styles.background}
// // //     >
// // //       <View style={styles.centered}>
// // //         <Animated.Image
// // //           source={require('../assets/logo.png')} // Replace with your logo
// // //           style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
// // //         />
// // //         <Animated.Text style={[styles.title, { opacity: opacityAnim }]}>
// // //           PhishGuard
// // //         </Animated.Text>
// // //       </View>
// // //     </ImageBackground>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   background: {
// // //     flex: 1,
// // //     resizeMode: 'cover',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   centered: {
// // //     alignItems: 'center',
// // //   },
// // //   logo: {
// // //     width: 130,
// // //     height: 130,
// // //     resizeMode: 'contain',
// // //   },
// // //   title: {
// // //     marginTop: 15,
// // //     fontSize: 26,
// // //     color: '#ffffff',
// // //     fontWeight: 'bold',
// // //     letterSpacing: 1,
// // //   },
// // // });

// // // import React, { useEffect, useRef } from 'react';
// // // import { View, Text, StyleSheet, Animated, ImageBackground, StatusBar } from 'react-native';

// // // const SplashScreen = ({ navigation }) => {
// // //   const scaleAnim = useRef(new Animated.Value(0)).current;

// // //   useEffect(() => {
// // //     // Animate the scale (like District)
// // //     Animated.timing(scaleAnim, {
// // //       toValue: 1,
// // //       duration: 1500,
// // //       useNativeDriver: true,
// // //     }).start();

// // //     // Navigate after a short delay
// // //     const timeout = setTimeout(() => {
// // //       navigation.replace('LoginScreen'); // Change if needed
// // //     }, 2500);

// // //     return () => clearTimeout(timeout);
// // //   }, []);

// // //   return (
// // //     <ImageBackground
// // //       source={require('../assets/background1.jpg')} // Use your own image path
// // //       style={styles.container}
// // //       resizeMode="cover"
// // //     >
// // //       <StatusBar hidden />
// // //       <Animated.Text style={[styles.logoText, { transform: [{ scale: scaleAnim }] }]}>
// // //         PhishGuard
// // //       </Animated.Text>
// // //     </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   logoText: {
// // //     color: 'white',
// // //     fontSize: 42,
// // //     fontWeight: 'bold',
// // //     letterSpacing: 2,
// // //   },
// // // });

// // // export default SplashScreen;

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
 useEffect(() => {
  const checkLogin = async () => {
    const identifier = await AsyncStorage.getItem('userIdentifier');
    if (identifier) {
      navigation.replace('HomeScreen');
    } else {
      navigation.replace('LoginScreen');
    }
  };
  checkLogin();
}, []);


  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.row}>
          <View style={styles.line} />
          <Text style={styles.title}>PhishGuard</Text>
          <View style={styles.line} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1.5,
    width: 70,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Morvien-Regular',
    fontSize: 32,
    color: '#ffffff',
    marginHorizontal: 12,
    letterSpacing: 2,
  },
});

export default SplashScreen;

// // SplashEnhanced.js

// // import React, { useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Image,
// //   Animated,
// //   Easing,
// //   Dimensions,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const { width } = Dimensions.get('window');

// // const SplashScreen = ({ navigation }) => {
// //   const scaleLogo = useRef(new Animated.Value(0)).current;
// //   const scaleText = useRef(new Animated.Value(0)).current;
// //   const rotateRadar = useRef(new Animated.Value(0)).current;

// //   useEffect(() => {
// //     // Zoom effects
// //     Animated.parallel([
// //       Animated.spring(scaleLogo, {
// //         toValue: 1,
// //         friction: 3,
// //         useNativeDriver: true,
// //       }),
// //       Animated.spring(scaleText, {
// //         toValue: 1,
// //         friction: 4,
// //         useNativeDriver: true,
// //         delay: 300,
// //       }),
// //       Animated.loop(
// //         Animated.timing(rotateRadar, {
// //           toValue: 1,
// //           duration: 2000,
// //           easing: Easing.linear,
// //           useNativeDriver: true,
// //         }),
// //       ).start(),
// //     ]).start();

// //     // Navigate after delay
// //     const timeout = setTimeout(async () => {
// //       const userData = await AsyncStorage.getItem('currentUser');
// //       navigation.replace(userData ? 'HomeScreen' : 'Login');
// //     }, 3500);

// //     return () => clearTimeout(timeout);
// //   }, []);

// //   const rotateSpin = rotateRadar.interpolate({
// //     inputRange: [0, 1],
// //     outputRange: ['0deg', '360deg'],
// //   });

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.shieldWrapper}>
// //         <Animated.Image
// //           source={require('../assets/logo.png')}
// //           style={[
// //             styles.logo,
// //             {
// //               transform: [{ scale: scaleLogo }],
// //             },
// //           ]}
// //           resizeMode="contain"
// //         />
// //         {/* Radar sweep inside shield */}
// //         <Animated.View
// //           style={[
// //             styles.radarSweep,
// //             {
// //               transform: [{ rotate: rotateSpin }],
// //             },
// //           ]}
// //         />
// //       </View>

// //       <Animated.Text
// //         style={[
// //           styles.appName,
// //           {
// //             transform: [{ scale: scaleText }],
// //           },
// //         ]}
// //       >
// //         PhishGuard
// //       </Animated.Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#020d18',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   shieldWrapper: {
// //     width: 160,
// //     height: 160,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   logo: {
// //     width: 120,
// //     height: 120,
// //     zIndex: 2,
// //   },
// //   radarSweep: {
// //     position: 'absolute',
// //     width: 150,
// //     height: 150,
// //     borderRadius: 75,
// //     borderWidth: 1,
// //     borderColor: '#0ff',
// //     borderRightColor: 'transparent',
// //     borderTopColor: 'transparent',
// //     zIndex: 1,
// //     opacity: 0.3,
// //   },
// //   appName: {
// //     fontSize: 34,
// //     fontWeight: 'bold',
// //     color: '#ffffff',
// //     marginTop: 30,
// //     fontFamily: 'Morvien-Regular',
// //     letterSpacing: 3,
// //     textShadowColor: '#0ff',
// //     textShadowOffset: { width: 0, height: 1 },
// //     textShadowRadius: 6,
// //   },
// // });

// // export default SplashScreen;

// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Animated,
//   Easing,
//   Dimensions,
//   ImageBackground, // <-- Added
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width } = Dimensions.get('window');

// const SplashScreen = ({ navigation }) => {
//   const scaleLogo = useRef(new Animated.Value(0)).current;
//   const scaleText = useRef(new Animated.Value(0)).current;
//   const rotateRadar = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Zoom effects
//     Animated.parallel([
//       Animated.spring(scaleLogo, {
//         toValue: 1,
//         friction: 3,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleText, {
//         toValue: 1,
//         friction: 4,
//         useNativeDriver: true,
//         delay: 300,
//       }),
//       Animated.loop(
//         Animated.timing(rotateRadar, {
//           toValue: 1,
//           duration: 2000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         }),
//       ).start(),
//     ]).start();

//     // Navigate after delay
//     const timeout = setTimeout(async () => {
//       const userData = await AsyncStorage.getItem('currentUser');
//       navigation.replace(userData ? 'HomeScreen' : 'Login');
//     }, 3500);

//     return () => clearTimeout(timeout);
//   }, []);

//   const rotateSpin = rotateRadar.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')} // <-- Your background image here
//       style={styles.container}
//       resizeMode="cover"
//     >
//       <View style={styles.shieldWrapper}>
//         <Animated.Image
//           source={require('../assets/logo.png')}
//           style={[
//             styles.logo,
//             {
//               transform: [{ scale: scaleLogo }],
//             },
//           ]}
//           resizeMode="contain"
//         />
//         {/* Radar sweep inside shield */}
//         <Animated.View
//           style={[
//             styles.radarSweep,
//             {
//               transform: [{ rotate: rotateSpin }],
//             },
//           ]}
//         />
//       </View>

//       <Animated.Text
//         style={[
//           styles.appName,
//           {
//             transform: [{ scale: scaleText }],
//           },
//         ]}
//       >
//         PhishGuard
//       </Animated.Text>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#020d18',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   shieldWrapper: {
//     width: 160,
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     zIndex: 2,
//   },
//   radarSweep: {
//     position: 'absolute',
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 1,
//     borderColor: '#0ff',
//     borderRightColor: 'transparent',
//     borderTopColor: 'transparent',
//     zIndex: 1,
//     opacity: 0.3,
//   },
//   appName: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginTop: 30,
//     fontFamily: 'Morvien-Regular',
//     letterSpacing: 3,
//     textShadowColor: '#0ff',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 6,
//   },
// });

// export default SplashScreen;
