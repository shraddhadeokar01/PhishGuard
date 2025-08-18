// import React from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     ImageBackground,
//     SafeAreaView,
//   TouchableOpacity
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// const AboutUsScreen = ({navigation}) => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <ImageBackground
//                 source={require('../assets/background1.jpg')} 
//                 style={styles.background}
//                 resizeMode="cover"
//             >
//                 <View style={styles.headerContainer}>
//                     <TouchableOpacity onPress={() => navigation.goBack()}>
//                                 <Icon name="arrow-back" size={24} color="#fff" marginTop="7" />
//                               </TouchableOpacity>
//                     <Text style={styles.header}>About Us</Text>
//                 </View>
//                 <View style={styles.card}>
//                     {/* You can put your "About Us" content here */}
//                 </View>
//             </ImageBackground>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     background: {
//         flex: 1,
//         padding: 20,
//     },
//     header: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         marginLeft:30,
//         marginTop:-29
//     },
//     card: {
//         flex: 1,
//         backgroundColor: 'rgba(13, 10, 42, 0.32)',
//         borderRadius: 20,
//         marginBottom:20
//     },
// });

// export default AboutUsScreen;


import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AboutUsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/background1.jpg')}
                style={styles.background}
                resizeMode="cover"
            >
                {/* Header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={24} color="#fff" style={{ marginTop: 7 }} />
                    </TouchableOpacity>
                    <Text style={styles.header}>About Us</Text>
                </View>

                {/* Content */}
                <View style={styles.card}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20 }}>
                         <Text style={styles.sectionTitle}>PhishGuard</Text>
                        {/* Intro */}
                        <Text style={styles.intro}>
                            PhishGuard is a mobile security app designed to protect you from phishing attacks and malicious links. 
                            It helps you manually scan suspicious links and instantly detect whether they are safe or harmful.
                        </Text>

                        {/* Mission */}
                        <Text style={styles.sectionTitle}>🔹 Our Mission</Text>
                        <Text style={styles.sectionText}>
                            To provide users with a simple and reliable tool for detecting phishing links and staying safe online.
                        </Text>

                        {/* Key Features */}
                        <Text style={styles.sectionTitle}>🔹 Key Features</Text>
                        <View style={styles.listItem}><Text style={styles.bullet}>🔍</Text><Text style={styles.listText}>Manual link scanning</Text></View>
                        <View style={styles.listItem}><Text style={styles.bullet}>⚡</Text><Text style={styles.listText}>Fast phishing detection</Text></View>
                        <View style={styles.listItem}><Text style={styles.bullet}>📲</Text><Text style={styles.listText}>Easy-to-use and lightweight design</Text></View>
                        <View style={styles.listItem}><Text style={styles.bullet}>🛡️</Text><Text style={styles.listText}>Accurate results with AI-powered detection</Text></View>

                        {/* Why PhishGuard */}
                        <Text style={styles.sectionTitle}>🔹 Why PhishGuard?</Text>
                        <Text style={styles.sectionText}>
                            PhishGuard is built with a simple interface and focuses only on phishing link detection, making it easier for everyone to stay safe without complicated setups.
                        </Text>

                        {/* Privacy */}
                        <Text style={styles.sectionTitle}>🔹 Privacy & Security</Text>
                        <Text style={styles.sectionText}>
                            We respect your privacy. PhishGuard does not share your data with anyone.
                        </Text>

                        {/* Developer */}
                        <Text style={styles.sectionTitle}>🔹 Developer Info</Text>
                        <Text style={styles.sectionText}>
                            Developed by: <Text style={styles.highlight}>LinkSniffers</Text>
                        </Text>
                        <Text style={styles.sectionText}>Version: 1.0.0</Text>
                    </ScrollView>
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
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    header: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    card: {
        flex: 1,
        backgroundColor: 'rgba(19, 15, 53, 0.6)',
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
    },
    intro: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 15,
        lineHeight: 22,
        textAlign: 'justify',
    },
    sectionTitle: {
        color: '#FFD700',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    sectionText: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 10,
        textAlign: 'justify',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    bullet: {
        fontSize: 18,
        marginRight: 8,
    },
    listText: {
        color: '#fff',
        fontSize: 15,
    },
    highlight: {
        color: '#00e6e6',
        fontWeight: 'bold',
    }
});

export default AboutUsScreen;
