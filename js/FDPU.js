
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel.carousel-slider');
    var options = {
      dist: 0,
      numVisible:5,
      indicators: true,
      fullWidth: true,
      duration: 200
    }
    var instances = M.Carousel.init(elems, options);
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });