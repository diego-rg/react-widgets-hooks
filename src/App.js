import "./App.css";

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JavaScript library.",
  },
  {
    title: "Why use React?",
    content: "Because its the best library!",
  },
  {
    title: "How does React Work?",
    content: "React uses reusable components.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

//items as props
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui segment">
      <button
        className="ui button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
      <h5 className={`colored-header--${selected.value}`}>Change my color!</h5>
      <hr />
      <Accordion items={items} />
      <hr />
      <Translate />
      <hr />
      <Search />
    </div>
  );
};

export default App;
