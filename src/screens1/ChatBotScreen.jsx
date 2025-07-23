// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   activeTab
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';

// const ChatBotScreen = ({ navigation }) => {
//   const [message, setMessage] = useState('');
//   const [chat, setChat] = useState([]);

//   const handleSend = () => {
//     if (message.trim() === '') return;

//     const newChat = [...chat, { type: 'user', text: message }];
//     setChat(newChat);
//     setMessage('');

//     // Simulated Bot Response
//     setTimeout(() => {
//       const botReply = {
//         type: 'bot',
//         text: 'Analyzing... Looks safe, but avoid clicking if unsure. Need further scan?',
//       };
//       setChat([...newChat, botReply]);
//     }, 800);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={require('../assets/background1.jpg')} // your tech theme background
//         style={styles.background}
//         resizeMode="cover"
//       >
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>PhishGuard Assistant</Text>
//         </View>

//         <ScrollView style={styles.chatBox}>
//           {chat.map((msg, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.chatBubble,
//                 msg.type === 'user' ? styles.userBubble : styles.botBubble,
//               ]}
//             >
//               <Text style={styles.chatText}>{msg.text}</Text>
//             </View>
//           ))}
//         </ScrollView>

//         <View style={styles.inputArea}>
//           <TextInput
//             style={styles.input}
//             value={message}
//             onChangeText={setMessage}
//             placeholder="Ask about links, texts..."
//             placeholderTextColor="#ccc"
//           />
//           <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
//             <Icon name="send" size={20} color="#fff" />
//           </TouchableOpacity>
//         </View>
//          <View style={styles.bottomBar}>
//                     <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen')}}>
//                       <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Settings');navigation.navigate('SettingsScreen')}}>
//                       <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Chat'); }}>
//                       <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Profile');navigation.navigate('ProfileScreen')}}>
//                       <Icon4 name="user-circle-o" size={26} color={activeTab === 'Profile' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                   </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//     gap: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   chatBox: {
//     flex: 1,
//     marginBottom: 70,
//   },
//   chatBubble: {
//     padding: 12,
//     borderRadius: 12,
//     marginVertical: 4,
//     maxWidth: '80%',
//   },
//   userBubble: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#0052cc',
//   },
//   botBubble: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#eeeeee',
//   },
//   chatText: {
//     color: '#fff',
//   },
//   inputArea: {
//     position: 'absolute',
//     bottom: 16,
//     left: 16,
//     right: 16,
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     elevation: 5,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     paddingHorizontal: 10,
//     color: '#000',
//   },
//   sendButton: {
//     backgroundColor: '#0052cc',
//     padding: 10,
//     borderRadius: 20,
//   },
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 55,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderColor: 'darkgreen',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   tabItem: {
//     color: '#004d2c',
//     fontWeight: '600',
//     fontSize: 40,
//   },
// });

// export default ChatBotScreen;
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

const ChatBotScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [activeTab, setActiveTab] = useState('Chat');

  // Hide tab bar when ChatBot is focused
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

      return () => {
        navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      };
    }, [navigation])
  );

  const handleSend = () => {
    if (message.trim() === '') return;

    const newChat = [...chat, { type: 'user', text: message }];
    setChat(newChat);
    setMessage('');

    setTimeout(() => {
      const botReply = {
        type: 'bot',
        text: 'Analyzing... Looks safe, but avoid clicking if unsure. Need further scan?',
      };
      setChat([...newChat, botReply]);
    }, 800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/background1.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>PhishGuard Assistant</Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView style={styles.chatBox}>
            {chat.map((msg, index) => (
              <View
                key={index}
                style={[
                  styles.chatBubble,
                  msg.type === 'user' ? styles.userBubble : styles.botBubble,
                ]}
              >
                <Text style={[styles.chatText, msg.type === 'bot' && { color: '#000' }]}>
                  {msg.text}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Ask about links, texts..."
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
              <Icon name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  chatBox: {
    flex: 1,
    marginBottom: 70,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#0052cc',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
  },
  chatText: {
    color: '#fff',
  },
  inputArea: {
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#0052cc',
    padding: 10,
    borderRadius: 20,
  },
});

export default ChatBotScreen;
