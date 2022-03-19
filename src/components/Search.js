import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  //useEffect: executa código na situación que se desexe: ao renderizar por primeira vez, por primeira e cando rerenderiza, por primeira e cando rerender e cando hai cambios nos datos
  //o segundo argumento indica cada caso: nada, [] ou [datos]. Non pode usar async/await na súa función, polo uque hai que usar outra dentro del
  //(async () => {await axios.get(`${term}`)})(); é equivalente a creala en calquer variable e chamala ou usar promesas con then
  useEffect(() => {
    (async () => {
      await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    })();
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
