
// Opening page timeout

setTimeout(function () {
  document.getElementById('open').style.display='none';
}, 3000);

//change background color 

// setInterval(
//   function () {
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#"+randomColor;
//   },1000);

// Opening nav on hover timeout


var hovering = function(){
  $("hamburger").show("new-nav", { direction: "right" }, 1000);
};

var leaving = function(){
  $("hamburger").hide("new-nav", { direction: "left" }, 1000);
};

$("#hamburger").hover(hovering, leaving);



/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "70px";
  }


document.querySelector('.hide-item')
.addEventListener('click', () => alert('hidden item still triggers events'));

// function mobileNav(){
//   document.getElementById("main").style.marginTop = "70px";
// }

// function closemobileNav() {
//   document.getElementById("main").style.width = "0";
// }

var w = window.matchMedia("(max-width: 767px)")

// if(w.matches){
// function activateMobile(){
//       var x = document.getElementById("main");
//       if (x.style.marginTop === "400px") {
//         x.style.marginTop = "0px";
//       } else {
//         x.style.marginTop = "400px";
//       }
//     }
  

// Create a media condition that targets viewports at least 768px wide

  function activateMobile(){
      var x = document.getElementById("main-mobile");
      if (x.style.marginTop === "400px") {
        x.style.marginTop = "1px";
      } else {
        x.style.marginTop = "400px";
      }
    }






// function mobileNav() {
//   var x = document.getElementById("main");
//   if (x.style.marginTop === "400px") {
//     x.style.marginTop = "0px";
//   } else {
//     x.style.marginTop = "400px";
//   }
// }



// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }


//   $.noConflict();
// jQuery(document).ready(function($) {
//   $('.menu-toggle').on('click', function() {
//     $('ul').slideToggle();
//     $(this).toggleClass('open');
//   });
// });