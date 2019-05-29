import React from 'react';
import {calculateTurbinePower} from './turbine.js';
import InputField from './InputField.js';
import TurbineVisual from './TurbineVisual.js'
import "./TurbineCalculator.css";

class TurbineCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      windVelocity: 0,
      towerHeight: 80,
      bladeLength: 30,
      altitude: 0
    }

    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({
      [event.target.name]: +event.target.value
    });
  }

  calculatePower() {
    try {
      const powerInWatts = calculateTurbinePower(this.state.windVelocity, this.state.towerHeight, this.state.bladeLength, this.state.altitude);
      return (powerInWatts/1000).toLocaleString(undefined, { maximumFractionDigits: 0 })  + " KW";
    } catch( error ) {
      return error.message;
    }
  }
  
  render() {

    return (
      <div className="turbine-calculator">
        <h1>Calculating wind power</h1>
        <TurbineVisual />
        <h2 className="results">{this.calculatePower()}</h2>
        <form className="inputs" onChange={this.formUpdate}>
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
        </form>
      </div>
    )
  }
}


export default TurbineCalculator;