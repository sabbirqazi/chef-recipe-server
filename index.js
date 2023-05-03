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
});
app.get('/allData/:id', (req, res) => {
const id = req.params.id;
console.log(id)
const items = allChefs[0]?.chefs?.find((item) => item.id ==id)
res.send({items})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})