$(document).ready(function(){
	$('body').append('<button class="button-up"/>');

	$('.button-up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000);
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('.button-up').addClass('active');
		}
		
		else{
			$('.button-up').removeClass('active');
		}
	});
});