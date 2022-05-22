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
          width: Dimensions.get("window").width * 0.75,
          height: Dimensions.get("window").width * 0.75,
          backgroundColor: "#879CD3",
          justifyContent: "center",
          alignItems: "center",
          top: Dimensions.get("window").height * 0.1,
        }}
        underlayColor="#ccc"
        onPress={() => App.manageRecording()}
      >
        <Image
          style={styles.microphoneIcon}
          source={require("../assets/microphone.png")}
        />
      </TouchableHighlight>
      {/* <Text style={styles.italFont}><i>Save Ideas{"\n"}
      Sort Your Thoughts{"\n"}
      Plan Your Future</i></Text> */}
    </View>
  );
};

export default Mic;

const styles = StyleSheet.create({
  microphoneIcon: {
    width: 100,
    height: 100,
  },
  container1: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 120,
  },
  italFont: {
    fontSize: Dimensions.get("window").width * 0.08,
    fontFamily: "Inter",
    textAlign: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    padding: 120,
  },
});
