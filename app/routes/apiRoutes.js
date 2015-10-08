var express 			= require( 'express' ),
	apiRouter 			= express.Router(),
	apiController		= require( '../controllers/apiController' );


apiRouter.route( '/deals' )
	.get(apiController.deals)

apiRouter.route( '/users' )
	.get(apiController.users)

apiRouter.route( '/vendors' )
	.get(apiController.vendors)

// apiRouter.route( '/vendors' )
// 	.get(apiController.vendors)


//route middleware to make sure a user is logged in as admin
function isAdmin( req, res, next ) {
	//if authenticated move on
	if ( req.isAuthenticated() )
		return next();

	res.redirect( '/' );
}

module.exports = apiRouter
