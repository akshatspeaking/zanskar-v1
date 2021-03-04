
function LoadReadyResize()
{
	'use strict';
	
	
	
}


/*=============================================================================================*/
/* Load Function START Here*/
jQuery(window).on("load",function() {
	'use strict';
	
    
	
	
});
/* Load Function END Here*/
/*=============================================================================================*/

/*=============================================================================================*/
/* Ready Function START Here*/
jQuery(document).ready(function() {
	'use strict';
	
	/* Loadready Function */
	LoadReadyResize();
	/* Loadready Function */
	
	/* Nice select Function */
	//jQuery('.cus_select').niceSelect();
	/* Nice selcet Function */
	
	
	/*=====================================*/
	/* Homepage banner Slider : Start */
	jQuery('.home_slider').owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		dots:true,
		smartSpeed: 800,
    	animateOut: 'fadeInOut',
    	animateIn: 'fadeIn',		
		navText: [
			'<span aria-label="' + 'Previous' + '"></span>',
			'<span aria-label="' + 'Next' + '"></span>'
		],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	/* Homepage banner Slider : End */
	/*=====================================*/

	/*=====================================*/
	/* Homepage Client Slider : Start */
	jQuery('.client_slider').owlCarousel({
		loop:false,
		margin:0,
		nav:true,
		dots:false,
		smartSpeed: 800,
		//autoWidth:true,
		navText: [
			'<span aria-label="' + 'Previous' + '"></span>',
			'<span aria-label="' + 'Next' + '"></span>'
		],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	/* Homepage Client Slider : End */
	/*=====================================*/	
	
	/*|| Menu js ST ||*/	
	jQuery(".ham_menubtn a").on("click",function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery("body").toggleClass("show_menu");
		jQuery("body").toggleClass("scrolldesable");
	});	
	/*|| Menu js ED ||*/

	/*|| Custom Accordion ST ||*/
	jQuery(".zi_accordion h6").on("click",function(e) {
		e.preventDefault();
		jQuery(".zi_accordion h6").removeClass("active");
		jQuery(this).toggleClass("active");
		jQuery(this).parent().siblings().find(".acc-content").slideUp("fast");
		jQuery(this).parent().find(".acc-content").slideToggle("fast");
	});	
	/*|| Custom Accordion ED ||*/	
	
	jQuery(document).on('click','.navigation_main ul li a[href^="#"]:not(#home)', function (e) {
		e.preventDefault();
		jQuery(".navigation_main ul li").removeClass("active");
		jQuery(this).parent().addClass("active");		
		jQuery(".header_wapper").addClass('fixed');
		var header = jQuery(".header_wapper").outerHeight();
		jQuery('html, body').stop().animate({
			scrollTop: jQuery(jQuery(this).attr('href')).offset().top - header
		}, 1000, 'linear');
	});	
});
/* Ready Function END Here*/
/*=============================================================================================*/

var headHeight = jQuery(".header_wapper").outerHeight();
jQuery(window).scroll(function(){
	if (jQuery(window).scrollTop() >= headHeight) {
		jQuery('.header_wapper').addClass('fixed');
	}
	else {
		jQuery('.header_wapper').removeClass('fixed');
	}
	
});	


/*Counter js ST*/
var a = 0;
jQuery(window).scroll(function() {

  var oTop = jQuery('#counter').offset().top - window.innerHeight;
  if (a == 0 && jQuery(window).scrollTop() > oTop) {
    jQuery('.count h4').each(function() {
      var $this = jQuery(this),
        countTo = $this.attr('data-count');
		jQuery({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


/*=============================================================================================*/
/* Resize Function START Here*/
jQuery(window).resize(function() {
	'use strict';
	
	LoadReadyResize();
	
});
/* Resize Function END Here*/
/*=============================================================================================*/
