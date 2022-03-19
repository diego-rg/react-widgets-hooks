import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  //useEffect: executa código na situación que se desexe: ao renderizar por primeira vez, por primeira e cando rerenderiza, por primeira e cando rerender e cando hai cambios nos datos
  //o segundo argumento indica cada caso: nada, [] ou [datos]
  useEffect(() => {
    console.log("term change");
  }, [term]);

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="search-input">Enter search term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
          type="text"
          id="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
