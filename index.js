
// Opening page timeout

setTimeout(function () {
  document.getElementById('open').style.display='none';
}, 3000);

setTimeout(function () {
  document.getElementById('nav').style.display='none';
}, 3000);


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





//   $.noConflict();
// jQuery(document).ready(function($) {
//   $('.menu-toggle').on('click', function() {
//     $('ul').slideToggle();
//     $(this).toggleClass('open');
//   });
// });