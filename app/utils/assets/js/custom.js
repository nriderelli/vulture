$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });



  $('.close_btn').click(function(){
    $('#sidebar').removeClass('active');
  });
  