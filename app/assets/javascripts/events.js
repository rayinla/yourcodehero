$(document).ready(function(){
	$(window).scroll(function(){
	    if($(this).scrollTop() > 1){
	      $('div.layout-header').addClass('sticky');  
	    }
	    else{
	      $('div.layout-header').removeClass('sticky');
	    }
	  });	
});
  
  
