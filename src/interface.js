$(document).ready(function(){
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#temperature').text(thermostat.getTemperature());

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function() {
    thermostat.powerSavingOn();
    $('#powersaving-status').text('ON');
    updateTemperature();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.powerSavingOff();
    $('#powersaving-status').text('OFF');
    updateTemperature();
  });

  $("#submitButton").click(function() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2dc557bbfc28a6611fa2ed83d790ffb4&units=metric",function(result){
      $('#current-weather').text(Math.round(result.main.temp))
      $('#current-city').text(result.name)
      $('#degrees').text(' °C')

        // alert("City: "+result.city.name);
        // alert("Weather: "+ result.list[0].weather[0].description);
        });
  })
});
