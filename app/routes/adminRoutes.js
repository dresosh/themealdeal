var express 			= require( 'express' ),
	adminRouter 		= express.Router(),
	User 				= require( '../models/user' ),
	passport 			= require( 'passport' ),
	bodyParser 			= require( 'body-parser' );
	adminController		= require( '../controllers/adminController' );





adminRouter.route( '/' ) // displays and adds to all deals
	.get( adminController.index );

adminRouter.route( '/:user_id' )
	.get( adminController.show ) //gets individual deal
	// .put( adminController.update ) //updates individual deal
	// .delete( adminController.destroy ) //deletes an individual deal



module.exports = adminRouter