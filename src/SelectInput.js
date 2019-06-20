import React from "react";
import "./SelectInput.css";

function SelectInput(props) {
	let optionElements = props.options.map( (option) => {
		return <option value={option.value}>{option.label}</option>
	})

	return (
		<div className="select-input">
			<label htmlFor={props.name}>{props.label}</label>
			<select name={props.name} onChange={props.onChange}>
				{ optionElements }
			</select>
		</div>		
		);
}

export default SelectInput;