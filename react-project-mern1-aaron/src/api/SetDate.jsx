import React from 'react'

export const SetDate = ({setApiInfo}) => {

    const DataForSelectedDate = (selectedDate) => {
    const NASA_API = "https://api.nasa.gov/";
    const NASA_API_KEY = "Cv26rEXaDRpS2GDm5J2E2qYKXpGWT7O4Tn6YchRu";
    const APOD_URL = `${NASA_API}planetary/apod?date=${selectedDate}&api_key=${NASA_API_KEY}`;
    const MARS_URL = `${NASA_API}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${NASA_API_KEY}`;

  fetch(APOD_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      return response.json();
    })
    .then((dataDate) => {
      setApiInfo(dataDate); // Guardar la información en el estado
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });

    fetch(MARS_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      return response.json();
    })
    .then((dataDate) => {
      setApiInfo(dataDate); // Guardar la información en el estado
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
};
    const handleInput = (ev) => {
      const selectedDate = ev.target.value;
      DataForSelectedDate(selectedDate)
    };

    const today = new Date().toISOString().split("T")[0];

  
    return (
      <input type="date" onChange={handleInput} max={today} />
    );
  }

  
  export default SetDate;