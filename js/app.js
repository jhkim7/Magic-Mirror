// $(document).foundation();

// Time and Date 
document.getElementById("time").innerHTML = moment().format('h:mm a');
document.getElementById("date").innerHTML = moment().format('MMMM Do YYYY');

// Weather
$(document).ready(function() {
  $.simpleWeather({
    location: '27713',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'<br>';
      html += ''+weather.city+', '+weather.region+'<br>';
      html += ''+weather.high+'&deg;'+weather.units.temp+'/ '+weather.low+'&deg;'+weather.units.temp+'';
		
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});