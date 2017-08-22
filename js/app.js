//PRELOAD IMAGES
$.preload( 'img/codehero2.jpg',
    'img/megm.png',
    'img/runner.jpg',
    'img/social.jpg',
    'img/projects/dashboard.png',
    'img/projects/image-gallery.png',
    'img/projects/regform.png',
    'img/projects/responsive.png',
    'img/projects/video-player.png',
    'img/projects/webapp.png',
    'img/icons/css-3.svg',
    'img/icons/email.svg',
    'img/icons/html-5.svg',
    'img/icons/jquery.svg',
    'img/icons/linkedin-dark.svg',
    'img/icons/sass.svg',
    'img/icons/twitter-dark.svg'
);


//RESPONSIVE MENU
    var ham = $('#hamburger');
        
    //Hamburger Function
    ham.show();
    $('#mobile-nav').hide();
    
    ham.click(function() {
        $('#mobile-nav').slideToggle("slow");
    });
    
    
    $("#mobile-nav li a").click(function() {
        $("#mobile-nav").slideUp();
    });
    
    checkWindowWidth();
    
    //Check window to see if resized
        $(window).resize(checkWindowWidth);
        
        function checkWindowWidth() {
            var width = $(window).width();
            
            if (width <= 767) { 
                $('#hamburger').show();
                $('#mobile-nav').hide();      
                
            } else {
                $('#hamburger').hide();
                $('#mobile-nav').hide();
            }
        }


//OVERLAY

	// Add overlay, image, caption, title, button variables
	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img id='project-thumb' class='project-thumbnail' />");
	var $projTitle = $("<h3 id='project-title'>Title</h3>");
	var $caption = $("<p id='project-caption'>Caption</p>");
	var $liveButton = $("<a id='project-button' class='btn-outline-light' target='_blank'>See live<i class='fa fa-long-arrow-right' aria-hidden='true'></i></a>");
	
	// Add arrow variables
	var $nextArrow = $('<button class="next"><span class="fa fa-angle-right"></span></button>');
	var $prevArrow = $('<button class="prev"><span class="fa fa-angle-left"></span></button>');
	
	//Append image to overlay
	$overlay.append($image);
	
	//Append buttons to overlay
	$overlay.append($prevArrow);
	$overlay.append($nextArrow);
	
	//Append project title to overlay
	$overlay.append($projTitle);
	
	//Append caption to overlay
	$overlay.append($caption);
	
	//Append button to overlay
	$overlay.append($liveButton);
	
	// Append overlay to body
	$("body").append($overlay);
	
	
