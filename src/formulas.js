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
function wind_velocity_at_elevation(v_r, h) {
  const a = 0.3;  // Hellman exponent
  const h_r = 10; // Reference height (maximum height affected by wind shear)

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
function temp_at(a) {
  const T_s = 293,   // Temperature at sea level assumed to be 293°K (68°F)
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
function air_pressure(T) {
  const g = 9.8,       // Gravitational acceleration (m/s^2)
      R = 287,       // Air gas constant (J/kgK)
      a = 0.0065,    // Atmospheric lapse rate (K/m)
      T_s = 293,     // Temperature (K) at sea level
			P_s = 101300;  // Air pressure (Pa) at sea level
			
	const exponent = -g / (a * R);

  return P_s * Math.pow(T / T_s, exponent);
}

/**
 * Calculate the area that the blades of the turbine sweep (area of circle)
 * 
 * @param {number} L Length (m) of the blade, should be between 20 and 80m
 * 
 * @returns {number} Blade sweep area (m^2)
 */
function blade_sweep_area(L) {
  return Math.PI * Math.pow(L, 2);
}

/*   _p_ = p/(RT)
*
*      p : air pressure
*      R : air gas constant 287 J/kgK
*     T : temperature at altitude
*/
function air_density(p, T) {
  const R = 287;

  return p / (R * T);
}

/**
 * Calculate the power in Watts (J/s)
 * 
 * @param {number} p Air pressure (Pa)
 * @param {number} A Blade sweep area (m^2)
 * @param {number} v Wind velocity, should be between 3.6 and 24.6 m/s
 * 
 * @returns {number} Power in wWtts (J/s)
 */
function power(p, A, v) {
  return (p * A * Math.pow(v, 3)) / 2
}

/**
 * Calculate power of turbine in Watts (J/s)
 * 
 * @param {*} windVelocity 
 * @param {*} towerHeight 
 * @param {*} bladeLength 
 * @param {*} elevation 
 */
function calculateTurbinePower( windVelocity, towerHeight, bladeLength, elevation) {
  const temperature = temp_at(elevation);
  const airPressure = air_pressure(temperature);
  const bladeArea = blade_sweep_area(bladeLength);
  const adjustedWindSpeed = wind_velocity_at_elevation(windVelocity, towerHeight);
  
  return power(airPressure, bladeArea, adjustedWindSpeed);
}

export {calculateTurbinePower}