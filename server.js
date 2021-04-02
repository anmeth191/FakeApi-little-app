const express = require('express');
const app = express();
const port = 5000;



app.listen(port , ()=>{console.log(`Listening Port:${port}`)});
app.get('/post', (request , response) =>{

    response.send('You are connected to a react server');
})