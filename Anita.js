$(document).ready(function() {
        $(".show-gallery").click(function() {
          $(".show-gallery").toggle();
          $(".hide-gallery").toggle();
        });
      });
      $('.Fastfood').click(function () {
        $(this).css('border', '1px solid red');
        // find any other button with a specific id, and change it back to white like
        $('button#red').css('border', '1px solid white');
      }
      $('.Drinks').click(function () {
        $(this).css('border', '1px solid red');
        // find any other button with a specific id, and change it back to white like
        $('button#red').css('border', '1px solid white');
      }
      $('.Chicken').click(function () {
        $(this).css('border', '1px solid red');
        // find any other button with a specific id, and change it back to white like
        $('button#red').css('border', '1px solid white');
      }
      $('.Rice').click(function () {
        $(this).css('border', '1px solid red');
        // find any other button with a specific id, and change it back to white like
        $('button#red').css('border', '1px solid white');
      }
      /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
Try it Yourself »
