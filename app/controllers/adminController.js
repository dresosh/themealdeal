var User 	= require( '../models/user.js' );

function index ( req, res ) {
//gets all deals
	User.find( function( err, users ) {
		console.log( global.user )
	if( err ) res.send ( err )
		// res.json( users )
		res.render ( 'admin_users', {users: users} );

	})
}

function show ( req, res ) {
	//gets a single user
	User.findById( req.params.user_id, function( err, user ) {
		if( err ) res.send( err )
			// res.json( user)
		console.log( req.params.user_id );
		res.render( 'admin_users_show', {user: user} );


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

function update ( req, res ) {
	//update a deal
	console.log(req.body)

	User.findById( req.params.user_id, function( err, user ) {
		
		if( err ) res.send
		console.log(user)
		if( req.body.name ) user.name 			= req.body.name
		if( req.body.email ) user.email 		= req.body.email
		if( req.body.isvendor ) {
			console.log("trying to change isvendor")
			user.local.isvendor	= req.body.isvendor
		}

		user.save( function( err, user ) {
			console.log(user)
			if( err ) res.send( err )
			res.json( {success: true, message: "User has been updated"})
		})
	})
}

module.exports = {
	index	: index,
	show	: show,
	update 	: update,
	destroy	: destroy
}