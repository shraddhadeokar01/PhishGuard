

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
    setTimeout(()=> {
    if (identifier) {
      navigation.replace('HomeScreen');
    } else {
      navigation.replace('LoginScreen');
    }
  },1500);
}
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

