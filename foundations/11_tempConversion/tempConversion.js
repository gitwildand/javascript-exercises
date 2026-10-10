const convertToCelsius = function() {
  let num = (arguments[0] - 32) * (5/9);
  return Number(num.toFixed(1));
};

const convertToFahrenheit = function() {
  let num = (arguments[0] * 1.8) + 32;
  return Number(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
