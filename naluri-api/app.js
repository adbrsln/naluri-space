/**
 * Naluri Space Project
 */
const express = require('express')
const path = require('path')

const indexRouter = require('./router/index.js')
const app = express()
const port = 3000

app.use('/', indexRouter)

app.listen(port, function(err) {
  if(err) throw err
  console.log(`Naluri Space API services running at http://localhost:${port}`)
})