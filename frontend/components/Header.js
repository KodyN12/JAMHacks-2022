import React, { useState, useEffect } from "react";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
//genomics
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Button,
} from "react-native";

// function Header() {
const Header = (props) => {
  return (
    <View style={styles.container1}>
      <TouchableHighlight
        style={{
          borderRadius: 20,
          width: Dimensions.get("window").width * 0.09,
          height: Dimensions.get("window").width * 0.09,
          backgroundColor: "#879CD3",
          justifyContent: "center",
          alignItems: "center",
          top: Dimensions.get("window").height * 0.0,
        }}
        underlayColor="#ccc"
        onPress={() => props.setPage("home")}
      >
        <Image
          style={styles.microphoneIcon}
          source={require("../assets/favicon.png")}
        />
      </TouchableHighlight>
      <Text style={styles.bigTitle} top={100}>
        <i>
          <b>Speechnote</b>
        </i>
      </Text>
      <TouchableHighlight
        style={{
          borderRadius: 20,
          width: Dimensions.get("window").width * 0.09,
          height: Dimensions.get("window").width * 0.09,
          backgroundColor: "#879CD3",
          justifyContent: "center",
          alignItems: "center",
          top: Dimensions.get("window").height * 0.0,
        }}
        underlayColor="#ccc"
        onPress={() => props.setPage("thoughts")}
      >
        <Image
          style={styles.microphoneIcon}
          source={require("../assets/favicon.png")}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 50,
    fontFamily: "Inter",
    textAlign: "center",
    alignItems: "center",
  },
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
  },
});
