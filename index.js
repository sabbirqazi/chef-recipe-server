const express = require('express')
const app = express()
const port = 5000
const allChefs = require("./data.json")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/allData', (req, res) => {
 res.send(allChefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})