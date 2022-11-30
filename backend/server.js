// loads environ variables into process.env object available globally
require('dotenv').config() 

// requires the express package
const express = require('express')

// connect to the db with mongoose
const mongoose = require('mongoose')

// loads the routes to be used on the app
const workoutRoutes = require('./routes/workouts')

// express app created and stored
const app = express()

//MIDDLEWARE
// any request that has 'body' (data that's being sent to the server) will be parsed and attached to the request (req) object.
// this allows it to be used in the request handler.
// THIS MUST GO BEFORE YOU use any routes (line 25)
app.use(express.json())

// attaching routes to the app
// when a request is fired to this route ('/api/workouts), 
// then use the routes in workoutRoutes
app.use('/api/workouts', workoutRoutes)

// Connect to DB (using env variable)
// once connected, we can start listening for requests
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    // uses env variable
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    })
  })
  // catch error if URI is incorrect or if auth fails
  .catch((error) => {
    console.log(error);
  })

// global middleware to log requests coming in
// helps see what's going on 
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

