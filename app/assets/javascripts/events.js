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

	$('.nav li').on("click", function(e){
	  that = $(e.target)
	   that.addClass('.nav-active')
	  $('body').animate({scrollTop:500},'slow' ) 
	   return false;
	})
});
  
  
