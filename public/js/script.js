

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


});

$('button.btn[id^="deleteuser_"]').on('click', function (){

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
