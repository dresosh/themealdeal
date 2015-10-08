var express 			= require( 'express' ),
	adminRouter 		= express.Router(),
	User 				= require( '../models/user' ),
	passport 			= require( 'passport' ),
	bodyParser 			= require( 'body-parser' );
	adminController		= require( '../controllers/adminController' );





adminRouter.route( '/' ) // displays and adds to all deals
	.get( adminController.index );
	

module.exports = adminRouter