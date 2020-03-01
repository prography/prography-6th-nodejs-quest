import express from 'express'
import dotenv from 'dotenv'
import fs from 'fs'
import mongo from './mongo'

dotenv.config()
mongo()

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '10mb', extended: true}))

const obj = JSON.parse(fs.readFileSync('./src/route/route.json', 'utf8'))
obj.map(v => {
  try {
    app[v.method](v.path, require('./route/' + v.handler))
  } catch (e) {
    console.log(e)
  }
})


export default app
