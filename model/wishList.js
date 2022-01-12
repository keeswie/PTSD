const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const wishListSchema = new Schema({
  products: {
    type: Array,
    required: true
  }
})
wishListSchema.plugin(uniqueValidator)
const WishList = mongoose.model('wishlist', wishListSchema)

module.exports = WishList
