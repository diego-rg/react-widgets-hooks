import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  //para toggle o dropdown
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; //uso común del null en react para non renderizar nada
    }
    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="color-selection" className="label">
          Select a color
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          id="color-selection"
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
