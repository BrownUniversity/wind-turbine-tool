/* Turbine calculation formulas */

/**
 * Calculate wind velocity at a given tower height adjusting for wind shear
 * @see {@link https://en.wikipedia.org/wiki/Wind_gradient#Wind_turbines}
 * 
 * @param {number} v_r Wind velocity (m/s) at reference height (without wind shear adjustment)
 * @param {number} h Height (m) of the wind turbine, should be between 20 and 200m
 * 
 * @returns {number} Wind velocity adjusted for wind shear
 */
function wind_velocity_at_elevation(v_r, h) {
  const a = 0.3; // Hellman exponent
  const h_r = 95; // Reference height in meters(maximum height affected by wind shear)

  // Check if tower height is within range
  checkWithinRange(h, 20, 200);

  // Check for values under reference height
  if (h < h_r) {
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
  const T_s = 293, // Temperature at sea level assumed to be 293°K (68°F)
    z = 0.0065; // Atmospheric lapse rate (K/m)

  // Check if altitude is within range
  checkWithinRange(a, 0, 10000);

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
  const g = 9.8, // Gravitational acceleration (m/s^2)
    R = 287, // Air gas constant (J/kgK)
    a = 0.0065, // Atmospheric lapse rate (K/m)
    T_s = 293, // Temperature (K) at sea level
    P_s = 101300; // Air pressure (Pa) at sea level

  const exponent = g / (a * R);
  console.log(exponent)

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
  // Check if blade length is within range
  checkWithinRange(L, 20, 80);

  return Math.PI * Math.pow(L, 2);
}

/**
 * Calculate air density from pressure and temperature.
 * 
 * @param {number} p Air pressure (Pa)
 * @param {number} T Temperature (K)
 * 
 * @returns Air density
 */
function air_density(p, T) {
  const R = 287; // Air gas constant (J/kgK)

  return p / (R * T);
}

/**
 * Calculate the power in Watts (J/s)
 * 
 * @param {number} d Air density (kg/m^3)
 * @param {number} A Blade sweep area (m^2)
 * @param {number} v Wind velocity, should be between 0 and 24.6 m/s, values below 3.6 m/s will result in no power
 * 
 * @returns {number} Power in wWtts (J/s)
 */
function power(d, A, v) {
  // Check if velocity is within range
  if( v >= 3.6 && v <= 24.6) {
    return (d * A * Math.pow(v, 3)) / 2
  } else {
    return 0;
  }
}

function convertMPHtoMPS(mph) {
  return mph * 0.44704;
}

function convertFeetToMeters(feet) {
  return feet * 0.3048;
}

/**
 * Check if a value is a number and within specified range
 * @param {number} value Value to check
 * @param {number} min Minimum value can be (inclusive)
 * @param {number} max Maximum value can be (inclusive)
 */
function checkWithinRange(value, min, max) {
  if (typeof value !== 'number') {
    throw new Error(`'${value}' is not a number.`);
  }
  if (value < min || value > max) {
    throw new Error(`'${value}' is not between ${min} and ${max}.`);
  }
}

/**
 * Calculate power of turbine in Watts (J/s)
 * 
 * @param {*} windVelocity 
 * @param {*} towerHeight 
 * @param {*} bladeLength 
 * @param {*} elevation 
 */
function calculateTurbinePower(windVelocity, towerHeight, bladeLength, elevation) {
  if( bladeLength > towerHeight) {
    throw new Error("Blade length cannot be greater than tower height.");
  }
  const temperature = temp_at(elevation);
  const airPressure = air_pressure(temperature);
  const airDensity = air_density(airPressure, temperature);
  const bladeArea = blade_sweep_area(bladeLength);
  const adjustedWindSpeed = wind_velocity_at_elevation(windVelocity, towerHeight);

  console.log(temperature, airPressure, airDensity)

  return power(airDensity, bladeArea, adjustedWindSpeed);
}

export {
  calculateTurbinePower,
  convertMPHtoMPS,
  convertFeetToMeters,
};