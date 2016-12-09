// My Scripts
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.one.temp').text(weather.temp)
      $('.one.city').text(weather.city)
     $('.one.state').text(weather.region)
      $('.one.code').text(weather.region)
      //change background color
  $9('body').addClass('bg-'+weather.code)
      // Entire weather object
      console.log(weather);
      console.log(weather.forecast[0].code);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    
    }
  
  });


$.simpleWeather({
    location: '99352',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.two.temp').text(weather.temp)
      $('.two.city').text(weather.city)
     $('.two.state').text(weather.region)
      
      // Entire weather object
      console.log(weather);
      console.log(weather.forecast[0].code);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    
    }
  
  });


// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);    
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};
