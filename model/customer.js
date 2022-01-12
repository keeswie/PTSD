const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const CustomerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  wishList: {
    type: Schema.Types.ObjectId,
    ref: 'Wishlist'
  }
})
CustomerSchema.index({ id: 1, password: 1 }, { uniqeu: true })
CustomerSchema.plugin(uniqueValidator)
const Customer = mongoose.model('customer', CustomerSchema)

module.export = Customer
