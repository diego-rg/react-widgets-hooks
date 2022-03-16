import React, { useState } from "react";

const Accordion = ({ items }) => {
  //Hook para estado
  const [activeIndex, setActiveIndex] = useState(null);

  //facemos unha helper function para poñer a lóxica separada e evitar ter todo o código onda o render
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    //Usamos un fragmento en vez de div para evitar que o css de semantic ui nos poña 2 border
    //onClick={() => onTitleClick(index)}> fai que solo se active co click. Con onClick={onTitleClick} activaríase todo ao renderizar
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems} <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
