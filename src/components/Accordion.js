import React from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    //Usamos un fragmento en vez de div para evitar que o css de semantic ui nos poña 2 border
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
