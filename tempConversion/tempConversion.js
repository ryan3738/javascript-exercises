const ftoc = function(farenheit) {

  let celcius = Math.round((farenheit - 32) * 5 / 9 * 10) / 10
  return celcius

};

const ctof = function(celcius) {
  // [°F] = [°C] × 9⁄5 + 32
  let farenheit = Math.round((celcius * 9 / 5 + 32)*10) /10
return farenheit
};

console.log(ftoc(100));
console.log(ctof(-10));

module.exports = {
  ftoc,
  ctof
};
