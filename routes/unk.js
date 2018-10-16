'use strict';

//////////////////////////////////////////////////////
////////      process 404 http message        ///////
////////////////////////////////////////////////////

const bodyParser =  			require('body-parser')
const path =          		require('path');

const unk = (router) => {

	router.use(bodyParser.json());
	router.use(function(req, res, next) {

	if (res.headersSent) return next()   // exit if headers had been sent

	console.log("--------Send 404 Message--------")

	  res.status(404);

	  if (req.accepts('html')) {
	  		res.redirect('/404')
	  		return
			}

	  if (req.accepts('json')) {
	    res.send({ error: 'Not found' });
	    return;
	  }

	  res.type('txt').send('Not found');

})
}

module.exports = unk
