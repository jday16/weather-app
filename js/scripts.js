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
