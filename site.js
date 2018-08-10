/*var slideIndex = 0;
showSlides();*/

/*function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/

$( document ).ready(function() {
    $("#container1").mousemove(function(e) {
  parallaxIt(e, ".slide1", -100);
  parallaxIt(e, "img", -30);
});
});




function parallaxIt(e, target, movement) {
  var $this = $("#container1");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}




  window.onscroll = function() {
      myFunction()
    };

    function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " nav-change";
      } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top nav-change", "");
      }
    }

    // Used to toggle the menu on small screens when clicking on the menu button
    function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }
