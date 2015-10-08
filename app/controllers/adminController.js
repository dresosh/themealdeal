var User 	= require( '../models/user.js' );

function index ( req, res ) {
//gets all deals
	User.find( function( err, users ) {
		console.log( users )
	if( err ) res.send ( err )
		// res.json( users )
		res.render ( 'users', {users: users} );

	})
}


module.exports = {
	index	: index,
}