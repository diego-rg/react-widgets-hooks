import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  //código alternativo para esperar búsqueda 1 seg:
  //   useEffect(() => {
  //     const timerId = setTimeout(() => {
  //       setDebouncedText(text);
  //     }, 500);

  //     return () => {
  //       clearTimeout(timerId);
  //     };
  //   }, [text]);

  //   useEffect(() => {
  //     const doTranslation = async () => {
  //       const { data } = await axios.post(
  //         'https://translation.googleapis.com/language/translate/v2',
  //         {},
  //         {
  //           params: {
  //             q: debouncedText,
  //             target: language.value,
  //             key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
  //           },
  //         }
  //       );

  //       setTranslated(data.data.translations[0].translatedText);
  //     };

  //     doTranslation();
  //   }, [language, debouncedText]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    //a api require datos no query, non no body polo que i primero obxeto é vacío
    //añadimos setTimeout para que non busque cada vez que cambia o texto
    const timeoutId = setTimeout(() => {
      if (text) {
        translate();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);

  return (
    <div>
      <h3 className="ui header">{translated}</h3>
    </div>
  );
};

export default Convert;
