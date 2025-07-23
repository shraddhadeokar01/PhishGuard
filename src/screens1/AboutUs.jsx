import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const AboutUsScreen = ({navigation}) => {
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
                    <Text style={styles.header}>About Us</Text>
                </View>
                <View style={styles.card}>
                    {/* You can put your "About Us" content here */}
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
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft:30,
        marginTop:-29
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.32)', // Semi-transparent white
        borderRadius: 20,
        marginTop: 10,
        marginBottom:20
    },
});

export default AboutUsScreen;