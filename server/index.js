const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
});





const port = process.env.PORT || 4555;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})