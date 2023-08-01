import React, { useEffect } from 'react';

export const ApiMars = ({apiInfo, setApiInfo}) => {

  useEffect(() => {
    const NASA_API = "https://api.nasa.gov/";
    const NASA_API_KEY = "Cv26rEXaDRpS2GDm5J2E2qYKXpGWT7O4Tn6YchRu";
    const url = `${NASA_API}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`;

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
      {apiInfo  && apiInfo.photos && apiInfo.photos.length > 0 &&
      // Esta parte de arriba, sólo esta, la he sacado con ayuda de ChatGPT
      // me estaba volviendo loco para saber que ocurría.
      // Pero ahora ya entiendo, que al ser un array de objetos debo indicar por cual empezar
      // y en caso de que no exista ni una sola imagen, que no se cargue entonces la info
      // Esto que explico es así?? confirmar profes porfa.
       (<div class='div_content'>
          <p className='second_title'>{apiInfo.photos[0].camera.full_name}</p>
          <img className="api_img_rover" src={apiInfo.photos[0].img_src} alt={apiInfo.photos[0].camera.full_name} />
          <p className='pic_day'>Image Dated: {apiInfo.photos[0].earth_date}</p>
          <p className='api_info'>Status of Rover: {apiInfo.photos[0].rover.status}</p>
        </div>
      )}
    </>
  );
};

export default ApiMars;
