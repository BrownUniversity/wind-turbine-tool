import React from "react";
import "./InputField.css";

function InputField(props){
  return (
    <div className="input-field">
      <p className="slider-text">
        <label htmlFor={props.name}>{props.label}</label> 
        <span className="value">{props.value}<span className="unit"> {props.unit}</span></span>
      </p>
      <input name={props.name} type="range" {...props} />
    </div>
  );
}

export default InputField;