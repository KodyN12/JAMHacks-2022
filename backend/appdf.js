const express = require('express')
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');
const cors = require('cors')


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

async function quickstart() {
  // The path to the remote LINEAR16 file

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };

  const recognizeParams = {
    audio: fs.createReadStream('middle_sentence.mp3'),
    contentType: 'audio/mp3',
    wordAlternativesThreshold: 0.9,
  };

  speechToText.recognize(recognizeParams).then(og => {
    // console.log(JSON.stringify(og, null, 2));
    res = og["result"];
    // console.log(JSON.stringify(res, null, 2));

    sentence = res["results"][0]["alternatives"][0]["transcript"];
    conf = res["results"][0]["alternatives"][0]["confidence"];

    // console.log("SENTENCE: " + sentence);
    // console.log("CONFIDENCE: " + conf);

    words = sentence.split(' ');
    console.log(words)
    let maxCount = 0, maxLabel = 0, count=Array.apply(null, Array(5)).map(function (x,i) {return 0});
    for(let i = 0; i < labels.length; i++){
      for(let j = 0; j < words.length; j++){
        if((labels[i].toLowerCase().includes(words[j].toLowerCase()) )|| words[j].toLowerCase().includes(labels[i])){
          count[i] += 1;
        }
      }
      if(count[i] >= maxCount){
        maxLabel = i;
        maxCount = count[i];
      }
      console.log(labels[i] + " : " + count[i]);
    }

    count.sort();
    const secondary_confidence = parseFloat(count[count.length - 1] - count[count.length - 2]) / count[count.length - 1];
    const AGGREGATE_CONFIDENCE = conf * secondary_confidence;

    console.log("THIS BELONGS TO", labels[maxLabel])
    console.log("AGGREGATE CONFIDENCE:", AGGREGATE_CONFIDENCE)
  }).catch(err => {
    console.log("error: ", err)
  })

}

app.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

quickstart();
