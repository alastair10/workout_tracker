// require express package
const express = require('express') 

// creates instance of router
const router = express.Router() 

// attach all the request handlers to the router
// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'Get all workouts'});
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single workout'})
})


// DELETE new workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})

// POST a new workout (send data to server with req object)
//  - but can only access req object with middleware (see express.json in server file)
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new workout'})
})

// UPDATE a workout (send data to server with req object).
//  - but can only access req object with middleware (see express.json in server file)
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

// export the router so routes can be used in app file
module.exports = router;