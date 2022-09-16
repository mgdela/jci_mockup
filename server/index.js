const express = require ('express');
const app=express();


app.get('/', function(req,res){
    res.send('Welcome to /');
});

app.listen(8080,function(){
    console.log('Hello World');
});