import React from 'react';
import {calculateTurbinePower} from './turbine.js';
import InputField from "./InputField";
import SelectInput from './SelectInput';
import TurbineVisual from './TurbineVisual.js'
import "./TurbineCalculator.css";

class TurbineCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      windVelocity: 0,
      towerHeight: 80,
      bladeLength: 30,
      altitude: 0,
      units: "metric"
    }

    this.update = this.update.bind(this);
  }

  update(event) {
    let value;

    if(event.target.type === "range") {
      value = +event.target.value;
    } else if(event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    this.setState({
      [event.target.name]: value      
    });
  }

  calculatePower() {
    try {
      const powerInWatts = calculateTurbinePower(this.state.windVelocity, this.state.towerHeight, this.state.bladeLength, this.state.altitude);
      return (
        <div className="results">
          <h2>{(powerInWatts/1000).toLocaleString(undefined, { maximumFractionDigits: 0 })}<span className="unit"> kW</span></h2>
          <h3>Output from a single turbine</h3>
        </div>
        );
    } catch( error ) {
      return error.message;
    }
  }

  render() {
    let unitsOptions = [{label: 'Metric', value: 'metric'}, {label: 'U.S.', value: 'us'}];

    return (
      <div className="turbine-calculator">
        <h1>Calculating wind power</h1>
        <TurbineVisual 
          bladeLength={this.state.bladeLength} 
          towerHeight={this.state.towerHeight}
          altitude={this.state.altitude}
          windVelocity={this.state.windVelocity}
        />
        {this.calculatePower()}
        <form className="inputs" onChange={this.formUpdate}>
          <SelectInput name="units" label="Units" value={this.state.units} options={unitsOptions} onChange={this.update}/>
          <InputField 
            name="bladeLength" 
            min="20"
            max={Math.min(80, this.state.towerHeight)}
            value={this.state.bladeLength} 
            label="Blade length" 
            unit="length"
            system={this.state.units}
            onChange={this.update}
          />
          <InputField 
            name="towerHeight" 
            min={Math.max(20, this.state.bladeLength)}
            max="200"
            value={this.state.towerHeight} 
            label="Tower height" 
            unit="length"
            system={this.state.units}
            onChange={this.update}
          />
          <InputField 
            name="altitude" 
            min="0"
            max="10000"
            value={this.state.altitude} 
            label="Altitude" 
            unit="length"
            system={this.state.units}
            onChange={this.update}
          />
          <InputField 
            name="windVelocity" 
            min="0"
            max="24.6"
            value={this.state.windVelocity} 
            label="Wind velocity" 
            unit="speed"
            step="0.2"
            system={this.state.units}
            onChange={this.update}
          />
        </form>
      </div>
    )
  }
}


export default TurbineCalculator;