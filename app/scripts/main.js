$(document).ready(function() {
    $('#change').hide();
    $('#map').hide();
    $('#liquormap').hide();

    $('#map-btn').on('click', function(){
      console.log('map click');
      $('#timeline').hide();
      $('#change').hide();
      $('#map').show();
    });
    $('#timeline-btn').on('click', function(){
       console.log('timeline click');
      $('#map').hide();
      $('#change').hide();
      $('#timeline').show();
    });
    $('#change-btn').on('click', function(){
       console.log('timeline click');
      $('#map').hide();
      $('#timeline').hide();
      $('#change').show();
    });

});
