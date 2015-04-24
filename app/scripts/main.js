$(document).ready(function() {
    $('#change').hide();
    $('#map').hide();
    $('#liquormap').hide();

    $('#map-btn').on('click', function(){
      console.log('map click');
      $('#timeline').hide();
      $('#change').hide();
      $('#chart-title').text('Concentration of Active Liscences by City');
      $('#map').show();
    });
    $('#timeline-btn').on('click', function(){
       console.log('timeline click');
      $('#map').hide();
      $('#change').hide();
      $('#chart-title').text("Timeline of Boston's Active Food Establishment and Liquor Licenses");
      $('#timeline').show();
    });
    $('#change-btn').on('click', function(){
       console.log('timeline click');
      $('#map').hide();
      $('#timeline').hide();
      $('#chart-title').text('Number of Liscences Issued per Year');
      $('#change').show();
    });

});
