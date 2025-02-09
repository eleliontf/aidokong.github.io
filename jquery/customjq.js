

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


   $('.read-more-btn').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            var $additionalContent = $this.closest('.news__data').find('.news__additional');
            $additionalContent.slideToggle(function() {
                $this.text($additionalContent.is(':visible') ? 'Read Less' : 'Read More');
            });
        });


        $('.read-more-btn1').on('click', function(event) {
          event.preventDefault();
          var $this = $(this);
          var $additionalContent = $this.closest('.news__data1').find('.news__additional1');
          $additionalContent.slideToggle(function() {
              $this.text($additionalContent.is(':visible') ? 'Read Less' : 'Read More');
          });
      });

        $('.read-more-btn2').on('click', function(event) {
          event.preventDefault();
          var $this = $(this);
          var $additionalContent = $this.closest('.news__data2').find('.news__additional2');
          $additionalContent.slideToggle(function() {
              $this.text($additionalContent.is(':visible') ? 'Read Less' : 'Read More');
          });
      });
        $('.read-more-btn3').on('click', function(event) {
          event.preventDefault();
          var $this = $(this);
          var $additionalContent = $this.closest('.news__data3').find('.news__additional3');
          $additionalContent.slideToggle(function() {
              $this.text($additionalContent.is(':visible') ? 'Read Less' : 'Read More');
          });
      });

}); 