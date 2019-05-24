import React from 'react';
import {calculateTurbinePower} from './turbine.js';

const InputField = (props) => {
  return (
    <div className="calculator-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name} type="number" style={{margin: "0px 10px"}} {...props} /> {props.unit}<br/>
    </div>
  )
}

class PowerCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      windVelocity: 10,
      towerHeight: 20,
      bladeLength: 30,
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
          value={this.state.bladeLength} 
					label="Blade length" 
					unit="m"
          onChange={this.update}
        />
        <InputField 
          name="windVelocity" 
          value={this.state.windVelocity} 
					label="Wind speed" 
					unit="m/s"
          onChange={this.update}
        />
        <InputField 
          name="elevation" 
          value={this.state.elevation} 
					label="Elevation" 
					unit="m"
          onChange={this.update}
        />
				<InputField 
          name="towerHeight" 
          value={this.state.towerHeight} 
					label="Tower height" 
					unit="m"
          onChange={this.update}
        />
        <h3 className="results">{this.calculatePower()} KW</h3>
      </form>
    )
  }
}


export default PowerCalculator;