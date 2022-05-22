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
} from "react-native";
import Header from "./components/Header";

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

    // fetch("http://localhost:3000/")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // await fetch("http://localhost:3000/", options).then(data => console.log(data))

    return () => {};
  }, []);

  async function manageRecording() {
    if (isRecording) {
      setIsRecording(false);
      const player = new Audio.Sound();

      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log("Recording stopped and stored at", uri);

      await player.loadAsync({ uri: uri });
      await player.playAsync();

      // fetch("http://localhost:3000/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ uri: uri }),
      // }).then((res) => res.text());
    } else {
      setIsRecording(true);
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
    }
  }

  let content;

  // if (page === "Home") {
  //   content = <Button></Button>;
  // } else if (page === "Thoughts") {
  //   content = <Thoughts></Thoughts>;
  // }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    <SafeAreaView>
      <View style={{backgroundColor : "black", height:"100vh"}}>
        <View style={styles.container2}>
          <Header setPage={setCurrPage}></Header>
        </View>
        <View>
          <PageSwitcher page={currPage} setPage={setCurrPage} manageRecording={manageRecording} recording={isRecording}/>
        </View>
      </View>
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
});
