// loads environ variables into process.env object available globally
require('dotenv').config() 

// requires the express package
const express = require('express')

// loads the routes to be used on the app
const workoutRoutes = require('./routes/workouts')


// express app created and stored
const app = express()

// listen for requests
// uses env variable
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
})

// attaching routes to the app
// workoutRoutes are only added once we visit /api/workouts
app.use('/api/workouts', workoutRoutes)

//MIDDLEWARE
// any request that has 'body' (data that's being sent to the server) will be parsed and attached to the request (req) object.
// this allows it to be used in the request handler.
app.use(express.json())


// global middleware to log requests coming in
// helps see what's going on 
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

