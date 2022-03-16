import React, { useState } from "react";

const Accordion = ({ items }) => {
  //Hook para estado con array destructuring. activeIndex: valor do estado que cambiamos. setActiveIndex: función que cambia/controla ese valor do estado
  //Cada vez que se executa o cambio volve a renderizarse, pero o valor inicial non volve a usarse. Interactúa coa clase css active, que enseña/oculta o contido
  const [activeIndex, setActiveIndex] = useState(null);

  //facemos unha helper function para poñer a lóxica separada e evitar ter todo o código onda o render
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    //Usamos un fragmento en vez de div para evitar que o css de semantic ui nos poña 2 border
    //onClick={() => onTitleClick(index)}> fai que solo se active co click. Con onClick={onTitleClick} activaríase todo ao renderizar
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
