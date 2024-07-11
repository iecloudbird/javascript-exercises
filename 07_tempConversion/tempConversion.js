const convertToCelsius = function (fahrenheit) {
  if (isNaN(fahrenheit)) {
    return "ERROR"
  } else {
    let result = (fahrenheit - 32) * 5 / 9;
    return Math.round(result * 10) / 10;
  }
};

const convertToFahrenheit = function (celsius) {
  if (isNaN(celsius)) {
    return "ERROR"
  }
  else {
    let result = (celsius * 9 / 5) + 32;
    return Math.round(result * 10) / 10;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
