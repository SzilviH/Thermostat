describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('up', function(){
    it('can increase temperature', function(){
      (thermostat.up())
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('can increase temperature by specified amount', function(){
      (thermostat.up(5))
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });
});
