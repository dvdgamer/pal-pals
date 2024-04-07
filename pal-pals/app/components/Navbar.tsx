import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Navbar = () => {
  return (
    <SafeAreaView style={styles.navbar}>
      <Text style={styles.navbarText} >Navbar</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000
  },
  navbarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Navbar;
