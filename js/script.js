$(document).ready(function() {
  // load navbar
  $("#nav-placeholder").load("components/nav.html", function() {
    // collapse navbar when link is clicked
    $('.navbar-nav>li>a').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });
    // make sure text is under navbar, which has dynamic height
    $("#navMenu").resize(function() {
      $('#godown').height($("#navMenu").height() + 10);
    });
    if ($("#navMenu").height() > $('#godown').height()) {
      $('#godown').height($("#navMenu").height() + 10);
    }
  });
  // initialize ScrollSpy
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  });
});
