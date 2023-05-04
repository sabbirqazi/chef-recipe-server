const express = require('express')
const cors = require("cors")
const port = process.env.PORT || 5000;
const app = express()

app.use(cors())

const allChefs = require("./data.json");
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/allData', (req, res) => {
 res.send(allChefs)
});
app.get('/allData/:id', (req, res) => {
const id = req.params.id;
const items = allChefs[0]?.chefs?.find((item) => item.id ==id)
res.send({items})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})