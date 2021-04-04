const express = require('express');
const app = express();
const port = 8080;



app.listen(port , ()=>{console.log(`Listening Port:${port}`)});
app.get('/post', (request , response) =>{

    response.send({express:'Your react is ready to connect'});
})