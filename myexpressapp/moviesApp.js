var express=require('express');
var app=express();

var mongoose=require('mongoose');
var movies=require('./routes/movies');
app.use('/movies',movies);
app.get('/movies',function(req,res){

});
app.listen(8080,function(){
console.log('Listening');

})
