// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/

// import React in our code
import React, { useState, useEffect } from "react";

import { Audio, Video } from "expo-av";
import PageSwitcher from "./components/PageSwitcher";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import all the components we are going to use
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
  Platform,
} from 'react-native';
import Header from "./components/Header";


const { Storage } = require('@google-cloud/storage');
const storage = new Storage();


// const Stack = createNativeStackNavigator();

const App = () => {
  const [recording, setRecording] = useState();
  const [isRecording, setIsRecording] = useState();
  const [currPage, setCurrPage] = useState("home");

  useEffect(async () => {
    //Setting callbacks for the process status
    const permission = await Audio.requestPermissionsAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    await storage.createBucket("audiodump");
    
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => console.log(data))
    // await fetch("http://localhost:3000/", options).then(data => console.log(data))


    return () => { };
  }, []);

  // async function createBucket() {
  //   // Creates the new bucket
  //   console.log(`Bucket created.`);
  //   await storage.createBucket("audiodump");
  // }

  async function manageRecording() {
    if (isRecording) {
      setIsRecording(false);
      const player = new Audio.Sound();

      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log("Recording stopped and stored at", uri);

      await player.loadAsync({ uri: uri }, {}, true);
      await player.playAsync();

      // uploadFile(recording);

      fetch("http://localhost:3000/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: `$gs://audiodump/audioToRec` })
      })
        .then(res => res.text())

    } else {
      setIsRecording(true);
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
    }
  }

  async function uploadFile(filePath) {
    await storage.bucket("audiodump").upload(filePath, {
      destination: "audioToRec",
    });

    console.log(`${filePath} uploaded to audiodump`);
  }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    <SafeAreaView>
      <View style={styles.container2}>
        <Header setPage={setCurrPage}></Header>
      </View>
      <PageSwitcher page={currPage} setPage={setCurrPage} />
    </SafeAreaView>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 50,
    fontFamily: "Inter",
    textAlign: "center",
  },
  microphoneIcon: {
    width: 70,
    height: 70,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  container1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "space-between",
    padding: 50,
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#eb4034",
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: "#cccccc",
    textAlign: "center",
    width: 50,
  },
  microphoneButton: {
    color: "#bbbbbb",
    textAlign: "left",
    width: 100,
  },
  horizontalView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  textStyle: {
    textAlign: "center",
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: "center",
    color: "#B0171F",
  },
});
