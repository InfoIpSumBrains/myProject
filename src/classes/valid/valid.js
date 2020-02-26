$(document).ready(function() {
	$('#button').click(function () {
		$('#button').attr('type', 'submit');

		var reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		
		if($('#email').val() == '') {
			$('#email').css({
				'border' : '1px solid red',
			});

			$('#form').css({
				'position': 'relative',
				'display' : 'inline-block'
			});

			$('#email').before('<span class="valid"></span>');

			$('.valid').text('Поле пустое. Введите e-mail.');

			$('#button').attr('type', 'button');
		}

		else if(reg.test($('#email').val()) == false){
			$('#email').css({
				'border' : '1px solid red',
			});

			$('#form').css({
				'position': 'relative',
				'display' : 'inline-block'
			});

			$('#email').before('<span class="valid"></span>');

			$('.valid').text('Некорректный e-mail. Введите правильный e-mail.');

			$('#button').attr('type', 'button');
		}
	});

	$('#email').focus(function() {
		if ($(this).val() == '' || $(this).val() != ''){
			$(this).css({
				'border' : '1px solid #4F699B'
			});

			$('.valid').remove();
		}
	});
});