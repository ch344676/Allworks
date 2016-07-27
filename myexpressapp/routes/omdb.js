var express = require('express');
var movie = require('node-movie');
var router = express.Router();

var list = [];

movie('xmen', function (err, data) {
	list.push({'xmen' : data});
});
 movie('Godzilla', function (err, data) {
    list.push({'Godzilla' : data});
});
movie('troy', function (err, data) {
    list.push({'troy' : data});
});


router.get('/insert/:name', function(req, res, next){
	movie(req.params.name, function (err, data){
	var name = req.params.name;
    list.push({name : data});
	});
	res.json({name : "Entered"});
});

router.get('/update/:name', function(req, res, next){
	var name = req.params.name;
    list[name] = list[0].
	res.json({name : "updated"});
});

router.get('/read/:name', function(req, res, next){
	var name = req.params.name;
	res.json({name : list.name});
});

router.get('/read', function(req, res, next){
	res.json({"Movie list" : list});
});

router.get('/delete/:name', function(req, res, next){
	var name = req.params.name;
    list.pop(name);
	res.json({name : "deleted"});
});

module.exports = router;