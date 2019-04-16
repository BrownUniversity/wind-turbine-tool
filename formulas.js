/* Input Parameters */
var L = random(20,80),
    v0 = random(3.6, 24.6),
    alt = random(0, 10000),
    z = random(20, 200);

// Output
var v1 = wind_velocity(v0, z),
		T = temp_at(alt),
		P = air_pressure(T),
		S = blade_sweep_area(L),
		_p_ = air_density(P, T),
		kilowatts_produced = power(_p_, S, v1);


// Wind Speed at Tower Height
function wind_velocity(v0, z) {
	var N = 0.13;

	return v0 * Math.pow(z, N);
}

// Temperature at altitude
function temp_at(a) {
	var T_s = 293,
			z = 0.0065;
	return T_s - (a * z);
}

// Air Pressure
function air_pressure(T_a) {
	var g = 9.8,
			R = 287,
			a = 0.0065,
			T_s = 293,
			P_s = 101300;

	return P_s * Math.pow(T_a/T_s, 5.25);
}

// Blade sweep area
function blade_sweep_area(L) {
	return Math.PI * Math.pow(L, 2);
}

// Air density
function air_density(p, T) {
	return p / (287 * T);
}

// Power
function power(p, A, v) {
	return (p * A * Math.pow(v, 3)) / 2
}

function random(min, max) {
	return Math.floor(Math.random() * max) + min;
}