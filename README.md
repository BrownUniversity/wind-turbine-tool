# Wind Turbine Tool

Tool for calculating the energy output of a wind turbine given a number of different parameters.

![screenshot](https://user-images.githubusercontent.com/492003/136448160-81d5ccfa-beb2-4cc5-ad2e-f0bb898069d4.jpg)

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

$`
\Large P = \frac{\rho A v^3}{2}
`$

* $`\rho`$ - [air density](#air-density) (see formula below)
* $`A`$ - [blade sweep area](#blade-sweep-area) (see formula below)
* $`v`$ - wind speed: between 3.6 m/s (8mph) and 24.6 m/s (55mph)

### Air density

$`\Large
\rho = \frac{p}{RT}
`$

* $`p`$ - [air pressure](#air-pressure) (see formula below)
* $`R`$ - air gas constant 287 J/kgK
* $`T`$ - [temperature at altitude](#temperature-at-altitude) (see formula below)

### Blade sweep area

$`\Large
S = \pi L^2
`$

* $`L`$ - Blade length: between 20 m and 80 m

### Air pressure

$`\Large
P = P_s(\frac{T}{T_s})^\frac{-g}{\alpha R}
`$

* $`g`$ - gravitaional acceleration 9.8 $`m/s^2`$
* $`R`$ - air gas constant 287 J/kgK
* $`\alpha`$ - atmospheric lapse rate 0.0065 K/m
* $`T`$ - temperature at altitude
* $`T_s`$ - temperature at sea level
* $`P_s`$ - pressure at sea level 101,300 Pa.

*The exponent $`\frac{g}{\alpha R}`$ is constant at -5.25*

### Temperature at altitude

$`\Large
T = T_s - \alpha z
`$

* $`T_s`$ - temperature at sea level assume 293°K (20°C)
* $`\alpha`$ - altitude: between 0 and 10,000 m
* $`z`$ - atmospheric lapse rate 0.0065 K/m

### Wind speed at tower height

$`
\Large v_w = v_r (\frac{h}{h_r})^\alpha
`$

* $`v_r`$ - wind velocity at reference height
* $`v_w`$ - wind velocity with effect of wind shear (after calculation)
* $`h`$ - height of turbine: between 20 and 200 m
* $`h_r`$ - reference height (10 m)
* $`\alpha`$ - Hellman exponent (0.3)
