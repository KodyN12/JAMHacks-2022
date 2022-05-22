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

import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const Mic = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <View style={styles.container1}>
          <Text style={styles.bigTitle}>CREATE</Text>
          <Icon name="microphone" size={40} color="#fff" onPress={() => props.manageRecording()}/>
          <Text style={{color: "#fff", paddingTop: "10px"}}>{props.recording ? "Stop Recording" : "Start Recording"}</Text>
    </View>
  );
};

export default Mic;

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 50,
    fontFamily: 'Inter_900Black',
    textAlign: "center",
    color: "#fff",
    paddingBottom: "30px"
  },
  microphoneIcon: {
    width: 100,
    height: 100,
  },
  container1: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
