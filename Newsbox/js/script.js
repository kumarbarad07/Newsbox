$(document).ready(function () {
    $('.carousel').owlCarousel({
      items: 5,
      margin: 10,
      loop: true,
      nav: true,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
  
        992: {
          items: 3
        },
  
        1200: {
          items: 4
        },
  
        1600: {
          items: 5
        }
      }
    });
  
    
  });