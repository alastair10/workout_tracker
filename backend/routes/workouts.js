// Need to access the app in this file:
// - require express package
const { response } = require('express');
const express = require('express')
// - creates instance of router
const router = express.Router() 

// import the individ fxns
const {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')


// attach all the request handlers to the router
// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)


// DELETE a workout
router.delete('/:id', deleteWorkout)

// POST and PATCH requests send data to server with req object
//  - but can only access req object with middleware (see express.json in server file)

// POST a new workout (using fxn from model)
router.post('/', createWorkout)

// PATCH a workout
router.patch('/:id', updateWorkout)

// export the router so routes can be used in app file
module.exports = router;