require('dotenv').config() // loads environ variables into process.env object available globally
const express = require('express')  // requires the express package


 // express app created and stored
const app = express()

// listen for requests
// useses env variable
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
})

// route handler that reacts to GET requests
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})



