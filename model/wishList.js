const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const wishListSchema = new Schema({
  _id: Schema.Types.ObjectId,
  products: [{
    productType: {
      type: String,
      ref: 'Product'
    },
    number: {
      type: Number
    }

  }]
})
wishListSchema.plugin(uniqueValidator)
const WishList = mongoose.model('wishlist', wishListSchema)

module.exports = WishList
