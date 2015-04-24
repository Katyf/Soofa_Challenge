$(document).ready(function() {
    $('#change').hide();
    $('#map').hide();
    $('#liquormap').hide();
    $('#hard-dates').hide();

    $('#map-btn').on('click', function(){
      console.log('map click');
      $('#timeline').hide();
      $('#change').hide();
      $('#chart-title').text('Concentration of Active Liscences by City');
      $('#map').show();
      $('#hard-dates').hide();
    });
    $('#timeline-btn').on('click', function(){
       console.log('timeline click');
      $('#map').hide();
      $('#change').hide();
      $('#chart-title').text("Timeline of Boston's Active Food Establishment and Liquor Licenses");
      $('#timeline').show();
      $('#hard-dates').hide();
    });
    $('#change-btn').on('click', function(){
       console.log('timeline click');
      $('#map').hide();
      $('#timeline').hide();
      $('#chart-title').text('Number of Liscences Issued per Year');
      $('#change').show();
      $('#hard-dates').show();
    });

});
