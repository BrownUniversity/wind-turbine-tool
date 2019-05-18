var f = require('./formulas');
var fs = require('fs');


var num_simulations = 5;


function simulate() {
	/* Input Parameters */
	var input = {
		blade_len: f.random(20,80),
	  wind_v0: f.random(3.6, 24.6),
	  altitude: f.random(0, 10000),
	  height:  f.random(20, 200)
	}

	/* Calculated Values */
	var wind_velocity = f.wind_velocity(input.wind_v0, input.height);
	var temperature = f.temp_at(input.altitude);
	var air_pressure = f.air_pressure(temperature);
	var sweep_area = f.blade_sweep_area(input.blade_len);
	var air_density = f.air_density(air_pressure, temperature);
	var power = f.power(air_density, sweep_area, wind_velocity);

	var output = {
		wind_velocity: roundNumber(parseFloat(wind_velocity), 4),
		temperature: roundNumber(parseFloat(temperature), 4),
		air_pressure: roundNumber(parseFloat(air_pressure), 4),
		sweep_area: roundNumber(parseFloat(sweep_area), 4),
		air_density: roundNumber(parseFloat(air_density), 4),
		power: roundNumber(parseFloat(power), 4)
	};

	return {input, output};
}

var toPrint = []
for (var i = 0; i < num_simulations; i++) {
	toPrint.push(JSON.stringify(simulate(), null, 4));
	toPrint.push("\n");
}

fs.writeFile("output.txt", toPrint, function(err) {
    if(err) return console.log(err);
});


function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}