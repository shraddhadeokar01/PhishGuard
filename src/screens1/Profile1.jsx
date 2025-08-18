// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     ImageBackground,
//     SafeAreaView,
//     Alert,
//     Image
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// import Icon4 from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // ✅ for plus icon
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { launchImageLibrary } from 'react-native-image-picker';
// import Modal from 'react-native-modal'; // ✅ Instagram-style bottom sheet

// const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

// const ProfileScreen = ({ navigation }) => {
//     const [activeTab, setActiveTab] = useState('ProfileScreen');
//     const [isModalVisible, setModalVisible] = useState(false);

//     const [user, setUser] = useState({
//         fullName: '',
//         email: '',
//         mobile: '',
//         photoURL: '',
//     });
//     const [userKey, setUserKey] = useState(null);

//     // ✅ new state for full image modal
//     const [isImageModalVisible, setImageModalVisible] = useState(false);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const identifier = await AsyncStorage.getItem('userIdentifier');
//                 if (!identifier) {
//                     Alert.alert('Error', 'User not logged in');
//                     return;
//                 }

//                 const response = await axios.get(URL);
//                 const users = response.data;

//                 const matchedUserKey = Object.keys(users || {}).find(
//                     (key) =>
//                         users[key].email?.toLowerCase() === identifier.toLowerCase() ||
//                         users[key].contact === identifier
//                 );

//                 if (matchedUserKey) {
//                     const matchedUser = users[matchedUserKey];
//                     setUser({
//                         fullName: matchedUser.name || '',
//                         email: matchedUser.email || '',
//                         mobile: matchedUser.contact || '',
//                         photoURL: matchedUser.photoURL || '',
//                     });
//                     setUserKey(matchedUserKey);
//                 } else {
//                     Alert.alert('Error', 'User data not found');
//                 }
//             } catch (error) {
//                 console.error('Error fetching user:', error);
//                 Alert.alert('Error', 'Failed to load user data');
//             }
//         };

//         fetchUserData();
//     }, []);

//     // ✅ Pick image
//     const handleChangePhoto = () => {
//         launchImageLibrary({ mediaType: 'photo' }, async (response) => {
//             if (response.didCancel) return;
//             if (response.errorMessage) {
//                 Alert.alert('Error', response.errorMessage);
//                 return;
//             }
//             const uri = response.assets[0].uri;
//             setUser((prev) => ({ ...prev, photoURL: uri }));

//             if (userKey) {
//                 try {
//                     await axios.patch(
//                         `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
//                         { photoURL: uri }
//                     );
//                 } catch (err) {
//                     console.log(err);
//                     Alert.alert('Error', 'Could not update photo');
//                 }
//             }
//         });
//         setModalVisible(false);
//     };

//     // ✅ Remove photo
//     const handleRemovePhoto = async () => {
//         setUser((prev) => ({ ...prev, photoURL: '' }));
//         if (userKey) {
//             try {
//                 await axios.patch(
//                     `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
//                     { photoURL: '' }
//                 );
//             } catch (err) {
//                 console.log(err);
//                 Alert.alert('Error', 'Could not remove photo');
//             }
//         }
//         setModalVisible(false);
//     };

//     return (
//         <ImageBackground
//             source={require('../assets/background1.jpg')}
//             style={styles.background}
//             resizeMode="cover"
//         >
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Profile</Text>
//                     <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
//                         <Text style={styles.edit}>Edit</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.avatarContainer}>
//                     {user.photoURL ? (
//                         <TouchableOpacity onPress={() => setImageModalVisible(true)}>
//                             <Image source={{ uri: user.photoURL }} style={styles.avatar} resizeMode="cover" />
//                         </TouchableOpacity>
//                     ) : (
//                         <Icon name="user-circle" size={100} color="#fff" />
//                     )}

//                     {/* ✅ Stylish Plus Icon */}
//                     <TouchableOpacity style={styles.plusIcon} onPress={() => setModalVisible(true)}>
//                         <MaterialIcons name="add" size={24} color="#fff" />
//                     </TouchableOpacity>

//                     <Text style={styles.name}>{user.fullName}</Text>
//                 </View>

//                 <View style={styles.form}>
//                     <TextInput style={styles.input} placeholder="Full Name" value={user.fullName} editable={false} />
//                     <TextInput style={styles.input} placeholder="Email Address" value={user.email} editable={false} />
//                     <TextInput style={styles.input} placeholder="Mobile Number" value={user.mobile} editable={false} />
//                 </View>

