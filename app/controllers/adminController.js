var User 	= require( '../models/user.js' );

function index ( req, res ) {
//gets all deals
	User.find( function( err, users ) {
		console.log( global.user )
	if( err ) res.send ( err )
		// res.json( users )
		res.render ( 'users', {users: users} );

	})
}

function show ( req, res ) {
	//gets a single user
	User.findById( req.params.user_id, function( err, user ) {
		if( err ) res.send( err )
			// res.json( user)
		console.log( req.params.user_id );
		res.render( 'users_show', {user: user} );


	})
}

function destroy ( req, res ) {
	//deletes a deal
	console.log(req.params)
	User.remove( {

		_id: req.params.user_id
	}, function( err, deal ) {
		if( err ) res.send( err )
		res.json( {success: true, message: "Your user was deleted!"})
	}) 
}

module.exports = {
	index	: index,
	show	: show,
	destroy	: destroy
}