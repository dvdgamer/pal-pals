// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Settings } from "react-native";
// import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {NavigationContainer} from '@react-navigation/native';
// import SettingsIcon  from './SettingIcon';


// const Navbar = () => {
//   const insets = useSafeAreaInsets();

//   return (
//     <View style={{ ...styles.navbar, flex: 1, paddingTop: insets.top, paddingHorizontal: 20 }}>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//         <Icon name="add" size={32} style={{ color: '#141316' }}/>
//         <Text style={{ flex: 1, fontSize: 28, color: '#141316', textAlign: 'center' }}>
//           Navbar</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
//           <Icon name="settings" size={30} style={{ color: '#141316' }}/>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     backgroundColor: '#ffc9ad',
//     // padding: 20,
//     width: '100%',
//     height: 100,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     zIndex: 1000,
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   }
// });

// export default Navbar;
