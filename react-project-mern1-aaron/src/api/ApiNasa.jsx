import React, { useEffect } from 'react';
import { today } from '../components/CurrentDate';

export const ApiNasa = ({apiInfo, setApiInfo}) => {

  useEffect(() => {
    const NASA_API = "https://api.nasa.gov/";
    const NASA_API_KEY = "Cv26rEXaDRpS2GDm5J2E2qYKXpGWT7O4Tn6YchRu";
    const url = `${NASA_API}planetary/apod?date=${today}&api_key=${NASA_API_KEY}`;

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
        <div class='div_content'>
          <p className='second_title'>{apiInfo.title}</p>
          <img className="api_img" src={apiInfo.url} alt={apiInfo.title} />
          <p className='pic_day'>Image Dated: {apiInfo.date}</p>
          <p className='api_info'>{apiInfo.explanation}</p>
        </div>
      )}
    </>
  );
};

export default ApiNasa;
