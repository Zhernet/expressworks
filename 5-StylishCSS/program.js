const express = require('express')
const app = express()

const portNumber = process.argv[2]

app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]))

app.listen(portNumber)