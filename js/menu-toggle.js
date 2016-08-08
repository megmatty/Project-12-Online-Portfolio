
$(document).ready(function() {
     var ham = $('#hamburger');
        
    //Hamburger Function
    ham.show();
    ham.click(function() {
        $('#nav').toggle();
    }); 
    
    checkWindowWidth();
});

$(window).resize(checkWindowWidth);

function checkWindowWidth() {
    var width = $(window).width();
    
    if (width <= 750) { 
        $('#hamburger').show();
        $('.nav').hide();      
        
    } else {
        $('#hamburger').hide();
        $('nav').show();
    }
}

//HAMBURGER MENU
//$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
//$("#nav").hide();
//$("#menu").click(function(){
//	$("#nav").slideToggle();
//});
//$("#nav a").click(function() {
//    if(window.innerWidth < 768) {
//        $("#nav").slideUp();
//    }
//});
//
//$(window).resize(function(){
//	if(window.innerWidth > 768) {
//		$("#nav").css("display", "flex").show();
//		$("#menu").hide();
//	} else {
//	    $("#nav").css("display", "block").hide();
//	    $("#menu").show();
//	}
//});
