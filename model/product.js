const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const productSchema = new Schema({
  barcode: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  locationBarcode: {
    type: String
  }
})
productSchema.index({ barcode: 1 }, { unique: true })
productSchema.plugin(uniqueValidator)
const Product = mongoose.model('product', productSchema)

module.exports = Product
