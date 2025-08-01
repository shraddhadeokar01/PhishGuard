// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   ImageBackground,
// //   TouchableOpacity
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';

// // const ScanHistoryScreen = ({navigation}) => {
// //   return (
// //     <ImageBackground
// //       source={require('../assets/background1.jpg')} // Replace with your background image
// //       style={styles.background}
// //     >
// //       <View style={styles.container}>
// //        <TouchableOpacity onPress={() => navigation.goBack()}>
// //                    <Icon name="arrow-back" size={24} color="#fff" />
// //                  </TouchableOpacity>
// //         <Text style={styles.title}>Scan History</Text>

// //         <ScrollView contentContainerStyle={styles.listContainer}>
// //           {Array.from({ length: 8 }, (_, index) => (
// //             <View key={index} style={styles.linkBox}>
// //               <Text style={styles.linkText}>Link {index + 1}:</Text>
// //             </View>
// //           ))}
// //         </ScrollView>
// //       </View>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //   },
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   title: {
// //     color: '#fff',
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     marginBottom: 40,
// //     marginLeft:28,
// //     marginTop:-27
// //   },
// //   listContainer: {
// //     paddingBottom: 20,
   
// //   },
// //   linkBox: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// //     borderRadius: 10,
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //     marginBottom: 15,
// //   },
// //   linkText: {
// //     color: '#000',
// //     fontSize: 16,
// //   },
// // });

// // export default ScanHistoryScreen;

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   ImageBackground,
//   TouchableOpacity
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import database from '@react-native-firebase/database';
// import auth from '@react-native-firebase/auth';

// const ScanHistoryScreen = ({ navigation }) => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const user = auth().currentUser;
//     if (!user) return;

//     const ref = database().ref(`/scan_history/${user.uid}`);
//     ref.once('value').then(snapshot => {
//       const data = snapshot.val();
//       if (data) {
//         const items = Object.values(data).reverse(); // latest first
//         setHistory(items);
//       }
//     });
//   }, []);

//   return (
//     <ImageBackground
//       source={require('../assets/background1.jpg')}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>

//         <Text style={styles.title}>Scan History</Text>

//         <ScrollView contentContainerStyle={styles.listContainer}>
//           {history.length > 0 ? (
//             history.map((item, index) => (
//               <View key={index} style={styles.linkBox}>
//                 <Text style={styles.linkText}>
//                   Link {index + 1}: {item.url}
//                 </Text>
//                 <Text style={[styles.linkText, { fontSize: 13 }]}>
//                   Result: {item.isPhishing ? '⚠ Phishing' : '✅ Safe'}
//                 </Text>
//                 <Text style={[styles.linkText, { fontSize: 12, color: 'gray' }]}>
//                   Scanned: {new Date(item.scannedAt).toLocaleString()}
//                 </Text>
//               </View>
//             ))
//           ) : (
//             <Text style={[styles.linkText, { color: '#fff', fontSize: 16 }]}>
//               No scan history found.
//             </Text>
//           )}
//         </ScrollView>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     marginLeft: 28,
//     marginTop: -27,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   linkBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//   },
//   linkText: {
//     color: '#000',
//     fontSize: 16,
//   },
// });

// export default ScanHistoryScreen;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ScanHistoryScreen = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [selectedLink, setSelectedLink] = useState(null);
  const [linkModalVisible, setLinkModalVisible] = useState(false);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) return;

    const ref = database().ref(`/scan_history/${user.uid}`);
    ref.once('value').then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const items = Object.values(data).reverse();
        setHistory(items);
      }
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Scan History</Text>

        <ScrollView contentContainerStyle={styles.listContainer}>
          {history.length > 0 ? (
            history.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (!item.isPhishing) {
                    setSelectedLink(item.url);
                    setLinkModalVisible(true);
                  }
                }}
              >
                <View style={styles.linkBox}>
                  <Text style={styles.linkText}>
                    Link {index + 1}: {item.url}
                  </Text>
                  <Text style={[styles.linkText, { fontSize: 13 }]}>
                    Result: {item.isPhishing ? '⚠ Phishing' : '✅ Safe'}
                  </Text>
                  <Text style={[styles.linkText, { fontSize: 12, color: 'gray' }]}>
                    Scanned: {new Date(item.scannedAt).toLocaleString()}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={[styles.linkText, { color: '#fff', fontSize: 16 }]}>
              No scan history found.
            </Text>
          )}
        </ScrollView>

        {/* ✅ Modal to open safe links */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={linkModalVisible}
          onRequestClose={() => setLinkModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' }}>
            <View style={{ backgroundColor: 'white', padding: 25, borderRadius: 10, width: '80%', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, marginBottom: 20, color: '#000', textAlign: 'center' }}>
                Do you want to open this safe link in browser?
              </Text>
              <Text style={{ color: 'blue', marginBottom: 20, textAlign: 'center' }}>{selectedLink}</Text>

              <TouchableOpacity
                style={{ backgroundColor: '#007bff', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5, marginBottom: 10 }}
                onPress={() => {
                  Linking.openURL(selectedLink);
                  setLinkModalVisible(false);
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Open in Browser</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5, backgroundColor: '#ccc' }}
                onPress={() => setLinkModalVisible(false)}
              >
                <Text style={{ color: '#333' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    marginLeft: 28,
    marginTop: -27,
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
