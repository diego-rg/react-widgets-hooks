import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

//items as props
const App = () => {
  return (
    <div className="ui segment">
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
