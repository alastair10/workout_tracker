// need mongoose package to create models and schemas
const mongoose = require('mongoose')

// create a new schema
const Schema = mongoose.Schema

// define the structure of the workout document (the data)
// first arg = object showing how data looks
// second arg = object w/ timestams property. auto adds the time when created or updated
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true} )

// 

// create and export the model to be used
// - 1st arg = singular name is pluralised to be used as collection
// - 2nd arg = schema
module.exports = mongoose.model('Workout', workoutSchema)