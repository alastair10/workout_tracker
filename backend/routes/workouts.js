// Need to access the app in this file:
// - require express package
const { response } = require('express');
const express = require('express')
// - creates instance of router
const router = express.Router() 

// import the Model
const Workout = require('../models/workoutModel')


// attach all the request handlers to the router
// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'}); // json response
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout'}); // json response
})


// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'}); // json response
})

// POST and PATCH requests send data to server with req object
//  - but can only access req object with middleware (see express.json in server file)

// POST a new workout
router.post('/', async (req, res) => {
  // extract 3 properties w/destructuring
  const {title, load, reps} = req.body

  try {
    // create() is an async fxn. handler needs async and await added!
    // creates a new workout object that is a new document
    const workout = await Workout.create({title, load, reps}) 
    // send a response of the workout document
    response.status(200).json(workout)
  } catch (error) {
    response.status(400).json({error: error.message})
  }
})

// PATCH a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'}); // json response
})

// export the router so routes can be used in app file
module.exports = router;