//                 {/* ✅ Instagram Style Bottom Sheet */}
//                 <Modal
//                     isVisible={isModalVisible}
//                     onBackdropPress={() => setModalVisible(false)}
//                     style={styles.modal}
//                 >
//                     <View style={styles.modalContent}>
//                         <TouchableOpacity style={styles.modalButton} onPress={handleChangePhoto}>
//                             <Text style={styles.modalText}>🖼️ Add New Profile Picture</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={[styles.modalButton, { borderBottomWidth: 0 }]} onPress={handleRemovePhoto}>
//                             <Text style={[styles.modalText, { color: 'red' }]}>❌ Remove Profile Picture</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Modal>

//                 {/* ✅ Full Screen Image Viewer */}
//                 <Modal
//                     isVisible={isImageModalVisible}
//                     onBackdropPress={() => setImageModalVisible(false)}
//                     style={styles.fullImageModal}
//                 >
//                     <View style={styles.fullImageContainer}>
//                         <Image
//                             source={{ uri: user?.photoURL }}
//                             style={styles.fullImage}
//                             resizeMode="contain"
//                         />
//                     </View>
//                 </Modal>

//                 <View style={styles.bottomBar}>
//                     <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
//                         <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
//                         <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
//                         <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
//                         <Icon4 name="user-circle-o" size={26} color={activeTab === 'ProfileScreen' ? '#13376eff' : 'gray'} />
//                     </TouchableOpacity>
//                 </View>
//             </SafeAreaView>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     background: { flex: 1 },
//     container: { flex: 1, padding: 20 },
//     header: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//     title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
//     edit: { fontSize: 16, color: '#66b3ff' },
//     avatarContainer: { alignItems: 'center', marginVertical: 30, position: 'relative' },
//     avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff' },
//     plusIcon: {
//         position: 'absolute',
//         bottom: 0,
//         right: '35%',
//         backgroundColor: '#007bff',
//         width: 35,
//         height: 35,
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 2,
//         borderColor: '#fff',
//     },
//     name: { fontSize: 18, color: '#fff', marginTop: 10, fontWeight: '600', marginBottom: 15 },
//     form: { width: '100%' },
//     input: {
//         backgroundColor: '#c7daf7',
//         borderRadius: 15,
//         paddingVertical: 12,
//         paddingHorizontal: 15,
//         fontSize: 15,
//         marginBottom: 20,
//         color: '#001a33',
//     },
//     bottomBar: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         height: 55,
//         backgroundColor: 'white',
//         borderTopWidth: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//     },
//     modal: { justifyContent: 'flex-end', margin: 0 },
//     modalContent: {
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         paddingVertical: 15,
//         paddingHorizontal: 20,
//     },
//     modalButton: {
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     modalText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//         textAlign: 'center',
//     },
//     fullImageModal: {
//         margin: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     fullImageContainer: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     fullImage: {
//         width: '100%',
//         height: '100%',
//     },
// });

// export default ProfileScreen;

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    Alert,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Modal from 'react-native-modal'; 
import ImagePicker from 'react-native-image-crop-picker'; 

const URL = 'https://phishguard-78f53-default-rtdb.firebaseio.com/users.json';

const ProfileScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('ProfileScreen');
    const [isModalVisible, setModalVisible] = useState(false);

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        mobile: '',
        photoURL: '',
    });
    const [userKey, setUserKey] = useState(null);

    
    const [isImageModalVisible, setImageModalVisible] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const identifier = await AsyncStorage.getItem('userIdentifier');
                if (!identifier) {
                    Alert.alert('Error', 'User not logged in');
                    return;
                }

                const response = await axios.get(URL);
                const users = response.data;

                const matchedUserKey = Object.keys(users || {}).find(
                    (key) =>
                        users[key].email?.toLowerCase() === identifier.toLowerCase() ||
                        users[key].contact === identifier
                );

                if (matchedUserKey) {
                    const matchedUser = users[matchedUserKey];
                    setUser({
                        fullName: matchedUser.name || '',
                        email: matchedUser.email || '',
                        mobile: matchedUser.contact || '',
                        photoURL: matchedUser.photoURL || '',
                    });
                    setUserKey(matchedUserKey);
                } else {
                    Alert.alert('Error', 'User data not found');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                Alert.alert('Error', 'Failed to load user data');
            }
        };

        fetchUserData();
    }, []);

    
    const handleChangePhoto = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true, 
            cropperCircleOverlay: false, 
        }).then(async (image) => {
            const uri = image.path;
            setUser((prev) => ({ ...prev, photoURL: uri }));

            if (userKey) {
                try {
                    await axios.patch(
                        `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
                        { photoURL: uri }
                    );
                } catch (err) {
                    console.log(err);
                    Alert.alert('Error', 'Could not update photo');
                }
            }
        }).catch(err => console.log(err));

        setModalVisible(false);
    };

    // ✅ Remove photo
    const handleRemovePhoto = async () => {
        setUser((prev) => ({ ...prev, photoURL: '' }));
        if (userKey) {
            try {
                await axios.patch(
                    `https://phishguard-78f53-default-rtdb.firebaseio.com/users/${userKey}.json`,
                    { photoURL: '' }
                );
            } catch (err) {
                console.log(err);
                Alert.alert('Error', 'Could not remove photo');
            }
        }
        setModalVisible(false);
    };

    return (
        <ImageBackground
            source={require('../assets/background1.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
                        <Text style={styles.edit}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.avatarContainer}>
                    {user.photoURL ? (
                        <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                            <Image source={{ uri: user.photoURL }} style={styles.avatar} resizeMode="cover" />
                        </TouchableOpacity>
                    ) : (
                        <Icon name="user-circle" size={100} color="#fff" />
                    )}

                    {/* ✅ Stylish Plus Icon */}
                    <TouchableOpacity style={styles.plusIcon} onPress={() => setModalVisible(true)}>
                        <MaterialIcons name="add" size={24} color="#fff" />
                    </TouchableOpacity>

                    <Text style={styles.name}>{user.fullName}</Text>
                </View>

                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Full Name" value={user.fullName} editable={false} />
                    <TextInput style={styles.input} placeholder="Email Address" value={user.email} editable={false} />
                    <TextInput style={styles.input} placeholder="Mobile Number" value={user.mobile} editable={false} />
                </View>

                {/* ✅ Instagram Style Bottom Sheet */}
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.modal}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.modalButton} onPress={handleChangePhoto}>
                            <Text style={styles.modalText}>🖼 Add New Profile Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, { borderBottomWidth: 0 }]} onPress={handleRemovePhoto}>
                            <Text style={[styles.modalText, { color: 'red' }]}>❌ Remove Profile Picture</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                {/* ✅ Full Screen Image Viewer (tap anywhere to exit) */}
                <Modal
                    isVisible={isImageModalVisible}
                    onBackdropPress={() => setImageModalVisible(false)}
                    style={styles.fullImageModal}
                >
                    <TouchableOpacity 
                        style={styles.fullImageContainer} 
                        activeOpacity={1} 
                        onPress={() => setImageModalVisible(false)}
                    >
                        <Image
                            source={{ uri: user?.photoURL }}
                            style={styles.fullImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </Modal>

                <View style={styles.bottomBar}>
                    <TouchableOpacity onPress={() => { setActiveTab('Home'); navigation.navigate('HomeScreen') }}>
                        <Icon1 name="home" size={26} color={activeTab === 'Home' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab('Settings'); navigation.navigate('SettingsScreen') }}>
                        <Icon2 name="settings" size={26} color={activeTab === 'Settings' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab('Chat'); navigation.navigate('ChatBotScreen') }}>
                        <Icon3 name="chatbox-ellipses" size={26} color={activeTab === 'Chat' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab('Profile'); navigation.navigate('ProfileScreen') }}>
                        <Icon4 name="user-circle-o" size={26} color={activeTab === 'ProfileScreen' ? '#13376eff' : 'gray'} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: { flex: 1 },
    container: { flex: 1, padding: 20 },
    header: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: -10 },
    edit: { fontSize: 16, color: '#66b3ff' },
    avatarContainer: { alignItems: 'center', marginVertical: 30, position: 'relative' },
    avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 2, borderColor: '#fff' },
    plusIcon: {
        position: 'absolute',
        bottom: 48,
        right: '34%',
        backgroundColor: '#007bff',
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    name: { fontSize: 18, color: '#fff', marginTop: 10, fontWeight: '600', marginBottom: 15 },
    form: { width: '100%' },
    input: {
        backgroundColor: '#c7daf7',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 15,
        marginBottom: 20,
        color: '#001a33',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 55,
        backgroundColor: 'white',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modal: { justifyContent: 'flex-end', margin: 0 },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    modalButton: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    modalText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    fullImageModal: {
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '100%',
        height: '100%',
    },
});

export default ProfileScreen;