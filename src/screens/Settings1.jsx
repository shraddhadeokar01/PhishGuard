import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DarkModeScreen = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleSwitch = () => setIsDarkMode(previous => !previous);

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      <Text style={[styles.heading, themeStyles.text]}>Theme</Text>

<View style={[styles.toggleContainer, themeStyles.toggleContainer]}>
        <Text style={[styles.label, themeStyles.text]}>Dark mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          trackColor={{ false: '#ccc', true: '#81b0ff' }}
        />
      </View>

      {/* Bottom Navigation Bar */}
      <View style={[styles.navbar, themeStyles.navbar]}>
        <Icon name="home-outline" size={25} color={isDarkMode ? '#fff' : '#000'} />
        <Icon name="settings-outline" size={25} color={isDarkMode ? '#fff' : '#000'} />
        <Icon name="book-outline" size={25} color={isDarkMode ? '#fff' : '#000'} />
        <Icon name="person-circle-outline" size={25} color={isDarkMode ? '#fff' : '#000'} />
      </View>
    </SafeAreaView>
 );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    borderRadius: 12,
  },
  label: {
    fontSize: 18,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
});
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
  },
  toggleContainer: {
    backgroundColor: '#d2f3cc',
  },
  navbar: {
    backgroundColor: '#e0e0e0',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#ffffff',
  },
  toggleContainer: {
    backgroundColor: '#2a2a2a',
  },
  navbar: {
    backgroundColor: '#1e1e1e',
  },
});

export default DarkModeScreen;