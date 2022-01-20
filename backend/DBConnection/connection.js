const mongoose = require('mongoose')

const URI = 'mongodb+srv://mongo:mongo@cluster0.cpb5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
  await mongoose.connect(URI)
  console.log('db connected')
}

module.exports = connectDB
