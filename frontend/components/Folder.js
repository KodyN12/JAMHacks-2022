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

const Folder = (props) => {
  return (
    <View style={styles.rectangle}>
      <Text
        style={{
          color: "#FFFFFF",
        }}
      >
        HII
      </Text>
    </View>
  );
};

export default Folder;

const styles = StyleSheet.create({
  rectangle: {
    width: "100px",
    height: "200px",
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
