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

// const [rectColor, setRectColor] = useState();

const Folder = (props) => {
  // setRectColor(props.backgroundColor);
  return (
    <View style={StyleSheet.container1}>
      <TouchableHighlight
        style={styles.fitbox}
        backgroundColor={props.backgroundColor}
        underlayColor="#ccc"
        onPress={() => {
          props.setPage("note");
          props.setCurrFolder(props.text);
        }}
      >
        <Text style={{ fontSize: 25, color: props.color }}>{props.text}</Text>
      </TouchableHighlight>
    </View>
    // <View
    //   style={{
    //     borderRadius: 20,
    //     width: "150px",
    //     height: "200px",
    //     // width: Dimensions.get("window").width * 0.1,
    //     // height: Dimensions.get("window").height * 0.1,
    //     backgroundColor: props.backgroundColor,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text style={{ fontSize: 25, color: props.color }}>{props.text}</Text>
    // </View>
  );
};

export default Folder;

const styles = StyleSheet.create({
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  fitbox: {
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.14,
    height: Dimensions.get("window").width * 0.14,
    backgroundColor: "#879CD3",
    justifyContent: "center",
    alignItems: "center",
    top: Dimensions.get("window").height * 0.0,
  },
});
