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
import { allData } from "../state/allData";

const Note = (props) => {
  let entries = [];

  for (let i = 0; i < allData.length; i++) {
    if (allData[i].text === props.currFolder) {
      entries = allData[i].entries;
    }
  }
  return (
    <View style={styles.container1}>
      <Text>{props.currFolder}</Text>
      {entries.map((entry, idx) => {
        return <Text>{entry}</Text>;
      })}
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  microphoneIcon: {
    width: 100,
    height: 100,
  },
  container1: {
    width: "100%",
    flexDirection: "column",
    alignItems: "top",
    justifyContent: "center",
    padding: 50,
  },
});
