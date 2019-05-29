import React from "react";
import "./InputField.css";

function InputField(props){
  return (
    <div className="input-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name+"-slider"} type="range" style={{margin: "0px 10px"}} {...props} />
      <span class="value">{props.value} <span class="unit">{props.unit}</span></span>
    </div>
  );
}

export default InputField;