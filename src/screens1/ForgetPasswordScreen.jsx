import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success');

  const showModal = (message, type = 'success') => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  const handlePasswordReset = async () => {
    if (!email.trim()) {
      showModal('Please enter your email', 'error');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email.trim());
      showModal('Password reset link sent ✅', 'success');
    } catch (error) {
      console.error(error);
      showModal('Error: ' + error.message, 'error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset Password</Text>
      <TextInput
        placeholder="Enter your registered email"
        placeholderTextColor="#000"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅ Back to Login</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContainer,
              modalType === 'success' ? styles.modalSuccess : styles.modalError,
            ]}
          >
            <Text style={styles.modalText}>{modalMessage}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#001f3f' },
  header: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 15, height: 50, marginBottom: 15, color: '#000' },
  button: { backgroundColor: '#003B73', borderRadius: 20, paddingVertical: 12, alignItems: 'center', marginBottom: 15 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  backText: { color: '#ccc', textAlign: 'center' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
  modalContainer: { padding: 20, borderRadius: 15, minWidth: 200, alignItems: 'center' },
  modalSuccess: { backgroundColor: 'white' },
  modalError: { backgroundColor: 'white' },
  modalText: { color: 'black', fontWeight: 'bold', textAlign: 'center' },
});
