import React from 'react';
import { Modal, View, Text, Image, StyleSheet, ActivityIndicator, Platform } from 'react-native';

const Loader = ({ visible }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.glowContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
          <ActivityIndicator size='small' color="#FFA500" style={styles.loader} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowContainer: {
    // backgroundColor: '#111',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#FFA500',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    width: 100,
    height: 100,
    ...Platform.select({
      android: {
        // backgroundColor: '#e5d1abff',
        width: 0,
        height: 0,
      }
    })
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 1,
    // tintColor: '#FFA500',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loader: {
    marginTop: 1,
  },
});

export default Loader;