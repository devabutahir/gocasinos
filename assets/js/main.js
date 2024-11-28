"user strict";

/*Information 
	0.1 - Menu Header Bar
	0.2 - Menu Top Fixed Bar
	0.3 - Menu Mobile Bar
	0.4 - Back To Top
	0.5 - Preloader
	0.6 - Counter
	0.7 - Owl Carousel
	0.8 - Popup Video
	0.9 - Accordion
	10.0 - Countdown
	11.0 - Select
	12.0 - Nice Select
	13.0 - Wow
	14.0 - Isotope
*/

$(document).ready(function () {
	//menu header bar
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		$(".main-menu, .header-bar").removeClass("active")
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu header bar
	

	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar





	// wow animation
	new WOW().init();
	// wow animation

	//preloader
	setTimeout(function(){
		$('.bg-load').fadeToggle();
	}, 1500);
	//preloader
	
});



