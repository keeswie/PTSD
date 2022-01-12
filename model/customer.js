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
      type: Object,
      required: false
  }
})
customerSchema.index({ id: 1, password: 1 }, { uniqeu: true })
customerSchema.plugin(uniqueValidator)
const Customer = mongoose.model('customer', customerSchema)

module.export = Customer
