

$('button.form-control[id^="vendorchange_"]').on('click', function (){
	console.log($(this).html())
	if($(this).html() === 'false') {
		$(this).html('true');
	} else {
		$(this).html('false');
	}
	// console.log($('#vendorchange').html())
	// if ($('#vendorchange').html() === false) {
	// 	console.log( "this works")
	// } 


	})