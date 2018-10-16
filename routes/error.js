'use strict';
///////////////////////////////////////////////////////////////////////
/////////////////     ERROR HANDLING ROUTINES      ////////////////////
//////////////////////////////////////////////////////////////////////

const bodyParser =  			require('body-parser')

const error = (router) => {

	router.use(bodyParser.json());
	router.use(function(err, req, res, next) {

		function logErrors (err, req, res, next) {
		  console.log("log error triggered")
		  console.log(err.message)
		  next(err)
		}
		function clientErrorHandler (err, req, res, next) {
		  console.log("client error triggered")
		  if (req.xhr) {
				res.status(500).send({ error: 'Something failed!' })
				next()
		  } else {
		    next(err)
		  }
		}
		function errorHandler (err, req, res, next) {
			console.log("error handler triggered")
			res.locals.error = err
			res.locals.error.status = err.status || 500

			if (request.app.get('env') !== 'development') {
				delete err.stack
			}

			res.locals.title = 'Error'
			// Render the error page
			res.status(err.status || 500)
			res.render('error')
		  next()
		}
		

 });
}

module.exports = error
