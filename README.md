# Wind Turbine Tool

Tool for calculating the energy output of a wind turbine given a number of different parameters.

## Scope

### Input parameters:

* Blade length (radius): between 20 and 80m
* Wind speed: 0 to 75mph (cuts out below 8 and above 55mph)
* Altitude: 0 and 10000m
* Tower height: 20 and 200m

### Output:

* Kilowatts produced
* Homes served (optional)

## Formulas
### Power

$\Large P = \frac{\rho A v^3}{2}$

* $\rho$ - air density (see formula below)
* $A$ - blade swee area (see formula below)
* $v$ - wind speed between 3.6ms (8mph) and 24.6m/s (55mph)