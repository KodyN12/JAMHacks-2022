import React from "react";
import { StyleSheet, View} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import Folder from "../components/Folder";
import { allData } from "../state/allData";

export default function Thoughts(props) {
  const [folders, setFolders] = React.useState(allData);

  return (
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
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 40,
    flex: 1,
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
