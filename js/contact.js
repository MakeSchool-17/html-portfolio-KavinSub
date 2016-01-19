$(document).ready( function(){
	$('form').submit(function(e){
		e.preventDefault();
		$.ajax({
		    url: "//formspree.io/kavin.a.subramanyam@gmail.com", 
		    method: "POST",
		    data: { 
		    	email: $('email').val(),
		    	message: $('message').val()
		    },
		    dataType: "json"
		}).error(function(jqXHR, status, error){
			alert('Error while submitting.');
		}).success(function(data, status, jqXHR){
			alert('Successfully submitted.');
			$('form').find('.email, .message').val('');
		});
	});
});

