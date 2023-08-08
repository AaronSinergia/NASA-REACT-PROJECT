import React from 'react';
import { ApiPetition } from '../functions/fetchFunction';

export const SetDate = ({ setApiInfo, setMarsData }) => {
  const DataForSelectedDate = async (selectedDate) => {

    try {
      ApiPetition({isMars: false, stateToChange: setApiInfo, selectedDate: selectedDate})
      ApiPetition({isMars: true, stateToChange: setMarsData, selectedDate: selectedDate})
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
