import React, { useState, useEffect } from "react";

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
    <View
      style={{
        borderRadius: 20,
        width: "150px",
        height: "200px",
        // width: Dimensions.get("window").width * 0.1,
        // height: Dimensions.get("window").height * 0.1,
        backgroundColor: props.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, color: props.color }}>{props.text}</Text>
    </View>
  );
};

export default Folder;

// const styles = StyleSheet.create({
//   rectangle: {
//     borderRadius: 20,
//     width: "150px",
//     height: "200px",
//     backgroundColor: rectColor,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
