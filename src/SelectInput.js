import React from "react";
import "./SelectInput.css";

function SelectInput(props) {
	let optionElements = props.options.map( (option, index) => {
		return <option key={index} value={option.value}>{option.label}</option>
	})

	return (
		<div className="select-input">
			<label htmlFor={props.name}>{props.label}</label>
			<select name={props.name} value={props.value} onChange={props.onChange} >
				{ optionElements }
			</select>
		</div>		
		);
}

export default SelectInput;