
$(document).ready(function(){
	function img_scroll(){
		var w_w = $(window).width();
		var img_h = $('.sec4_2_left').find('img').height();
		var div_h = $('.sec4_2_left').height();
		console.log(img_h);
		if(w_w > 767){
			$(".sec4_2_left").hover(function(){
				$('.sec4_2_left>img').stop().animate({
					top: -img_h + div_h,
				},7500);
			}, function(){
				$('.sec4_2_left>img').stop().animate({
					top: 0,
				},7500);
			
			});	
		}else{
			$('.sec4_2_left').unbind('mouseenter mouseleave');
		}
	}img_scroll();

	$(window).resize(function(){
		img_scroll();
	});

});
