$(document).ready( function(){
	$('#gallery').justifiedGallery({
		rowHeight: 210,
		lastrow: 'justify',
		margins: 3,
		randomize: true
	}).on('jg.complete', function() {
		$('#gallery a').swipebox({
			//hideBarsDelay = false
		});
	});
});