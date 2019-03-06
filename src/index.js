const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { database } = require('./database')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.SERVER_PORT || 3000

database.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
})
