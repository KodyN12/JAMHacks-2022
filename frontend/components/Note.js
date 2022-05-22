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
      <Text style={{color: '#fff', fontSize: '20px'}}>Folder: {props.currFolder}</Text>
      <View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
          width: "95%",
          paddingTop: "10px"
        }}
      />
      {entries.map((entry, idx) => {
        return <Text style={{color: "#fff", paddingTop: "10px"}}>{entry}</Text>;
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
    paddingLeft: "30px"
  },
});
