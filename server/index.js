const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const {TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;
const twilio = require('twilio');
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
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
    from: TWILIO_PHONE_NUMBER,
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