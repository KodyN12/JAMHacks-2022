import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import App from "../App";

const Mic = (props) => {
  return (
    <View style={styles.container1}>
      <TouchableHighlight
        style={{
          borderRadius:
            Math.round(
              Dimensions.get("window").width + Dimensions.get("window").height
            ) / 2,
          width: Dimensions.get("window").width * 0.65,
          height: Dimensions.get("window").width * 0.65,
          backgroundColor: "#879CD3",
          justifyContent: "center",
          alignItems: "center",
          top: Dimensions.get("window").height * 0.3,
        }}
        underlayColor="#ccc"
        onPress={() => App.manageRecording()}
      >
        <Image
          style={styles.microphoneIcon}
          source={require("../microphone.png")}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Mic;

const styles = StyleSheet.create({
  microphoneIcon: {
    width: 70,
    height: 70,
  },
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "center",
    padding: 50,
  },
});
