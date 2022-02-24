const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'cdad3cb0130046a58e34ec3c265248d8',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


const port = process.env.PORT || 4555;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})