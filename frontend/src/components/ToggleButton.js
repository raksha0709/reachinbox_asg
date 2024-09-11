import React from "react";
import "./ToggleButton.css";

function ToggleButton({ toggleDarkMode, darkMode }) {
  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
