import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Africaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [languaje, setLanguaje] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="translate-input">Text to translate</label>
          <input
            id="translate-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <Dropdown
        label="Select a languaje"
        selected={languaje}
        onSelectedChange={setLanguaje}
        options={options}
      />
    </div>
  );
};

export default Translate;
