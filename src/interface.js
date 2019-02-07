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
    $('#powersaving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.powerSavingOff();
    $('#powersaving-status').text('off');
    updateTemperature();
  });
});
