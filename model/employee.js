const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const employeeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    usename:{
        type: string,
        required: true
    },
    adress:{ 
        type: string,
        required: true
    },
    email:{
        type: string,
        required: true
    },
    password:{
        type: string,
        required: true
    },
    birthdate:{
        type: string
    },
    additionalInfo:{
        type: string
    }
})
employeeSchema.index({username: 1, password: 1}, {uniqeu: true})
employeeSchema.plugin(uniqueValidator)
const Employee = mongoose.model('employee', employeeSchema)

module.export = Employee