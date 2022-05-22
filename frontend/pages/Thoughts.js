import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import Folder from "../components/Folder";

export default function Example() {
  // const [items, setItems] = React.useState([
  //   { name: "TURQUOISE", code: "#1abc9c" },
  //   { name: "EMERALD", code: "#2ecc71" },
  //   { name: "PETER RIVER", code: "#3498db" },
  //   { name: "AMETHYST", code: "#9b59b6" },
  //   { name: "WET ASPHALT", code: "#34495e" },
  //   { name: "GREEN SEA", code: "#16a085" },
  //   { name: "NEPHRITIS", code: "#27ae60" },
  //   { name: "BELIZE HOLE", code: "#2980b9" },
  //   { name: "WISTERIA", code: "#8e44ad" },
  //   { name: "MIDNIGHT BLUE", code: "#2c3e50" },
  //   { name: "SUN FLOWER", code: "#f1c40f" },
  //   { name: "CARROT", code: "#e67e22" },
  //   { name: "ALIZARIN", code: "#e74c3c" },
  //   { name: "CLOUDS", code: "#ecf0f1" },
  //   { name: "CONCRETE", code: "#95a5a6" },
  //   { name: "ORANGE", code: "#f39c12" },
  //   { name: "PUMPKIN", code: "#d35400" },
  //   { name: "POMEGRANATE", code: "#c0392b" },
  //   { name: "SILVER", code: "#bdc3c7" },
  //   { name: "ASBESTOS", code: "#7f8c8d" },
  // ]);

  const [folders, setFolders] = React.useState([
    { backgroundColor: "#A0F912", color: "red", text: "Ideas" },
    { backgroundColor: "#B0F913", color: "green", text: "Ideas2" },
    { backgroundColor: "#C0F914", color: "blue", text: "Ideas3" },
    { backgroundColor: "#D0F915", color: "orange", text: "Ideas4" },
    { backgroundColor: "#E0F916", color: "violet", text: "Ideas5" },
    { backgroundColor: "#F0F917", color: "yellow", text: "Ideas6" },
    { backgroundColor: "#G0F918", color: "purple", text: "Ideas7" },
    { backgroundColor: "#H0F919", color: "azure", text: "Ideas8" },
    { backgroundColor: "#I0F910", color: "beige", text: "Ideas9" },
    { backgroundColor: "#J0F911", color: "black", text: "Ideas0" },
  ]);

  return (
    <FlatGrid
      itemDimension={100}
      data={folders}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* <Text style={styles.itemName}>{item.name}</Text> */}
          {/* <Folder color="red" backgroundColor="#135487" text="aiwfoh"></Folder> */}
          <Folder
            color={item.color}
            backgroundColor={item.backgroundColor}
            text={item.text}
          ></Folder>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 50,
    height: 20,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

// style={[styles.itemContainer, { backgroundColor: item.code }]}
