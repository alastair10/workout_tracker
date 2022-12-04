// import mongoose
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

// static signup method 
// can't use arrow function with async
userSchema.statics.signup = async function (email, password) {

  // look for the email
  // 'this' refers to the model!
  const exists = await this.findOne({ email })

  // check if email exists
  if (exists) {
    throw Error('Email already in use')
  }

  // generate salt, 10 is default 'rounds' or cost
  const salt = await bcrypt.genSalt(10)
  // hash salt with pw
  const hash = await bcrypt.hash(password, salt)

  // create a document for the user in the db
  // using the hashed password
  const user = await this.create({ email, password: hash})

  // return user bc we're calling this fnx elsewhere
  return user 

}

module.exports = mongoose.model('User', userSchema)

