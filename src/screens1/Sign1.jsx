import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';
import IconUser from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com';

const SignUpScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(true);

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const checkLoggedInUser = async () => {
      const user = await AsyncStorage.getItem('currentUser');
      if (user) {
        navigation.replace('HomeScreen');
      }
    };
    checkLoggedInUser();
  }, []);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const toggleAgree = () => setForm({ ...form, agree: !form.agree });

  const handleLogin1 = () => {
    navigation.navigate('LoginScreen');
  };

  const showErrorModal = (message) => {
    setModalMessage(message);
    setErrorModalVisible(true);
  };

  const showSuccessModal = (message) => {
    setModalMessage(message);
    setSuccessModalVisible(true);
  };

  const handleSignUp = async () => {
    const { fullName, emailOrMobile, password, confirmPassword, agree } = form;

    if (!fullName || !emailOrMobile || !password || !confirmPassword) {
      return showErrorModal('All fields are required!');
    }
    if (password.trim() !== confirmPassword.trim()) {
      return showErrorModal('Passwords do not match!');
    }
    if (!agree) {
      return showErrorModal('Please agree to the terms & policy!');
    }

    try {
      const response = await axios.get(`${URL}/users.json`);
      const data = response.data;

      const isDuplicate = Object.values(data || {}).some(
        (user) => user.email === emailOrMobile || user.contact === emailOrMobile
      );

      if (isDuplicate) {
        return showErrorModal('User already exists with this email or mobile!');
      }

      const newUser = {
        name: fullName,
        email: emailOrMobile.includes('@') ? emailOrMobile : '',
        contact: emailOrMobile.includes('@') ? '' : emailOrMobile,
        password,
      };

      await axios.post(`${URL}/users.json`, newUser);

      await AsyncStorage.setItem('currentUser', JSON.stringify(newUser));
      await AsyncStorage.setItem('userIdentifier', emailOrMobile);
      showSuccessModal('Success ✅                                   Account created successfully!');
      setTimeout(() => {
        setSuccessModalVisible(false);
        navigation.replace('HomeScreen');
      }, 1500);
    } catch (error) {
      console.error('Sign Up Error:', error);
      showErrorModal('Error❌                                        Something went wrong during sign up');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>PhishGuard</Text>
          <Text style={styles.subtitle}>Get Started !</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full Name"
              value={form.fullName}
              onChangeText={(val) => handleChange('fullName', val)}
              placeholderTextColor="#000"
              style={styles.inputInner}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email OR Mobile Number"
              value={form.emailOrMobile}
              onChangeText={(val) => handleChange('emailOrMobile', val)}
              placeholderTextColor="#000"
              style={styles.inputInner}
            />
            <IconUser name="user" size={20} color="#000" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              value={form.password}
              onChangeText={(val) => handleChange('password', val)}
              secureTextEntry={showPassword}
              placeholderTextColor="#000"
              style={styles.inputInner}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye-with-line' : 'eye'} size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChangeText={(val) => handleChange('confirmPassword', val)}
              secureTextEntry={true}
              style={styles.inputInner}
              placeholderTextColor="#000"
            />
          </View>

          <TouchableOpacity style={styles.checkboxContainer} onPress={toggleAgree}>
            <View style={styles.checkbox}>
              {form.agree && <View style={styles.checkboxTick} />}
            </View>
            <Text style={styles.checkboxLabel}>I agree to the terms & policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginTextRow}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLogin1}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Error Modal */}
      <Modal transparent visible={errorModalVisible} animationType="fade">
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalBox}>
            <Text style={modalStyles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity
              style={modalStyles.modalButton}
              onPress={() => setErrorModalVisible(false)}
            >
              <Text style={modalStyles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal transparent visible={successModalVisible} animationType="fade">
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalBox}>
            <Text style={modalStyles.modalMessage}>{modalMessage}</Text>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: '#011c3b',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#b0c6fa',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#011c3b',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: 40,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    marginTop: -20,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  checkboxTick: {
    width: 10,
    height: 9,
    backgroundColor: '#007bff',
  },
  checkboxLabel: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 10,
    marginTop: -6,
  },
  button: {
    backgroundColor: '#b0c6fa',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#011c3b',
    fontSize: 15,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#fff',
    fontSize: 13,
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#b0c6fa',
  },
  loginTextRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;