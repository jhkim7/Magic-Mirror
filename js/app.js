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
			html = '<h4 id="city">'+weather.city+', '+weather.region+'</h4>';
			html += '<h1 id="temp"><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h1>';      
			$("#weather").html(html);

			$("#day1-day").html('Today');
			$("#day1-icon").html('<i class="forecast-icon icon-'+ weather.code +'"></i>');
			$("#day1-temp").html(weather.high + '&deg;'+weather.units.temp+ ' / '+weather.low + '&deg;'+weather.units.temp );
			
			$("#day2-day").html('Tomorrow');
			$("#day2-icon").html('<i class="forecast-icon icon-'+ weather.forecast[1].code +'"></i>');
			$("#day2-temp").html(weather.forecast[1].high + '&deg;'+weather.units.temp+ ' / '+weather.forecast[1].low + '&deg;'+weather.units.temp );
			
			$("#day3-day").html(weather.forecast[2].day);
			$("#day3-icon").html('<i class="forecast-icon icon-'+ weather.forecast[2].code +'"></i>');
			$("#day3-temp").html(weather.forecast[2].high + '&deg;'+weather.units.temp+ ' / '+weather.forecast[2].low + '&deg;'+weather.units.temp );
			
			$("#day4-day").html(weather.forecast[3].day);
			$("#day4-icon").html('<i class="forecast-icon icon-'+ weather.forecast[3].code +'"></i>');
			$("#day4-temp").html(weather.forecast[3].high + '&deg;'+weather.units.temp+ ' / '+weather.forecast[3].low + '&deg;'+weather.units.temp );
			
			$("#day5-day").html(weather.forecast[4].day);
			$("#day5-icon").html('<i class="forecast-icon icon-'+ weather.forecast[4].code +'"></i>');
			$("#day5-temp").html(weather.forecast[4].high + '&deg;'+weather.units.temp+ ' / '+weather.forecast[4].low + '&deg;'+weather.units.temp );
			
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
});