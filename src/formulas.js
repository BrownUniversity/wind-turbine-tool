/* Formulas */

/**
 * Calculate wind velocity at a given tower height adjusting for wind shear
 * @see {@link https://en.wikipedia.org/wiki/Wind_gradient#Wind_turbines}
 * 
 * @param {number} v_r Wind velocity (m/s) at reference height 10m (without wind shear adjustment)
 * @param {number} h Height (m) of the wind turbine, should be between 20 and 200m
 * 
 * @returns {number} Wind velocity adjusted for wind shear
 */
module.exports.wind_velocity_at_elevation = function(v_r, h) {
	var a = 0.3;  // Hellman exponent
	var h_r = 10; // Reference height (maximum height affected by wind shear)

	// Check for values under reference height
	if( h < h_r ) {
		return v_r * Math.pow((h / h_r), a);
	} else {
		//Otherwise return input velocity
		return v_r;
	}
}

/**
 * Calculate the temperature at an altitude given temperature at sea level of 293° Kelvin.
 * 
 * @param {number} a Altitude (m), range should be between 0 and 10,000m
 * 
 * @returns {number} Temperature (K) at altitude
 */
module.exports.temp_at = function(a) {
	var T_s = 293,   // Temperature at sea level assumed to be 293°K (68°F)
			z = 0.0065;  // Atmospheric lapse rate (K/m)

	return T_s - (a * z);
}

/**
 * Calculate the air pressure at altitude 
 * 
 * @param {number} T Temperature (K) at altitude
 * 
 * @returns {number} Pressure (Pa) at altitude
 */
module.exports.air_pressure = function(T) {
	var g = 9.8,       // Gravitational acceleration (m/s^2)
			R = 287,       // Air gas constant (J/kgK)
			a = 0.0065,    // Atmospheric lapse rate (K/m)
			T_s = 293,     // Temperature (K) at sea level
			P_s = 101300;  // Air pressure (Pa) at sea level

	return P_s * Math.pow(T / T_s, -5.25);
}

/**
 * Calculate the area that the blades of the turbine sweep (area of circle)
 * 
 * @param {number} L Length (m) of the blade, should be between 20 and 80m
 * 
 * @returns {number} Blade sweep area (m^2)
 */
module.exports.blade_sweep_area = function(L) {
	return Math.PI * Math.pow(L, 2);
}

/* 	_p_ = p/(RT)
*
*			p : air pressure
*			R : air gas constant 287 J/kgK
* 		T : temperature at altitude
*/
module.exports.air_density = function(p, T) {
	var R = 287;

	return p / (R * T);
}

/* 	  P = (p * A * v^3) / 2
*
*			p : air pressure
*			A : blade sweep area
* 		v : wind speed (3.6-24.6m/s)
*/
module.exports.power = function(p, A, v) {
	return (p * A * Math.pow(v, 3)) / 2
}




// helper function to generate random values in a range
module.exports.random = function(min, max) {
	return Math.floor(Math.random() * max) + min;
}