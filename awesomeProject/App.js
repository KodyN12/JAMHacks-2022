// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/
 
// import React in our code
import React, {useState, useEffect} from 'react';

import {Audio, Video} from 'expo-av';

import {API_KEY} from './config.json';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Button,
} from 'react-native';
 
const speech = require('@google-cloud/speech');
 
const App = () => {
  const [recording, setRecording] = useState();

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

  async function startRecording(){
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
  }

  async function stopRecording(){
    const player = new Audio.Sound();

    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);

    await player.loadAsync({uri: uri});
    await player.playAsync();
    // getTranscription(uri);
    quickstart(uri);
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Hi!</Text>
        <Button title="Start" onPress={startRecording} style={styles.buttonTextStyle}></Button>
        <Button title="Stop" onPress={stopRecording} style={styles.buttonTextStyle}></Button>
      </View>
    </SafeAreaView>
  );
};
 
export default App;
 
const styles = StyleSheet.create({
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
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    width: 50
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
