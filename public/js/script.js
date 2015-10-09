	$( 'button.form-control[id^="vendorchange_"]' ).on( 'click', function (){
		console.log( "goodbye" )
		if( $( this ).html() === 'false' ) {
			$( this ).html( 'true' );
		} else {
			$( this ).html( 'false' );
		}
		// console.log( $( '#vendorchange' ).html() )
		// if ( $( '#vendorchange' ).html() === false ) {
		// 	console.log( "this works" )
		// }


$('button.form-control[id^="vendorchange_"]').on('click', function (){
	var id = ($($(this).parents().get(1)).children().get(0).innerHTML)
	var text = ($($(this).parents().get(1)).children().get(3).innerText)
	var token = $(this).data;
	console.log(id)
	console.log(text)
	console.log(token)

	console.log("goodbye")
	if($(this).html() === 'false') {
		$(this).html('true');
	} else {
		$(this).html('false');
	}
	$.ajax({
		url: '/admin/users/' + id,
		type: 'PUT',
		data: {_method: 'put'},
		success:function(msg){
        console.log("ran this")
    }
	})
	// console.log($('#vendorchange').html())
	// if ($('#vendorchange').html() === false) {
	// 	console.log( "this works")
	// }
>>>>>>> upstream/master

		var id = ( $( $( this ).parents().get( 1 ) ).children().get( 0 ).innerHTML )
		console.log( id )
		var token = $( this ).data( 'token' );

	    $.ajax( {
	        url: '/admin/users/' + id,
	        type: 'DELETE',
	        // data: {_method: 'delete', _token :token},
	        success:function( msg ){
	        	console.log( msg )
	        }

		})

<<<<<<< HEAD

	})

	$( '#dealsBtn' ).on( 'click', function(){
		$( '.imageHeader' ).hide();
		// alert( 'click' )
	})


	// Google Maps
	// =================

	  var myjson;
	  $.getJSON( "../api/deals", function( json ) {
	    console.log( "json" )
	    myjson = json;
	    $( "#map" ).trigger( "json:loaded" )
	  });


	function addMarker( position, map ){
	  console.log( position.latlng )
	  //dont add for loop in here
	  var nMark = new google.maps.Marker( {
	    position: new google.maps.LatLng( position.latLng.H, position.latLng ),
	    map: map
	  })
	  console.log( nMark )
	  console.log( map )
	  //google.maps.event.addListener( nMark, 'click', function(){
	    //var infowindow = new google.maps.InfoWindow( {
	      //content: "its working"

	    //});
	    //infowindow.open( map, nMark )
	  //})
	}

	$( "#map" ).on( "json:loaded", initMap );

	function initMap() {
	  var map = new google.maps.Map( document.getElementById( 'map' ), {
	   //center: {lat: -34.397, lng: 150.644},
	    zoom: 12
	  });
	  var infoWindow = new google.maps.InfoWindow( {map: map});

	      // Try HTML5 geolocation.
	      if ( navigator.geolocation ) {
	         navigator.geolocation.getCurrentPosition( function( position ) {
	           var pos = {
	             lat: position.coords.latitude,
	             lng: position.coords.longitude
	           };

	           infoWindow.setPosition( pos );
	           infoWindow.setContent( 'Location found.' );
	           map.setCenter( pos );
	         }, function() {
	           handleLocationError( true, infoWindow, map.getCenter() );
	         });
	      } else {
	         // Browser doesn't support Geolocation
	         handleLocationError( false, infoWindow, map.getCenter() );
	      }
	      // loop through restaurants and add marker for each: addMarker( `position`, mapToPopulate )
	      var vendorMarkers = [];
	      for ( var i=0; i < ( myjson.length-1 ); i++ ) {
	        var vendorInfo = myjson[i];
	        console.log( vendorInfo.latitude, vendorInfo.longitude )
	        //var vendorPosition = new google.maps.LatLng( "34.0219", "-118.4814" )
	        var vendorPosition = new google.maps.LatLng( vendorInfo.longitude, vendorInfo.latitude );

	        var vendorMarker = new google.maps.Marker( {
	          position: vendorPosition,
	          map: map
	        });

	        vendorMarkers.push( vendorMarker );
	        //getVendorInfo( vendorInfo, vendorMarker );
	        //vendorMarker.setMap( map )
	      }
	      //console.log( vendorMarkers );
	      /*google.maps.event.addListener( map, "click", function( position ) {
	        console.log( position )
	        addMarker( position, map )
	      })*/
	        var vendorPosition1 = new google.maps.LatLng( 34.0219, -120.4814 )
	          var marker = new google.maps.Marker( {
	              position: vendorPosition1,
	                  map: map
	              });

	}



	function handleLocationError( browserHasGeolocation, infoWindow, pos ) {
	 infoWindow.setPosition( pos );
	 infoWindow.setContent( browserHasGeolocation ?
	                       'Error: The Geolocation service failed.' :
	                       'Error: Your browser doesn\'t support geolocation.' );
	}


	$('.collapsed').click('toggle', function(){
		$('.logo').css('left', '150px');
	})
=======
	var id = ($($(this).parents().get(1)).children().get(0).innerHTML)
	console.log(id)
	// var token = $(this).data('token');

    $.ajax({
        url: '/admin/users/' + id,
        type: 'DELETE',
        // data: {_method: 'delete', _token :token},
        success:function(msg){
        	console.log(msg)
        }
	})
})
>>>>>>> upstream/master
