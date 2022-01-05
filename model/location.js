const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const locationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    barcode:{
        type: string,
        required: true
    },
    name:{
        type: string,
        required: true
    },
    location:{
        type: string
    },
    date:{
        type: Date,
        required: true
    }
})
locationSchema.index({barcode: 1},{unique: true})
locationSchema.plugin(uniqueValidator)
const Location = mongoose.model('location', locationSchema)

module.exports = Location
