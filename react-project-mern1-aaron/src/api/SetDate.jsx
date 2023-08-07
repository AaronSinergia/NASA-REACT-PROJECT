import React from 'react';

export const SetDate = ({ setApiInfo, setMarsData }) => {
  const DataForSelectedDate = async (selectedDate) => {
    const NASA_API = "https://api.nasa.gov/";
    const NASA_API_KEY = "Cv26rEXaDRpS2GDm5J2E2qYKXpGWT7O4Tn6YchRu";
    const APOD_URL = `${NASA_API}planetary/apod?date=${selectedDate}&api_key=${NASA_API_KEY}`;
    const MARS_URL = `${NASA_API}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${NASA_API_KEY}`;

    try {
      const responseAPOD = await fetch(APOD_URL);
      if (!responseAPOD.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      const dataAPOD = await responseAPOD.json();
      setApiInfo(dataAPOD);
  
      const responseMars = await fetch(MARS_URL);
      if (!responseMars.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      const dataMars = await responseMars.json();
      setMarsData(dataMars);
  
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleInput = (ev) => {
    const selectedDate = ev.target.value;
    DataForSelectedDate(selectedDate);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <input type="date" onChange={handleInput} max={today} />
    </div>
  );
};

export default SetDate;
