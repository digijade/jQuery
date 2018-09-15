$(document).ready(function() {
	$('.button1').click(function(event) {
		$('.text1').slideDown(2500);
	});  //下滑出現留言區(百葉窗)

	$('.button3').click(function(event) {
		$('.text1').slideUp(2500);
	});	//收起關閉留言區(百葉窗)

	$('.button4').click(function(event) {
	$('.text1').slideToggle(2500);
	});

});