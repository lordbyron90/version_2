// modified Isotope methods for gutters in masonry
$.Isotope.prototype._getMasonryGutterColumns = function() {
	var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
	containerWidth = this.element.width();

	this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
	// or use the size of the first item
	this.$filteredAtoms.outerWidth(true) ||
	// if there's no items, use size of container
	containerWidth;

	this.masonry.columnWidth += gutter;

	this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
	this.masonry.cols = Math.max(this.masonry.cols, 1);
};

$.Isotope.prototype._masonryReset = function() {
	// layout-specific props
	this.masonry = {};
	// FIXME shouldn't have to call this again
	this._getMasonryGutterColumns();
	var i = this.masonry.cols;
	this.masonry.colYs = [];
	while (i--) {
		this.masonry.colYs.push(0);
	}
};

$.Isotope.prototype._masonryResizeChanged = function() {
	var prevSegments = this.masonry.cols;
	// update cols/rows
	this._getMasonryGutterColumns();
	// return if updated cols/rows is not equal to previous
	return (this.masonry.cols !== prevSegments);
};


$(document).ready(function(){


	//masonry
	var $container = $('#container');

  	$container.isotope({
    masonry: {
      columnWidth: 255,
      gutterWidth: 20
    }
  	});

  	//overlayed menu
      $('.burger_menu').on('click', function() {
      	var _this = $(this);
          $('.rainbow_container').toggleClass('animateOverlay');
          $('.main_header').css('height','auto');
          _this.toggleClass('open');
      })


    //follow_scroll

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
		    }, 250, 'swing');



		});  

    }

    
});