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
} from "react-native";
import App from "../App";

const Music = (props) => {
  return (
    <ScrollView style={styles.container1}>
      <Text>
        This is an example of a voice message translated by the IDM
        Speech-to-Text API.
      </Text>
    </ScrollView>
  );
};

export default Music;

const styles = StyleSheet.create({
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "center",
    padding: 50,
  },
});
