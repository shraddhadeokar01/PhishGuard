import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const NotificationScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/background1.jpg')} 
        style={styles.background}
        resizeMode="cover"
      >
         <View style={styles.headerContainer}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                           <Icon name="arrow-back" size={24} color="#fff" />
                         </TouchableOpacity>
                 <Text style={styles.header}>Notifications</Text>
                 </View>
        

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Allow Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#073866ff' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 60,
    marginTop:-29,
    marginLeft:30
  },
  switchContainer: {
    backgroundColor: '#ffffff', // 👈 Solid white
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#000', // 👈 Changed to black for better contrast
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default NotificationScreen;
