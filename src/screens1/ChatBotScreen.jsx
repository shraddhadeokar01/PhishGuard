import React, { useState, useCallback, useRef } from 'react';
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
import { DEEPSEEK_API_KEY } from '@env';
import axios from 'axios';

const ChatBotScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [activeTab, setActiveTab] = useState('Chat');
  const scrollViewRef = useRef(null);
  // Hide tab bar when ChatBot is focused
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

      return () => {
        navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      };
    }, [navigation])
  );

  const handleSend = async () => {
    if (message.trim() === '') return;

    const newChat = [...chat, { type: 'user', text: message }];
    setChat(newChat);
    setMessage('');

    try {
      const response = await axios.post(
        'https://api.deepseek.com/v1/chat/completions',
        {
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant specialized in cybersecurity and phishing detection.',
            },
            {
              role: 'user',
              content: message,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botText = response.data.choices[0].message.content.trim();

      setChat(prevChat => [...prevChat, { type: 'bot', text: botText }]);
    } catch (error) {
      console.error('DeepSeek API Error:', error.message);
      setChat(prevChat => [
        ...prevChat,
        { type: 'bot', text: 'Error: Unable to fetch reply. Please try again later.' },
      ]);
    }
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
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
          <ScrollView
            style={styles.chatBox}
            ref={scrollViewRef}
            contentContainerStyle={{ paddingBottom: 100 }} // ✅ add padding so last message is visible
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })} // ✅ auto-scroll
          >
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
    //marginBottom: 70,
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
    // backgroundColor: '#fff',
    // borderRadius: 25,
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // elevation: 5,
    // marginBottom: 10,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
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

// import React, { useState, useCallback, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Voice from '@react-native-voice/voice';
// import { useFocusEffect } from '@react-navigation/native';
// import { DEEPSEEK_API_KEY } from '@env';


// const ChatBotScreen = ({ navigation }) => {
//   const [message, setMessage] = useState('');
//   const [chat, setChat] = useState([]);
//   const [isRecording, setIsRecording] = useState(false);

//   // Hide tab bar
//   useFocusEffect(
//     useCallback(() => {
//       navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
//       return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
//     }, [navigation])
//   );

//   useEffect(() => {
//     Voice.onSpeechResults = onSpeechResults;
//     Voice.onSpeechError = onSpeechError;
//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const onSpeechResults = (event) => {
//     if (event.value && event.value.length > 0) {
//       setMessage(event.value[0]);
//     }
//     setIsRecording(false);
//   };

//   const onSpeechError = (error) => {
//     console.error('Voice error:', error);
//     setIsRecording(false);
//   };

//   const startRecording = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setIsRecording(true);
//         await Voice.start('en-US');
//       } else {
//         alert('Microphone permission denied');
//       }
//     } catch (e) {
//       console.error('startRecording error:', e);
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       setIsRecording(false);
//       await Voice.stop();
//     } catch (e) {
//       console.error('stopRecording error:', e);
//     }
//   };

//   const handleSend = async () => {
//     if (message.trim() === '') return;

//     const newChat = [...chat, { type: 'user', text: message }];
//     setChat(newChat);
//     setMessage('');

//     try {
//       const prompt = `You are an assistant to help users stay safe from phishing and cyber threats. Answer in short. Question: ${message}`;
//       const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: 'deepseek-chat',
//           messages: [{ role: 'user', content: prompt }],
//         }),
//       });

//       const data = await response.json();
//       const botText = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand.";

//       setChat([...newChat, { type: 'bot', text: botText }]);
//     } catch (error) {
//       console.error('DeepSeek error:', error);
//       setChat([...newChat, { type: 'bot', text: 'Error contacting AI. Try again.' }]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={require('../assets/background1.jpg')}
//         style={styles.background}
//         resizeMode="cover"
//       >
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>PhishGuard Assistant</Text>
//         </View>

//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//           style={{ flex: 1 }}
//         >
//           <ScrollView style={styles.chatBox}>
//             {chat.map((msg, index) => (
//               <View
//                 key={index}
//                 style={[
//                   styles.chatBubble,
//                   msg.type === 'user' ? styles.userBubble : styles.botBubble,
//                 ]}
//               >
//                 <Text style={[styles.chatText, msg.type === 'bot' && { color: '#000' }]}>
//                   {msg.text}
//                 </Text>
//               </View>
//             ))}
//           </ScrollView>

//           <View style={styles.inputArea}>
//             <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
//               <Icon name={isRecording ? 'mic-off' : 'mic'} size={24} color="#0052cc" />
//             </TouchableOpacity>

//             <TextInput
//               style={styles.input}
//               value={message}
//               onChangeText={setMessage}
//               placeholder="Ask about links, texts..."
//               placeholderTextColor="#ccc"
//             />

//             <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
//               <Icon name="send" size={20} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   background: { flex: 1, padding: 16 },
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
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     elevation: 5,
//     marginBottom: 10,
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
//     marginLeft: 5,
//   },
// });

// export default ChatBotScreen;
