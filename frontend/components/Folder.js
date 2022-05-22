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
      <Text style={{ fontSize: 25 }}>
        <b>Folder</b>
      </Text>
    </View>
  );
};

export default Folder;

const styles = StyleSheet.create({
  rectangle: {
    borderRadius: 20,
    width: "150px",
    height: "200px",
    backgroundColor: "#EAE172",
    justifyContent: "center",
    alignItems: "center",
  },
});
