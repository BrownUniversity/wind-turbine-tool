import React from "react";
import "./SelectInput.css";

function SelectInput(props) {
	return (
		<div className="select-input">
			<label htmlFor={props.name}>{props.label}</label>
			<select name={props.name} onChange={props.onChange}>
				<option value="metric">Metric</option>
				<option value="us">U.S.</option>
			</select>
		</div>		
		);
}

export default SelectInput;