$(document).ready(function () {
    $("a.scroll").on('click', function (e) {
      e.preventDefault();
      var target = this.hash;
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  });
  