const express = require('express')
const speech = require('@google-cloud/speech')
const cors = require('cors')

const app = express()
const port = 3000

app.use(
  cors({
    origin: "http://localhost:19006"
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Creates a client
const client = new speech.SpeechClient();

async function quickstart() {
  // The path to the remote LINEAR16 file
  const gcsUri = 'gs://audiodump/audioToRec';

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    uri: gcsUri,
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
  

  // // Detects speech in the audio file
  //   const [response] = await client.recognize(request);
  //   const transcription = response.results
  //     .map(result => result.alternatives[0].transcript)
  //     .join('\n');
  //   console.log(`Transcription: ${transcription}`);
}
quickstart();

app.get('/', (req, res) => {
  res.send({
    'text': 'Hello World!'
  })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})