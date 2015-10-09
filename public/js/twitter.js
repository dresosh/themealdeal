$(function (){
  var socket = io();

  socket.on( 'connect', function() {
    console.log( 'Connected!' );
	event.preventDefault();
    var search_term = "#mealdeal";
    socket.emit( 'updateTerm', search_term );
	console.log( 'Searching for: ' + search_term );
  });



  socket.on( 'tweets', function( tweet ) {
	  console.log(tweet);
    var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.name + ' </span><span class="username">@' +tweet.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    var test = '<img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div><span>' + tweet.name + ' </span><span>@' +tweet.screen_name + '</span></div><div"><span class="text">' + tweet.text + '</span></div>';
    var newHtml = '<div class="tweets"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div><span>' + tweet.name + ' </span><span>@' +tweet.screen_name + '</span></div><div"><span class="text">' + tweet.text + '</span></div></div>';

	var newTest = '<div class="tweets"><img class="twitImg" src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div class="message-container"><p class="topP">' + tweet.name + '</p><p>' + tweet.text + '</p></div></div>'


	var oldTest = '<div class="tweets"><img class="twitImg" src="' + tweet.user_profile_image + '" class="avatar pull-left"/></div>';
    $( '.tweetBox' ).prepend( newTest );
  });



  // $(document).on('click', function(){
  //   event.preventDefault();
  //   var search_term = "obama";
  //   socket.emit('updateTerm', search_term);
  // });

  // socket.on('updatedTerm', function(searchTerm) {
  //   $('h1').text("Twitter is searching for "+ searchTerm);
  //   console.log(searchTerm);
  // });

});
