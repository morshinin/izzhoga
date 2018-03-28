// Sticky sidebar
// $(document).ready(function(){
//   $("#sticker").sticky({
//   	topSpacing:5,
//   	wrapperClassName: 'sidebar',
//   	bottomSpacing: 150
//   });
// });
$(window).resize(function() {
        var windowWidth = $(window).width();
        
        if (windowWidth > 768) {
          stick();
        }
        else {
          unstick();
        }
      });

      function stick() {
        $("#sticker").sticky({
          topSpacing: 10,
          responsiveWidth: true,
          bottomSpacing: 150
        });
      }

      function unstick() {
        $('#sticker').unstick();
      }