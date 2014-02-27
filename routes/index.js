var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	 res.render('index', {
  		'grid': false, 
  		'projects': projects
  	});
};


exports.alternateView = function(req, res){
  	res.render('index', {
  		'grid': false, 
  		'projects': projects
  	});
};


exports.gridView = function(req, res){
  	res.render('index', {
  		'grid': true, 
  		'projects': projects
  	});
};


