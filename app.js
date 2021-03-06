const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const custRoutes = require('.API/routes/customer')
const wiliRoutes = require('.API/routes/wishList')

// setting everything up
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
app.use('/customers', custRoutes)
app.use('/wishlists', wiliRoutes)

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
