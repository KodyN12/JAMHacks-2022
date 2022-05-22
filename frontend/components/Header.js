import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


// function Header() {
const Header = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <View style={styles.container1}>
      <Icon name="home" size={25} color="#fff" onPress={() => props.setPage("home")}/>
      <Text style={styles.bigTitle}>Telenote</Text>
      <Icon name="navicon" size={20} color="#fff" onPress={() => props.setPage("thoughts")}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 60,
    fontFamily: 'Inter_900Black',
    fontWeight: 'regular',
    textAlign: "center",
    alignItems: "center",
    color: "#fff"
  },
  buttonIcon: {
    resizeMode: "contain",
    width: Dimensions.get("window").width * 0.07,
    height: Dimensions.get("window").height * 0.07,
  },
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  fitbox: {
    width: Dimensions.get("window").width * 0.09,
    height: Dimensions.get("window").width * 0.09,
    justifyContent: "center",
    alignItems: "center",
    top: Dimensions.get("window").height * 0.0,
  },
});
