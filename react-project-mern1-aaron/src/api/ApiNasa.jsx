import React, { useEffect, useState } from 'react';
import { today } from '../components/CurrentDate';

const ApiNasa = () => {
  const [apiInfo, setApiInfo] = useState(null);

  useEffect(() => {
    const NASA_URL = "https://api.nasa.gov/";
    const NASA_API_KEY = "Cv26rEXaDRpS2GDm5J2E2qYKXpGWT7O4Tn6YchRu";
    const url = `${NASA_URL}planetary/apod?date=${today}&api_key=${NASA_API_KEY}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('La consulta realizada no es válida');
        }
        return response.json();
      })
      .then(data => {
        setApiInfo(data); // Guardar la información en el estado
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <>
      {apiInfo && (
        <div>
          <p>{apiInfo.title}</p>
          <img src={apiInfo.url} alt={apiInfo.title} />
          <p>{apiInfo.explanation}</p>
        </div>
      )}
    </>
  );
};

export default ApiNasa;
