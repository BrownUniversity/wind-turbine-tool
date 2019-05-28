import React from 'react';
import {calculateTurbinePower} from './turbine.js';
import InputField from './InputField.js';

class PowerCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      windVelocity: 10,
      towerHeight: 30,
      bladeLength: 20,
      elevation: 40
    }

    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({
      [event.target.name]: +event.target.value
    });
  }

  calculatePower() {
		const powerInWatts = calculateTurbinePower(this.state.windVelocity, this.state.towerHeight, this.state.bladeLength, this.state.elevation);
    return (powerInWatts/1000).toLocaleString(undefined, { maximumFractionDigits: 0 });
  }
  
  render() {
    return (
      <form onChange={this.formUpdate}>
        <InputField 
          name="bladeLength" 
          min="20"
          max={Math.min(80, this.state.towerHeight)}
          value={this.state.bladeLength} 
					label="Blade length" 
					unit="m"
          onChange={this.update}
        />
        <InputField 
          name="windVelocity" 
          min="0"
          max="24.6"
          value={this.state.windVelocity} 
          label="Wind velocity" 
					unit="m/s"
          onChange={this.update}
        />
        <InputField 
          name="altitude" 
          min="0"
          max="10000"
          value={this.state.altitude} 
          label="Altitude" 
					unit="m"
          onChange={this.update}
        />
				<InputField 
          name="towerHeight" 
          min={Math.max(20, this.state.bladeLength)}
          max="200"
          value={this.state.towerHeight} 
					label="Tower height" 
					unit="m"
          onChange={this.update}
        />
        <h3 className="results">{this.calculatePower()}</h3>
      </form>
    )
  }
}


export default PowerCalculator;