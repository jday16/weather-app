//Spokane
$.simpleWeather({
    location: '99203',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
      $('.title').text(weather.title);
        
    //If this condition, show icon
        if (26>= weather.code&&3<= weather.code){
            
            $('.spokane .wi').addClass('wi-day-cloudy')
        }
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>No Weather :/ </>');
    }
  
  });

//Seattle
$.simpleWeather({
    location: '98105',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
      $('.seattle .title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>No Weather :/ </>');
    }
  
  });

/*Get Geo location*/
/*$('.geo button').click( function() {
     
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
      $('')
    // Display Icon
      $('.geo i').addClass( 'icon-' + weather.code );