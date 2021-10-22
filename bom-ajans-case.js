$('.container').slick({
    infinite: false,
    slidesToShow: 6.5,
    slidesToScroll: 3,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1
      }
    }
  ]
    });