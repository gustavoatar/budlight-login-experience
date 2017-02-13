$(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var scrolltrigger = 0.95;
	var percentageScrolled= (wintop/(docheight-winheight))*(100);

	console.log('wintop='+wintop);
	console.log('docheight='+docheight);
	console.log('winheight='+winheight);
	console.log(wintop+'=='+(docheight-winheight));
	console.log(wintop==(docheight-winheight));
	console.log(percentageScrolled);

	if (percentageScrolled >= 18) {
		$(".holder-canvas").addClass('grow');
		$("#expand").addClass('hide hidemobile');	
		$("#collapse").removeClass('hide hidemobile');
	} else if(percentageScrolled < 18){
		$(".holder-canvas").removeClass('grow');
		$("#expand").removeClass('hide hidemobile');	
		$("#collapse").addClass('hide hidemobile');	
	}
}); 
jQuery(document).ready(function($){
    $(".player").mb_YTPlayer();
	$('ul.cards').on('click', function(){
		$(this).toggleClass('transition')
	});

	$('ul.card-stacks').on('click', function(){
		$(this).toggleClass('transition');
	});
	
	$('.map.one').on('click', function(){
		$('.pin-info').toggleClass('show');
	});	

	$('ul.cards-split').on('click', function(){
		$(this).toggleClass('transition');
		$('.overlay').toggleClass('show')
		$('.social-share').toggleClass('show')
		$('.nearest').toggleClass('hide')		
	});

	$('.refresh').on('click', function(){
		$('.map.me').removeClass('hide');
		$('.map.one').removeClass('hide').addClass('newposition-one');
		$('.map.two').removeClass('hide').addClass('newposition-two');;
		$('.map.three').removeClass('hide').addClass('newposition-three');;
		$('.map.four').removeClass('hide').addClass('newposition-four');;
		$('.map.five').removeClass('hide').addClass('newposition-five');;	
		$('.refresh').removeClass('show');
		$('.grayarea').removeClass('show');			
	});	
	
	
	
	$('.pin-info-close').on('click', function(){
		$('.map.me').removeClass('hide');
		$('.pin-info').toggleClass('show');		
	});	
	

	$('.load-more-one').on('click', function(){
		$(this).removeClass('load-more-one');
		$(this).addClass('load-more-two');
		$('.list__item:nth-child(n+6):nth-child(-n+10)').removeClass('hide-item');	
	});	
	
	$('.load-more-two').on('click', function(){
		$('.list__item:nth-child(n+10)').removeClass('hide-item');	
	});			

	$('#expand, #collapse').on('click', function(){
		$("#collapse").toggleClass('hide');	
		$("#collapse").toggleClass('hidemobile');	
		$("#expand").toggleClass('hide');	
		$("#expand").toggleClass('hidemobile');	
		$(".holder-canvas").toggleClass('grow growmobile');	
	});		
	
	$('.card-1').hover( function() {
			$(this).addClass('hover');
			$('.card-1 .share').addClass('center-move');
				}, function() {
			$(this).removeClass('hover');
			$('.card-1 .share').removeClass('center-move');
	});	

	$('ul.cards-split-delay').on('click', function(){
		$(this).toggleClass('transition');
	});
	
	$('li.card .share').on('click', function(e){
		e.stopImmediatePropagation();
		$('body').toggleClass('show')
	});
	
	$('.delivery').on('click', function(e){
		e.stopImmediatePropagation();
		$('.overlay').toggleClass('showhigher');
		$('.partner').toggleClass('show')
	});	
	
	$('.dropdown').on('click', function(){
		$(this).toggleClass('open');
		$('.dropdown .expansion').toggleClass('show');
	});	
	
	$('.copy-code').on('click', function(){
		$('.copy-code i').removeClass('fa-files-o');
		$('.copy-code i').addClass('fa-check');	
		$(this).html('Copied');
		$(this).toggleClass('copied');
	});		
	
	$('.close-delivery').on('click', function(e){
		e.stopImmediatePropagation();
		$('.overlay').toggleClass('showhigher');
		$('.partner').toggleClass('show')
	});	
	
	$('.close-social').on('click', function(e){
		e.stopImmediatePropagation();
		$('ul.cards-split').toggleClass('transition');
		$('.overlay').toggleClass('show')
		$('.social-share').toggleClass('show')
		$('.nearest').toggleClass('hide')
	});			

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top }, 500, 'easeInOutQuad');
			event.preventDefault();
		});
	});	
	
	$(function() {
		$('a.specs').bind('click', function(f) {
		var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 500, 'easeInOutQuad');
			$('.specifications').addClass('show-specs');
		f.preventDefault();
		});
	});			

// 	$(".edit-shown, .edit-location-map").click(function(){
// 		$(".tab ul.tabs li.edit a").trigger("click");
// 	return false;
// 	});

	
	//tabs
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').on('click', function(g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);  
});