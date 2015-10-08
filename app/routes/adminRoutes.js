var express 			= require( 'express' ),
	adminRouter 		= express.Router(),
	User 				= require( '../models/user' ),
	passport 			= require( 'passport' ),
	bodyParser 			= require( 'body-parser' );
	adminController		= require( '../controllers/adminController' );

adminRouter.route( '/users' ) // displays and adds to all deals

	.get( adminController.index );
	console.log( global.user )

adminRouter.route( '/users/:user_id' )
	
	.get( adminController.show ) //gets individual deal
	//.put( isAdmin, adminController.update ) //updates individual deal
	.delete( adminController.destroy ) //deletes an individual deal



//route middleware to make sure a user is logged in as admin
function isAdmin( req, res, next ) {
	//if authenticated move on
	if ( global.user && global.user.local.isAdmin === true ){
		return next();
	}

	console.log("ends")
}

module.exports = adminRouter