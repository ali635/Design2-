var doc = jQuery(document);

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})
$(window).on("load",function(){
	$('.loader').fadeOut(700);
});

doc.ready(function(){

	"use strict";

    /*** scrolling animation ***/

	$('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var cssvalue = $(this.element).attr('data-animation');

			$(this.element).addClass("animated "+cssvalue);
			$(this.element).css('opacity','1').fadeIn(2000);
		  },
		  offset: '70%'
		})

	});
});