

$(document).ready(function() {
    $('.logo__main').hover(
      function() { 
        $('.logo__primary').hide();
        $('.logo__secondary').show();
      },
      function() { 
        $('.logo__primary').show();
        $('.logo__secondary').hide();
      }
    );

    $('.send__slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
  });



}); 