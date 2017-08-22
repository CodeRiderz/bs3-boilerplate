(function(){

	// Init global DOM elements, functions and arrays
  	window.app 			 				= {el : {}, fn : {}};
	app.el['window']     				= $(window);
	app.el['document']   				= $(document);
	app.el['back-to-top'] 				= $('.back-to-top');
	app.el['html-body'] 				= $('html,body');
	app.el['animated']   				= $('.animated');
	app.el['loader']        			= $('#loader');
	app.el['mask']          			= $('#mask');
	app.el['header']          			= $('header');
	app.el['navbar-nav'] 				= $('.navbar-nav li.dropdown');

	$(function() {	
	    // Preloader
	    app.el['loader'].delay(700).fadeOut();
	    app.el['mask'].delay(1200).fadeOut("slow");   

		// Resized based on screen size
		app.el['window'].resize(function() {
			app.el['header'].unstick();
			app.el['header'].sticky({ topSpacing: 0 });			
		});	

		// fixed header
		app.el['header'].sticky({ topSpacing: 0 });

		// On hover, open drop down
	    app.el['navbar-nav'].on({
	        mouseenter: function() {
	          $(this).addClass('open');
	        }, mouseleave: function() {
	          $(this).removeClass('open');
	        }
	    });

		// fade in .back-to-top
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				app.el['back-to-top'].fadeIn();
			} else {
				app.el['back-to-top'].fadeOut();
			}
		});

		// scroll body to 0px on click
		app.el['back-to-top'].click(function () {
			app.el['html-body'].animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

		// Elements animation
		app.el['animated'].appear(function() {
			var element = $(this);
			var animation = element.data('animation');
			var animationDelay = element.data('delay');
			if(animationDelay) {
				setTimeout(function(){
					element.addClass( animation + " visible" );
					element.removeClass('hiding');
				}, animationDelay);
			} else {
				element.addClass( animation + " visible" );
				element.removeClass('hiding');
			}    			
		}, {accY: -150});

	});

})();