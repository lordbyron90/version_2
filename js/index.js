$(document).ready(function(){


	var $container = $('#container'),
		item = 255;

	$container.isotope({
		itemSelector: '.item',
		masonry: {
			columnWidth: item,
			isFitWidth: true,
			gutter: 20
		}
	});



//OVERLAYED MENU
	//overlayed menu
  $('.burger_menu').on('click', function() {
  	var _this = $(this);
      $('.rainbow_container').toggleClass('animateOverlay');
      $('.main_header').css('height','auto');
      _this.toggleClass('open');
  })




//FOLLOW SCROLL

if ( $(".column_text").length ){

	var element = $(".column_text"),
		originalY = element.offset().top;

	var navHeight = $(".main_header").outerHeight();

	var topMargin = 20,
		topDistance = '';

	$(window).on('scroll', function(event) {
    	var scrollTop = $(window).scrollTop();	
		var topDistance = 0;

		if (scrollTop < originalY){
			topDistance = 0;
		}
		else{
			topDistance = scrollTop - originalY + topMargin*2 + navHeight;
		}
    
	    element.stop(false, false).animate({
        	top:topDistance
	    }, 350, 'swing');



	});  

}

    
});