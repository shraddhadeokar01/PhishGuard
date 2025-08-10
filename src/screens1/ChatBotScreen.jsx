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
