// import mongoose
const mongoose = require('mongoose')

// create Schema
const Schema = mongoose.Schema

// create the user schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)

