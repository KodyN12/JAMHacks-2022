// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/

// import React in our code
import React, { useState, useEffect } from 'react';

import {Audio, Video} from 'expo-av';

import {API_KEY} from './config.json';

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
} from 'react-native';
 
const speech = require('@google-cloud/speech');
 
const App = () => {
  const [recording, setRecording] = useState();
  const [isRecording, setIsRecording] = useState();

  const client = new speech.SpeechClient()

  async function quickstart(uri) {

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
      uri: uri,
    };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    };
    const request = {
      audio: audio,
      config: config,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  }

  async function getTranscription (uri){
    try {
      const formData = new FormData();
      // formData.append('file', {
      //   uri,
      //   type: 'audio/x-wav',
      //   // could be anything 
      //   name: 'speech2text'
      // });
      // const response = await fetch('https://speech.googleapis.com/v1/speech:recognize?key=' + API_KEY, {
      //   method: 'POST',
      //   body: formData
      // });

      const response = await fetch('https://speech.googleapis.com/v1/speech:recognize?key=' + API_KEY, {
        method: 'POST',
        body: {uri}
      });

      const data = await response.json();
      console.log(data);
      this.setState({ query: data.transcript });
    } catch(error) {
      console.log('There was an error', error);
    }
  }
 
  useEffect(async() => {
    //Setting callbacks for the process status
    const permission = await Audio.requestPermissionsAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    }); 
 
    return () => {};
  }, []);

  async function manageRecording() {
    if (isRecording) {
      setIsRecording(false);
      const player = new Audio.Sound();

      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log('Recording stopped and stored at', uri);

      await player.loadAsync({ uri: uri });
      await player.playAsync();
    } else {
      setIsRecording(true);
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
    }
  }

  async function startRecording() {
    if (isRecording) return;
    isRecording = true;
    console.log('Starting recording..');
    const { recording } = await Audio.Recording.createAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    setRecording(recording);
  }

  async function stopRecording() {
    if (!isRecording) return;
    isRecording = false;
    const player = new Audio.Sound();

    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);

    await player.loadAsync({ uri: uri });
    await player.playAsync();
    // getTranscription(uri);
    quickstart(uri);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.bigTitle} top={100}><i>Speech<br></br>Note</i></Text>
        {/* <Button title="Start" onPress={startRecording} style={styles.microphoneButton}></Button>
        <Button title="Stop" onPress={stopRecording} color="#bbbbbb"></Button> */}

        <TouchableHighlight
          style={{
            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
            width: Dimensions.get('window').width * 0.65,
            height: Dimensions.get('window').width * 0.65,
            backgroundColor: '#879CD3',
            justifyContent: 'center',
            alignItems: 'center',
            top: Dimensions.get('window').height * 0.3
          }}
          underlayColor='#ccc'
          onPress={() => manageRecording()}
        >
          {/* <Text>sdfsdf</Text> */}
          <Image
            style={styles.microphoneIcon}
            source={
              require('./microphone.png')
            }
          />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 50,
    fontFamily: "Inter",
    textAlign: "center",
  }
  ,
  microphoneIcon: {
    width: 70,
    height: 70,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#eb4034',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#cccccc',
    textAlign: 'center',
    width: 50
  },
  microphoneButton: {
    color: '#bbbbbb',
    textAlign: 'left',
    width: 100
  },
  horizontalView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    textAlign: 'center',
    padding: 12,
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  textWithSpaceStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
});
