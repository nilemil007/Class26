jQuery(document).ready(function(){
	// Fade Toggle
	jQuery('#fadetoggle').click(function(){
		jQuery('#fadetoggle-1').fadeToggle('fast');
		jQuery('#fadetoggle-2').fadeToggle('slow');
		jQuery('#fadetoggle-3').fadeToggle(1000);
	});

	// Fade To
	jQuery('#fadeto').click(function(){
		jQuery('#fadeto-1').fadeTo('fast', 0.14);
		jQuery('#fadeto-2').fadeTo('slow', 0.4);
		jQuery('#fadeto-3').fadeTo(1000, 0.7);
	});

	// Slide
	jQuery('#slide').click(function(){
		jQuery('#slide-1').slideToggle(500);
		jQuery('#slide-2').slideToggle(1000);
		jQuery('#slide-3').slideToggle(2000);
	});

	// Aminate
	jQuery('#animate').click(function(){
		jQuery('#animate-1').animate({
			left: '20%',
			width: '180px',
			height: '180px',
			opacity: '.5'
		});
		jQuery('#animate-2').animate({
			left: '40%'
		});
		jQuery('#animate-3').animate({
			left: '60%',
			width: '140px',
			opacity: '.2'
		});
	});

	jQuery('#animate-two').click(function(){
		var textBox = jQuery('#animate-custom');
		textBox.animate({width: '97%'}, 1000);
		textBox.animate({height: '200px'}, 1000);
		textBox.animate({fontSize: '80px'}, 'fast');
	});

});