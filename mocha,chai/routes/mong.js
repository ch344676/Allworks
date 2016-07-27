var Movie = require('../mn');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//Getting All Movies
router.get('/movieAll', function(req, res) {
	Movie.find({})
	.exec(function(err, movies) {
		if(err){
			res.json("No movie to show");
		}
		else{
			res.json(movies);
		}
	});
});

//Adding a new Movie
router.post('/movieAdd',function(req, res) {
	var data = req.body;
    var movie = new Movie(data);
	
	console.log("movie : " + movie);
	console.log("data : " + data);
	console.log("req.body : " + req.body);
	
    movie.save(function(err) {
		if(err) {
			return res.send("Data not added");
		}
		res.send("data added succesfully"+movie);
	});
});

//deleting a movie
router.delete('/deleteMovie/:id', function(req, res) {
	Movie.findOneAndRemove({ _id : req.params.id }, function(err, movie) {
		if(err) {
			res.json("Movie id not exist");
		}
		else{
			res.json(movie);  
		}
	});
});

//Updating movie
router.put('/updateMovie/:name', function(req, res) {
	var temp = req.params.name;
	Movie.findOne({Title: temp}, function(err, movie) {
		if(err) {
			return res.send("Movie id not exist, not possible to update");
		}
		
		for(prop in req.body) {
			movie[prop] = req.body[prop];
		}
		
		//save the movie
		movie.save(function(err) {
			if(err) {
				return res.send("data not possible to save");
			}
			
			res.json(movie);
		});
	});
});


module.exports = router;
