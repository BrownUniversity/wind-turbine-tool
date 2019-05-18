/* Formulas */

/*  v_2 = v_1 * z^n
*
* 	v_1 : initial wind velocity
* 	  z : elevation (20-200m)
*			n : 0.13 (constant)
*/
module.exports.wind_velocity = function(v_1, z) {
	var n = 0.13;

	return v_1 * Math.pow(z, n);
}

/* 	  T = T_s − (a * z)
*
*		T_s : temperature at sea level assume 293°K
*			a : altitude (0-10000m)
* 		z : atmospheric lapse rate 0.0065 K/m
*/
module.exports.temp_at = function(a) {
	var T_s = 293,
			z = 0.0065;

	return T_s - (a * z);
}

/* 	  P = P_s (T/T_s)^{-g/(a*R)}
*
*		  g : gravitational acceleration 9.8m/s^2
*			R : air gas constant 287 J/kgK
* 		a : atmospheric lapse rate 0.0065 K/m
*			T : temperature at altitude
* 	T_s : temperature at sea level
*   P_s : pressure at sea level 101,300 Pa
*/
module.exports.air_pressure = function(T) {
	var g = 9.8,
			R = 287,
			a = 0.0065,
			T_s = 293,
			P_s = 101300;

	return P_s * Math.pow(T / T_s, -5.25);
}

/* 	  S = PI * L^2
*
*			L : blade length (20-80m)
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