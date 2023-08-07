import React, {useEffect} from 'react';
import { today } from '../components/CurrentDate';
import SetDate from './SetDate';

export const ApiNasa = ({apiInfo, setApiInfo}) => {

  const NASA_API = "https://api.nasa.gov/";
  const NASA_API_KEY = "Cv26rEXaDRpS2GDm5J2E2qYKXpGWT7O4Tn6YchRu";
  const APOD_URL = `${NASA_API}planetary/apod?date=${today}&api_key=${NASA_API_KEY}`;
  
  // useEffect(() => {
  //   fetch(APOD_URL)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('La consulta realizada no es válida')
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setApiInfo(data); // Guardar la información en el estado
  //     })
  //     .catch(error => {
  //       console.error('Fetch error:', error);
  //     });
  // }, []);

  return (
    <>
      {apiInfo && (
        <div className='div_content'>
          <p className='second_title'>{apiInfo.title}</p>
          <img className="api_img" src={apiInfo.url} alt={apiInfo.title} />
          <p className='pic_day'>Image Dated: {apiInfo.date}</p>
          <p className='api_info'>{apiInfo.explanation}</p>
          <SetDate />
        </div>
      )}
    </>
  );
};

export default ApiNasa;
