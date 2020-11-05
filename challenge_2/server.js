const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const axios = require('axios');
const bodyparser = require('body-parser');

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyparser.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/api/btc/closing', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
    .then((result) => {
      // console.log(result.data)
      res.status(201).send(result.data.bpi)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Something went wrong')
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})