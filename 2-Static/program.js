const express = require('express')
const path = require('path')
const app = express()
const filePath = process.argv[3] || path.join(__dirname, 'public')
const portNumber = process.argv[2]

app.use(express.static(filePath))
app.listen(portNumber)