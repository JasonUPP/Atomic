//para iniciar nodemon index.js
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const account_Sid = 'AC72c67fc1617d55b54a15c4e940ef7bb0';
const authToken = '3fc55ba54822d941e44e8a25ccd385c3';
const from = '+18507896228'

const twilio = require('twilio');
const client = new twilio(account_Sid, authToken)
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get('/', (req, res) => {
  res.send('Welcome to the Express server');
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
  .create({
    from,
    to: req.body.to,
    body: req.body.body,
  })
  .then(() => {
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);