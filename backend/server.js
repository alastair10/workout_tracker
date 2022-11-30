const express = require('express')  // requires the express package

 // express app created and stored
const app = express()

// listen for requests
app.listen(4000, () => {
  console.log('listening on port 4000')
})



