import React from "react";
import {convert} from './turbine.js';
import "./InputField.css";

function units(type, system) {
  if(type === "length") {
    if(system === "metric") {
      return "m";
    } else if(system === "us"){
      return "ft";
    }
  } else if(type === "speed"){
    if(system === "metric") {
      return "m/s";
    } else if(system === "us"){
      return "mph";
    }
  }
  return "";
}

function InputField(props){
  let value = props.system === "us" ? convert(props.value, props.unit, props.system) : props.value;

  return (
    <label htmlFor={props.name} className="input-field">
      <p className="slider-text">
        <span class="label">{props.label} </span> 
        <span className="value">{value}<span className="unit"> {units(props.unit, props.system)}</span></span>
      </p>
      <input id={props.name} name={props.name} type="range" {...props} />
    </label>
  );
}

export default InputField;