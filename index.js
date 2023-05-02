const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())
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