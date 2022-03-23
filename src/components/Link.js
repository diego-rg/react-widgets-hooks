import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
      //fix para abrir en pestaña nova con ctl+click
      if(event.metakey || event.ctrlKey) {
          return
      }
    event.preventDefault(); //evitar que recargue
    window.history.pushState({}, "", href); //Cambiar a url según o compoñente
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //Detectan que a ur cambia
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
