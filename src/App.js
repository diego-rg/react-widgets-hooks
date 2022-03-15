import React from "react";
import Accordion from "./components/Accordion";

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
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
