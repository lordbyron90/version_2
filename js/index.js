$(document).ready(function(){


	//masonry
	var $container = $('#container');

  	$container.isotope({
    masonry: {
      columnWidth: 255,
      gutterWidth: 20
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

    console.log("originalY:", originalY);


	$(window).on('scroll', function(event) {
    	var scrollTop = $(window).scrollTop();	
		var topDistance = 0;

		if (scrollTop < originalY){
			console.log("topDistance 1: ",topDistance);
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