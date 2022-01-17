const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const locationSchema = new Schema({
  barcode: {
    type: String,
    required: true
  },
  productNumber: {
    type: Number
  },
  productBarcode: {
    type: String,
    ref: 'Product'
  }
})
locationSchema.index({ barcode: 1 }, { unique: true })
locationSchema.plugin(uniqueValidator)
const Location = mongoose.model('location', locationSchema)

module.exports = Location
