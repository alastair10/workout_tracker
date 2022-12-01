// import the Model
const Workout = require('../models/workoutModel')

// import Mongoose
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
  // empty find method finds all
  // sorts in desc order -1
  const workouts = await Workout.find({}).sort({createdAt: -1})

  //send back json response of the workouts to client
  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
  // grab id from route parameter w/destructuring
  const { id } = req.params

  // check the id is valid before looking for it
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  // use id with the model to find 
  const workout = await Workout.findById(id)

  // if workout doesnt exist
  if (!workout) {
    // must return here to keep from firing rest of code
    return res.status(404).json({error: 'No such workout'})
  }
  // return the workout as json object
  res.status(200).json(workout)
}


// create a new workout
const createWorkout = async (req, res) => {
  // extract 3 properties w/destructuring from request body
  const {title, load, reps} = req.body

  // add doc to db
  try {
    // create() is an async fxn. handler needs async and await added!
    // creates a new workout object that is a new document
    const workout = await Workout.create({title, load, reps}) 
    // send a response of the workout document
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


// delete a workout
const deleteWorkout = async (req, res) => {
  // grab id from route parameter w/destructuring
  const { id } = req.params

  // check the id is valid before looking for it
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  // use _id since we are using Mongoose here
  const workout = await Workout.findByIdAndDelete({_id: id})

  // if workout doesnt exist...
  if (!workout) {
    // must return here to keep from firing rest of code
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json({workout})

}

// update a workout
const updateWorkout = async (req, res) => {
  // grab id from route parameter w/destructuring
  const { id } = req.params

  // check the id is valid before looking for it
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  // 2nd arg is param(s) you want to update
  const workout = await Workout.findByIdAndUpdate({_id: id}, {
    // whatever properties are on the body are 'spread' on the new object
    ...req.body
  })

  // if workout doesnt exist...
  if (!workout) {
    // must return here to keep from firing rest of code
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(workout)

}





// export individual workouts
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}