//PROJECTS

    //Constructor function for Projects
    
    function Project(title, thumbnail, link, caption) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.link = link;
        this.caption = caption;
    }
    
    //Array to hold projects
    var projectList = [];
    
    
    //Function add new projects to array
    
    function addProject(title, thumbnail, link, caption) {
        var newProject = new Project(title, thumbnail, link, caption);
        projectList.push(newProject);
    }

    //Projects added to array - meant to be expandable
    addProject("Let's Play","img/projects/letsplay.png","https://letsplayapp.herokuapp.com","Let's Play gives gamers a way to find and create a list of games they like and get matched with and contact other people who enjoy the same games. MERN stack: React/Redux, Node.js, Express.js, MongoDB & Mongoose; Passport, Mocha/Chai, and deployed with Heroku.");

    addProject("Moodful","img/projects/moodful.png","https://mymoodful.herokuapp.com","Moodful is way for you to track and analyze your moods while using some basic mindfulness principles via a simple interface. Built with Node.js, MongoDB & Mongoose, Jade, Passport, Mocha/Chai (testing), and deployed with Heroku.");

    addProject("Trivia Nerd","img/projects/trivia.png","https://megmatty.github.io/Trivia-Nerd/","TriviaNerd is a multiple-choice trivia game where the object is to fill the score bar by correctly answering 10 of 12 questions. At the end of the game, players receive their score along with their assigned rank. Built using JS/jQuery and the Open Trivia Database API.");

    addProject("Interactive Video Player","img/projects/video-player.png",
        "https://megmatty.github.io/Project-7-Interactive-Video-Player",
        "This video player has custom controls created with CSS and Javascript. There is a functional caption track as well as an interactive transcript which highlights the text as the video plays. The text can be clicked on to jump to the appropriate time index in the video.");
        
    addProject("Web App Dashboard","img/projects/dashboard.png","https://megmatty.github.io/Project-9-Web-App-Dashboard","This page is an example of a data dashboard for a fictional web app. It uses Charts.js to generate the charts and graphs, local storage to remember profile settings, and loops through JSON data to generate the users' lists.");
    
    addProject("Image Gallery","img/projects/image-gallery.png","https://megmatty.github.io/Project-4-Interactive-Photo-Gallery","One of my first projects written in jQuery, this image gallery will generate a lightbox on image click with previous and next buttons for navigation. It also allows you to filter images by keyword searches, such as 'snow' or 'lake'.");
    
    addProject("Registration Form","img/projects/regform.png","https://megmatty.github.io/Project-3-Online-Registration-Form","A simple but important skill in web development is making attractive and functional HTML forms. This online registration form was built for mobile, tablet, and desktop layouts, and features custom CSS dropdown menus, checkboxes, and radio buttons.");
    
    addProject("Responsive Website","img/projects/responsive.png","https://megmatty.github.io/Project-2-Responsive-Layout","Another important basic skill in web development today is responsive web design. This basic site was built mobile first and uses CSS flexbox to handle the resizing of page elements. It also uses jQuery to display a 'hamburger' menu for the smallest screens instead of the full navigation.");
    
    

    //Create Project in Overlay
        //Takes a number as parameter which is passed from the index number of the item clicked in the click handler
    function displayProject(num) {
    
           //Updates overlay text to correct info from array based on index
           var projectTitle = projectList[num].title; //take index number from click (num)
           $projTitle.text(projectTitle);
           
           var projectCaption = projectList[num].caption; 
            $caption.text(projectCaption);
            
           var projectThumb = projectList[num].thumbnail;
            $image.attr('src', projectThumb);
            
            var projectLink = projectList[num].link;
            $liveButton.attr('href', projectLink);
            
               if ( $(window).width() < 767 ) { //don't fade the caption in mobile sizes
                   $overlay.children().not($caption).hide(0).fadeIn(750);
                   $overlay.fadeIn(750); //fade in overlay
               } else {
                   $overlay.children().hide(0).fadeIn(750);
                   $overlay.fadeIn(750); //fade in overlay
               }
    }
    
    //Click handler for Projects
    $("#project-gallery li").click(function(event) { //when project item is clicked
            
            var item = $(this).index(); //store this list item index in a variable
         
    		event.preventDefault(); //prevents overlay closure prematurely
    		event.stopPropagation(); //prevents overlay closure prematurely
    
            displayProject(item);    //display the info for that matching index in the array
    });


//OVERLAY IMAGE NAVIGATION
   
    var overlayUpdate = function(move) { //function for updating the overlay when prev/next clicked
          var $galleryLength = $('#project-gallery li').length; //get length of gallery
       
          //Get the project thumbnail src currently displayed in the overlay
          var overlayThumb = $("#project-thumb").attr('src');
          
          //Find a matching project thumbnail src in the projectList array
          var $index = -1; //create the index
           
          for (var i = 0; i < projectList.length; i++) { //loop over projectList array
               if (projectList[i].thumbnail == overlayThumb) { //find the project with thumbnail src that matches the one currently displayed in the overlay
                   $index = i; //set the index to the matching project's index
                   break;
               }
          }
           
          //Redefine index as new number (+ or -) based on move argument passed from prev/next
          $index += move;
          
          //Make sure index is correct moving backward and forwards
            if ($index < 0) { //sets correct index when going backward
            $index = $galleryLength - 1;	
            } 
        
            if ($index >= $galleryLength) { //loops back to first image when end is reached
                $index = 0;	
            } 
    	
        //Pass new index number to displayProject()
        displayProject($index);

    }


//PREV_NEXT ARROW FUNCTIONS

    //When Left Arrow is clicked
    $prevArrow.click(function(event) {
    	overlayUpdate(-1); //move -1
    	return false; //keeps overlay from closing when clicking arrow
    });
    
    //When Right Arrow is clicked
    $nextArrow.click(function(event) {
    	overlayUpdate(1); //move +1
    	return false; //keeps overlay from closing when clicking arrow
    });		
    
    //Arrow keys for prev/next
    $(document).keydown(function(event) {
        if (event.which === 37) { //keycode for left arrow key
            overlayUpdate(-1); //move -1
        } else if (event.which === 39) { //keycode for right arrow key
            overlayUpdate(1); //move +1
        }
    });


//EXIT OVERLAY BY CLICKING OUTSIDE IT
    
    //	 When overlay is clicked
    	$('body').click(function(event) {
    		if ($(event.target).is($overlay)) { //don't close if overlay is clicked
    		    $overlay.show(0);
    		} else { //click on anything else, then
    		    //Hide/fade out overlay 
    		    $overlay.fadeOut(500);
    		}

    	});	   


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    