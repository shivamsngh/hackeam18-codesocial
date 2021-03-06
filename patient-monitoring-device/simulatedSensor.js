/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';

function Sensor(/* options */) {
  // nothing todo
}

Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}

Sensor.prototype.read = function (callback) {
  callback(null, {
    temperature: random(98, 106),
    heartRate: random(80, 120),
    respirationRate: random(8, 27)
  });
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = Sensor;
