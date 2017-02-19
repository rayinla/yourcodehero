$(document).ready(function(){

	$(window).scroll(function(){
	    if($(this).scrollTop() > 1){
	      $('div.layout-header').addClass('sticky');  
	    }
	    else{
	      $('div.layout-header').removeClass('sticky');
	    }
	  });

	  $('.back-end').on('mouseover', function(){
	   $('.front-end').siblings('div.line_left').addClass('line_active')
	    $('.front-end').siblings('div.line_right').addClass('line_thin')
	  })
	  
	 $('.back-end').on('mouseout', function(){
	   $('.front-end').siblings('div.line_left').removeClass('line_active')
	   $('.front-end').siblings('div.line_right').removeClass('line_thin')
	  })

	$('.front-end').on('mouseover', function(){
	   $('.front-end').siblings('div.line_right').addClass('line_active')
	   $('.back-end').siblings('div.line_left').addClass('line_thin')
	  })
	  
	 $('.front-end').on('mouseout', function(){
	   $('.front-end').siblings('div.line_right').removeClass('line_active')
	    $('.back-end').siblings('div.line_left').removeClass('line_thin')
	  })

	$('.follow').on("click", function(e){
		e.preventDefault()
		var scrollPosition = 0
		console.log($(document).width())
		if ($(document).width() <= 980) {
			scrollPosition = 320
		}
		else if ($(document).width() > 980 && $(document).width() < 1100){
		 	scrollPosition = 350 
		 }
		 else if ($(document).width() < 1294){
		 	scrollPosition = 420
		 }
		 else if ($(document).width() > 1294 && $(document).width() < 1400){
		 	 console.log('last', scrollPosition = 480)
		 }
		 else if ($(document).width() > 1400){
		 	scrollPosition = 550
		 }

		 $('body').animate({scrollTop:scrollPosition},'slow' ) 
	  		return false; 
	})

	$('.about').on("click", function(e){
		e.preventDefault()
		if ($(window).scrollTop() > 0){
			var aboutPosition = $('.layout-content_about')[0].offsetTop - 120
			console.log(aboutPosition)
		
		}else{
			var aboutPosition = $('.layout-content_about')[0].offsetTop - 200
			console.log(aboutPosition)	
		}
		$('body').animate({scrollTop:aboutPosition},'slow' ) 
		return false; 	
	})

	$('.portfolio').on("click", function(e){
		 if ($(window).scrollTop() > 0){
		 		var portfolioPosition = $('.layout-content_portfolio')[0].offsetTop - 100
		 }else{
		 		var portfolioPosition = $('.layout-content_portfolio')[0].offsetTop - 180
		 }
		 console.log("port", portfolioPosition)
		 $('body').animate({scrollTop:portfolioPosition},'slow' ) 
	  		return false; 
	})

	$('.stories').on("click", function(e){
		 if ($(window).scrollTop() > 0){
		 		var storiesPosition = $('.layout-content_stories')[0].offsetTop - 100
		 }else{
		 		var storiesPosition = $('.layout-content_stories')[0].offsetTop - 180
		 }
		 $('body').animate({scrollTop:storiesPosition},'slow' ) 
	  		return false; 
	})

	$('.brand').on("click", function(e){
		$('body').animate({scrollTop:0}, 'slow')
	})


});
  
  
