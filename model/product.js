const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const productSchema = new Schema({
    barcode:{
        type: string,
        required: true
    },
    barcodeProduct:{
        type: string
    },
    numberProduct:{
        type: Number
    },
    description:{
        type: string
    }
})
productSchema.index({barcode: 1},{unique: true})
productSchema.plugin(uniqueValidator)
const Product = mongoose.model('product', productSchema)

module.exports = Product