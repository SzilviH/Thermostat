function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMP = 10;
  this.powerSavingOffMaxTemp = 32;
  this.powerSavingOnMaxTemp = 25;
  this.MAX_TEMP = this.powerSavingOnMaxTemp;
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function (n) {
  n ? this._temperature += n : this._temperature ++;
  if (this.getTemperature() > this.MAX_TEMP) {
    this._temperature = this.MAX_TEMP
  };
};

Thermostat.prototype.down = function(n) {
  n ? this._temperature -= n : this._temperature --;
  if (this.getTemperature() < this.MIN_TEMP) {
    this._temperature = this.MIN_TEMP
  };
};

Thermostat.prototype.powerSavingOn = function(){
  this.MAX_TEMP = this.powerSavingOnMaxTemp
};

Thermostat.prototype.powerSavingOff = function(){
  this.MAX_TEMP = this.powerSavingOffMaxTemp
};

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this.getTemperature() < 18) {
    return 'low-usage';
  };
   if (this.getTemperature() < 25) {
     return 'medium-usage';
   }
   return 'high-usage';
};
