import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import Folder from "../components/Folder";
import { allData } from "../state/allData";

export default function Thoughts(props) {
  const [folders, setFolders] = React.useState(allData);

  return (
    <View>
      <Text style={{color: '#fff', fontSize: '20px', paddingLeft: '30px'}}>Folders</Text>
      <View
        style={{
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
          width: "95%",
          marginLeft: "30px",
          paddingTop: "10px"
        }}
      />
      <FlatGrid
      itemDimension={100}
      data={folders}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={50}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* <Text style={styles.itemName}>{item.name}</Text> */}
          {/* <Folder color="red" backgroundColor="#135487" text="aiwfoh"></Folder> */}
          <Folder
            setPage={props.setPage}
            setCurrFolder={props.setCurrFolder}
            color={item.color}
            backgroundColor={item.backgroundColor}
            text={item.text}
          ></Folder>
        </View>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  container1: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 20,
    height: 170,
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
