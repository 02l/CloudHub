let express = require('express')
let app = express()

let mongo = require('mongodb')
let mongoose = require('mongoose')

let bodyParser = require('body-parser')
let path = require('path')
let db = require('./db/index')

let port = 8000

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, function() {
    console.log('Server connected, listening on port ' + port)
})