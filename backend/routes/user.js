// require express to make instance of Express router
const express = require('express');
// create instance of express router
const router = express.Router()

//access controller functions
const { singupUser, loginUser, signupUser } = require('../controllers/userController')

// login route
//  - pass in the controller fxn
router.post('/login', loginUser)


// signup route
//  - pass in the controller fxn
router.post('/signup', signupUser)


// export all the routes on the router
module.exports = router