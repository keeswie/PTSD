const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const employeeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  usename: {
    type: String,
    required: true
  },
  adress: {
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
  birthdate: {
    type: String
  },
  additionalInfo: {
    type: String
  }
})
employeeSchema.index({ username: 1, password: 1 }, { uniqeu: true })
employeeSchema.plugin(uniqueValidator)
const Employee = mongoose.model('employee', employeeSchema)

module.export = Employee
