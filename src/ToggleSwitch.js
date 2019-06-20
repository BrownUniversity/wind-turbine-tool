import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch(props) {
	return (
		<div className="toggle-switch">
			<label htmlFor="">Label</label>
			<input className="toggle-input" type="checkbox" />
		</div>		
		);
}

export default ToggleSwitch;