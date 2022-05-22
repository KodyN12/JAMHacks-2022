import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const Folder = (props) => {
  return (
    <View>
      <TouchableHighlight
        style={styles.fitbox}
        backgroundColor={props.backgroundColor}
        underlayColor="#ccc"
        onPress={() => {
          props.setPage("note");
          props.setCurrFolder(props.text);
        }}
      >
        <Text style={{ fontSize: 25, color: '#fff' }}>{props.text}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Folder;

const styles = StyleSheet.create({
  fitbox: {
    borderRadius: 3,
    width: "150px",
    height: "150px",
    backgroundColor: "#879CD2",
    justifyContent: "center",
    alignItems: "center",
  },
});
