$$(document).ready(function() {
	$('button.form-control[id^="vendorchange_"]').on('click', function (){
		console.log("goodbye")
		if($(this).html() === 'false') {
			$(this).html('true');
		} else {
			$(this).html('false');
		}
		// console.log($('#vendorchange').html())
		// if ($('#vendorchange').html() === false) {
		// 	console.log( "this works")
		// }


	});

	$('button.btn[id^="deleteuser_"]').on('click', function (){

		var id = ($($(this).parents().get(1)).children().get(0).innerHTML)
		console.log(id)
		var token = $(this).data('token');

	    $.ajax({
	        url: '/admin/users/' + id,
	        type: 'DELETE',
	        // data: {_method: 'delete', _token :token},
	        success:function(msg){
	        	console.log(msg)
	        }

		})


	})
});
