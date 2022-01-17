const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const wiliRoutes = require('./API/routes/wishList')
const prodRoutes = require('./API/routes/Product')
const locRoutes = require('./Api/routes/location')
const empRoutes = require('./API/routes/employee')

// setting everything up
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const corsOption = {
  origin: 'http://localhost:3001',
  Credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOption))
// give acces to any client
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

// from here its sending requests

app.use('/wishlists', wiliRoutes)
app.use('/products', prodRoutes)
app.use('/employees', empRoutes)
app.use('/locations', locRoutes)

// if it cant find any or finish any it returns this (error)
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app
