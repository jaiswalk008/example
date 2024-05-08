const express = require('express');

const server = express();

server.get('/',(req,res) =>{
    res.end('Hello from AWS');
})

server.listen(3000, () =>{
    console.log('Server started on port 3000');
})