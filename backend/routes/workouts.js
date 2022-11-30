// Need to access the app in this file:
// - require express package
const express = require('express')
// - creates instance of router
const router = express.Router() 

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
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new workout'}); // json response
})

// PATCH a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'}); // json response
})

// export the router so routes can be used in app file
module.exports = router;