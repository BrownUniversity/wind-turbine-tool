import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch(props) {
	return (
		<div className="toggle-switch">
			<label htmlFor={props.name}>{props.label}</label>
			<input name={props.name} className="toggle-input" type="checkbox" checked={props.value} onChange={props.onChange}/>
		</div>		
		);
}

export default ToggleSwitch;