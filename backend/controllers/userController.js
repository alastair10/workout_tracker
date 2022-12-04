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
  // grab email/pw from req body - destructuring from object
  const { email, password } = req.body

  // try/catch error incase email in use error is thrown
  try {
    // grab the user
    const user = await User.signup(email, password)

    // return email and user document if successful
    res.status(200).json({email, user})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
} 

module.exports = { loginUser, signupUser }