/*************************************

Template Name: E-Commerce | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

/* ==================================
      Start WOW
===================================== */
 $(document).ready(function () {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	  
	  });
  });



/* ==================================
      Start niceScroll
===================================== */
/* $(document).ready(function () {
	$("html").niceScroll({
	  scrollspeed: "150",
	  cursorcolor: "#d13a75",
	  cursorborder: "3px solid #d13a75",
	  cursorborderradius: 0,
	  sensitiverail: true,
	  horizrailenabled: false,
	});
  });
 */
/* ==================================
      Start Navigation Bar
===================================== */
$(document).ready(function () {
	var header = $("#min-header"),
	  height = header.height(),
	  yOffset = 0,
	  triggerPoint = 100;
	$('.header-height').css('height', height + 'px');
	$(window).on('scroll', function () {
	  yOffset = $(window).scrollTop();
  
	  if (yOffset >= triggerPoint) {
		header.removeClass("animated cssanimation fadeIn");
		header.addClass("navbar-fixed-top  cssanimation animated fadeInDown");
	  } else {
		header.removeClass("navbar-fixed-top cssanimation  animated fadeInDown");
		header.addClass("animated cssanimation fadeIn");
	  }
  
	});
  });
  
  window.onload = function () {
	window.jQuery ?
	  $(document).ready(function () {
		$(".sidebarNavigation .navbar-collapse")
		  .hide()
		  .clone()
		  .appendTo("body")
		  .removeAttr("class")
		  .addClass("sideMenu")
		  .show(),
		  $("body").append("<div class='overlay-side'></div>"),
		  $(".sideMenu").addClass(
			$(".sidebarNavigation").attr("data-sidebarClass")
		  ),
		  $(".navbar-toggle, .navbar-toggler").on("click", function () {
			$(".sideMenu, .overlay-side").toggleClass("open"),
			  $(".overlay-side").on("click", function () {
				$(this).removeClass("open"), $(".sideMenu").removeClass("open");
			  });
		  }),
		  $("body").on("click", ".sideMenu.open .nav-item", function () {
			$(this).hasClass("dropdown") ||
			  $(".sideMenu, .overlay-side").toggleClass("open");
		  }),
		  $(window).resize(function () {
			$(".navbar-toggler").is(":hidden") ?
			  $(".sideMenu, .overlay-side").hide() :
			  $(".sideMenu, .overlay-side").show();
		  });
	  }) :
	  console.log("sidebarNavigation Requires jQuery");
  };
  
  



//Check the scroll position
$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		event.preventDefault();
		$(".scrollToTop").css({'transform': 'translate(0px, 0px)'});
	} else {
		$(".scrollToTop").css({'transform': 'translate(80px, 0px)'});
	}
});

//Click and scrolls top effect
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
  });


/* ==================================
      start loading 
===================================== */

// start loading 
$(window).on("load", function () {

	"use strict";
  
	// Loading Elements
  
	$(".sk-cube-grid").fadeOut(1000, function () {
  
	  // Show The Scroll
  
	  $(this).parent().slideUp(1000, function () {
  
		$(this).remove();
	  });
	});
  });






/*   $(function() {
	$(this).bind("contextmenu", function(e) {
		e.preventDefault();
	});
});  */