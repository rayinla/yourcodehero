$(document).ready(function(){

	$(window).scroll(function(){

	    if($(this).scrollTop() > 1){
	      $('header.layout-header').addClass('sticky');
	      
	    }
	    else{
	      $('header.layout-header').removeClass('sticky');      
	    }
	  });


		if($(this).scrollTop() < 1){
	      $('.nav li').on('mouseover', function(){
	      	$(this).addClass('js-nav-hover-top')
	      })
	      $('.nav li').on('mouseout', function(){
	      	$(this).removeClass('js-nav-hover-top')
	      })
	    }
	    else if($(this).scrollTop() > 1) {
           $('.nav li').on('mouseover', function(){
	      	$(this).addClass('js-nav-hover-bar')
	      })
	      $('.nav li').on('mouseout', function(){
	      	$(this).removeClass('js-nav-hover-bar')
	      })
	    }

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
		 if ($(window).scrollTop() > 0){
		 		var followPosition = $('.soc-list')[0].offsetTop - 100
		 }else{
		 		var followPosition = $('.soc-list')[0].offsetTop - 180
		 }
		
		 $('body').animate({scrollTop:followPosition},'slow' ) 
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

	$('.hire').on("click", function(e){
		 if ($(window).scrollTop() > 0){
		 		var storiesPosition = $('.layout-content_contact')[0].offsetTop - 100
		 }else{
		 		var storiesPosition = $('.layout-content_contact')[0].offsetTop - 180
		 }
		 $('body').animate({scrollTop:storiesPosition},'slow' ) 
	  		return false; 
	})

	$('.brand').on("click", function(e){
		$('body').animate({scrollTop:0}, 'slow')
	})


	$('.bg-politician').on("mouseover", function(){
		console.log($(this).children('div'))
		$(this).children('div').addClass('img-content-visible')
	})

	$('.bg-politician').on("mouseout", function(){
		console.log($(this).children('div'))
		$(this).children('div').removeClass('img-content-visible')
	})
});
  
  
