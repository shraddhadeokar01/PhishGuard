import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScanHistoryScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/background1.jpg')} // Replace with your background image
      style={styles.background}
    >
      <View style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Icon name="arrow-back" size={24} color="#fff" />
                 </TouchableOpacity>
        <Text style={styles.title}>Scan History</Text>

        <ScrollView contentContainerStyle={styles.listContainer}>
          {Array.from({ length: 8 }, (_, index) => (
            <View key={index} style={styles.linkBox}>
              <Text style={styles.linkText}>Link {index + 1}:</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft:28,
    marginTop:-27
  },
  listContainer: {
    paddingBottom: 20,
   
  },
  linkBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  linkText: {
    color: '#000',
    fontSize: 16,
  },
});

export default ScanHistoryScreen;
