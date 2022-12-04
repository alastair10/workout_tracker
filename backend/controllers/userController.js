// import the user model (need this to interact w/db)
const User = require('../models/userModel')


// login user
// is async fxn because it's communicating w/db
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'}) 
}

// signup user
// is async fxn because it's communicating w/db
const signupUser = async (req, res) => {
  res.json({mssg: 'signup user'}) 
}

module.exports = { loginUser, signupUser }