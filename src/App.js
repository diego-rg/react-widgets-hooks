import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

  return (
    <div className="ui segment">
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
