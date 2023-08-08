import React, { useEffect } from 'react';
import { ApiPetition } from '../functions/fetchFunction';
import SetDate from './SetDate';

export const ApiMars = ({marsData, setMarsData}) => {

  useEffect(() => {
    ApiPetition({isMars: true, stateToChange: setMarsData})
  }, []);

  return (
    <>
      {marsData  && marsData.photos && marsData.photos.length > 0 &&
      // Esta parte de arriba, sólo esta, la he sacado con ayuda de ChatGPT
      // me estaba volviendo loco para saber que ocurría.
      // Pero ahora ya entiendo, que al ser un array de objetos debo indicar por cual empezar
      // y en caso de que no exista ni una sola imagen, que no se cargue entonces la info
      // Esto que explico es así?? confirmar profes porfa.
       (<div className='div_content'>
          <p className='second_title'>{marsData.photos[0].camera.full_name}</p>
          <img className="api_img_rover" src={marsData.photos[0].img_src} alt={marsData.photos[0].camera.full_name} />
          <p className='pic_day'>Image Dated: {marsData.photos[0].earth_date}</p>
          <p className='api_info'>Status of Rover: {marsData.photos[0].rover.status}</p>
          <SetDate />
        </div>
      )}
    </>
  );
};

export default ApiMars;
