import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ChangePasswordScreen = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../assets/background1.jpg')} // Replace with your own image path
            style={styles.background}
        >
            <View style={styles.headerContainer}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                           <Icon name="arrow-back" size={24} color="#fff" />
                         </TouchableOpacity>
                <Text style={styles.header}>Change Password</Text>
            </View>

            <Text style={styles.label}>Current Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter current password"
                secureTextEntry={true}
                placeholderTextColor="gray"
            />

            <Text style={styles.label}>New Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter new password"
                secureTextEntry={true}
                placeholderTextColor="gray"
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm new password"
                secureTextEntry={true}
                placeholderTextColor="gray"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        padding: 20,
    },
    header: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 45,
        marginLeft:25,
        marginTop:-29
    },
    label: {
        color: 'white',
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        color: 'black',
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#000',
        fontWeight: '600',
    },
});

export default ChangePasswordScreen;