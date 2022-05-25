const express = require('express')
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');
const cors = require('cors')
// const download = require("downloadjs");

const app = express()
const port = 3000

let labels = ["ideas", "miscellaneous", "programming", "social"]

app.use(
  cors({
    origin: "http://localhost:19006"
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'JCyr_vJ37RNHAMdkK9H75cJlTvdM56rXTPXXXOUXkQeQ',
  }),
  serviceUrl: 'https://api.us-east.speech-to-text.watson.cloud.ibm.com',
});

let newfolder = false;
let newfolderName = "";
let className = "";
let maxCount = 0;
let maxLabel = 0;
let doneRec = false;

async function quickstart() {
  // The path to the remote LINEAR16 file

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };


}

app.post('/file', (req, res) => {
  uri = req.body.uri;
  console.log(uri);

  // download(uri, "currentAudio.webm", "audio/webm");

  const recognizeParams = {
    audio: fs.createReadStream("demo.mp3"),
    contentType: 'audio/mp3',
    wordAlternativesThreshold: 0.9,
  };
  


  speechToText.recognize(recognizeParams).then(og => {
    // console.log(JSON.stringify(og, null, 2));
    result = og["result"];

    // console.log(JSON.stringify(res, null, 2));

    sentence = result["results"][0]["alternatives"][0]["transcript"];
    conf = result["results"][0]["alternatives"][0]["confidence"];

    // console.log("SENTENCE: " + sentence);
    // console.log("CONFIDENCE: " + conf);

    if (sentence.toLowerCase().includes("new folder")) {
      console.log("making new folder")
      words = sentence.splot(' ');
      for (let i = 1; i < words.length; i++) {
        if (words[i] == 'folder' && words[i - 1] == 'new') {
          newfolder = true;
          newfolderName = words[i + 1] + (i + 2 < words.length) ? words[i + 2] : "" + (i + 3 < words.length) ? words[i + 3] : "";
        }
      }
    } else {
      words = sentence.split(' ');
      let count = Array.apply(null, Array(5)).map(function (x, i) { return 0 });
      for (let i = 0; i < labels.length; i++) {
        for (let j = 0; j < words.length; j++) {
          if ((labels[i].toLowerCase().includes(words[j].toLowerCase()) || words[j].toLowerCase().includes(labels[i])) && Math.abs(words[j].length - labels[i].length) <= 1) {
            count[i] += 1;
          }
        }
        if (count[i] >= maxCount) {
          maxLabel = i;
          maxCount = count[i];
        }
        console.log(labels[i] + " : " + count[i]);
      }
    }

    console.log(maxLabel)

    className = labels[maxLabel];
    res.send({
      'new_folder': newfolder,
      'new_folder_name': newfolderName,
      'classified': className,
      'text' : sentence
    })
    console.log("THIS BELONGS TO", labels[maxLabel])
    console.log("CONFIDENCE", conf)
    console.log("NEW FOLDER?", newfolder);
  }).catch(err => {
    console.log("error: ", err)
  })
})

app.post('/', (req, res) => {
  uri = req.body.uri;
  console.log(uri);

  // download(uri, "currentAudio.webm", "audio/webm");

  const recognizeParams = {
    audio: fs.createReadStream(uri),
    contentType: 'audio/mp3',
    wordAlternativesThreshold: 0.9,
  };
  


  speechToText.recognize(recognizeParams).then(og => {
    // console.log(JSON.stringify(og, null, 2));
    result = og["result"];

    // console.log(JSON.stringify(res, null, 2));

    sentence = result["results"][0]["alternatives"][0]["transcript"];
    conf = result["results"][0]["alternatives"][0]["confidence"];

    // console.log("SENTENCE: " + sentence);
    // console.log("CONFIDENCE: " + conf);

    if (sentence.toLowerCase().includes("new folder")) {
      console.log("making new folder")
      words = sentence.splot(' ');
      for (let i = 1; i < words.length; i++) {
        if (words[i] == 'folder' && words[i - 1] == 'new') {
          newfolder = true;
          newfolderName = words[i + 1] + (i + 2 < words.length) ? words[i + 2] : "" + (i + 3 < words.length) ? words[i + 3] : "";
        }
      }
    } else {
      words = sentence.split(' ');
      let count = Array.apply(null, Array(5)).map(function (x, i) { return 0 });
      for (let i = 0; i < labels.length; i++) {
        for (let j = 0; j < words.length; j++) {
          if ((labels[i].toLowerCase().includes(words[j].toLowerCase()) || words[j].toLowerCase().includes(labels[i])) && Math.abs(words[j].length - labels[i].length) <= 1) {
            count[i] += 1;
          }
        }
        if (count[i] >= maxCount) {
          maxLabel = i;
          maxCount = count[i];
        }
        console.log(labels[i] + " : " + count[i]);
      }
    }

    console.log(maxLabel)

    className = labels[maxLabel];
    res.send({
      'new-folder': newfolder,
      'new-folder-name': newfolderName,
      'classified': className,
    })
    console.log("THIS BELONGS TO", labels[maxLabel])
    console.log("CONFIDENCE", conf)
    console.log("NEW FOLDER?", newfolder);
  }).catch(err => {
    console.log("error: ", err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

quickstart();
