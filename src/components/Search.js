import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  //useEffect: executa código na situación que se desexe: ao renderizar por primeira vez, por primeira e cando rerenderiza, por primeira e cando rerender e cando hai cambios nos datos
  //o segundo argumento indica cada caso: nada, [] ou [datos]. Non pode usar async/await na súa función, polo uque hai que usar outra dentro del
  //(async () => {await axios.get(`${term}`)})(); é equivalente a creala en calquer variable e chamala ou usar promesas con then
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    //modificamos onde chamamos á búsqueda para evitar erro debido a config da api
    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
