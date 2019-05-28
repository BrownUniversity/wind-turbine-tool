import React from "react";

function InputField(props){
  return (
    <div className="input-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name+"-slider"} type="range" style={{margin: "0px 10px"}} {...props} />
      <input name={props.name} type="number" style={{margin: "0px 10px"}} {...props} /> {props.unit}
    </div>
  );
}

export default InputField;