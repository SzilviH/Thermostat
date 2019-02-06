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
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('can increase temperature by specified amount', function(){
      thermostat.up(5)
      expect(thermostat.getTemperature()).toEqual(25);
    });
    describe("when power saving mode is on", function(){
      it("doesn't increase temperature past 25 degrees", function(){
        thermostat.up(10)
        expect(thermostat.getTemperature()).toEqual(25)
      })
    })
    describe("when power saving mode is off", function(){
      it("doesn't increase temperature past 32 degrees", function(){
        thermostat.powerSavingOff()
        thermostat.up(15)
        expect(thermostat.getTemperature()).toEqual(32)
      })
    })
  });

  describe("down", function(){
    it("decreases the temperature", function(){
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(19)
    });
    it("decreases the temperature by a set amount", function(){
      thermostat.down(3)
      expect(thermostat.getTemperature()).toEqual(17)
    });
    it("can't be turned down below 10 degrees", function(){
      thermostat.down(15)
      expect(thermostat.getTemperature()).toEqual(10)
    });
  });

  describe('reset', function(){
    it('resets the temperature to 20 degrees', function(){
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('energy usage', function(){
    describe("when below 18 degrees", function(){
      it('returns low-usage', function() {
        thermostat.down(5);
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe("when below 25 degrees", function(){
      it('returns medium-usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe("when above 25 degrees", function(){
      it("returns high-usage", function(){
        thermostat.up(10);
        expect(thermostat.energyUsage()).toEqual("high-usage");
      });
    });
  });
});
