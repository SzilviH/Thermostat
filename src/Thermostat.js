function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function (n) {
  n ? this._temperature += n : this._temperature ++;
};
