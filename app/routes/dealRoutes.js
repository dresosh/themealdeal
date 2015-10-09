var express 		= require( 'express' ),
	dealsController = require( '../controllers/dealsController' ),
	User 			= require( '../models/user' ),
	Deal 			= require( '../models/deal' ),
	dealRouter 		= express.Router(),
	methodOverride 	= require( 'method-override' ),
	passport 		= require( 'passport' ),
	bodyParser 		= require( 'body-parser' );

 function authenticatedUser( req, res, next ) {
 		console.log( req.user )
    // If the user is authenticated, then we continue the execution
    if ( req.isAuthenticated() ) {
        return next();
    }


    // console.log( req.isAuthenticated() );

    // Otherwise the request is always redirected to the home page
    res.redirect( '/'  );
  }


 function isVendor( req, res, next ) {
	//if authenticated move on
	if ( global.user && global.user.local.isvendor === true ){
		return next();
	}

	console.log("ends")
}

dealRouter.route( '/' ) // displays and adds to all deals
	.get( isVendor, dealsController.index )
	.post( dealsController.create )

dealRouter.route( '/:deal_id' )
	.get( dealsController.show ) //gets individual deal
	.put( dealsController.update ) //updates individual deal
	.delete( dealsController.destroy ) //deletes an individual deal


module.exports = dealRouter
