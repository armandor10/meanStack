var express = require('express');
var router = express.Router();

//Used for routes that must be authenticated.
router.use(function(req, res, next){
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

  console.log('it is Authenticated ' + req.isAuthenticated());

	//allow all get request methods
	if(req.method === "GET"){
		return next();
	}
	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/#login');
});

router.route('/post')
/* GET home page. */
.get(function(req, res, next) {
  res.send({message:'TODO return all post'});
})
.post(function(req, res, next){
  res.send({message:'TODO post created'});
});

router.route('/post/:id')
.get(function(req,res){
  res.send({message:'TODO get post with id = ' + req.params.id});
})
.put(function(req,res){
  res.send({message:'TODO modify post with id = ' + req.params.id});
})
.delete(function(req,res){
  res.send({message:'TODO delete post with id = ' + req.params.id});
})

module.exports = router;
