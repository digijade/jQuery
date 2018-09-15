$(document).ready(function() {
	$('.button').click(function(event) {
		$('h1').hide();
		$('h2,p').toggle();
	});
	
	$('.button2').click(function(event) {
		$('h2,p').toggle();
	});
});