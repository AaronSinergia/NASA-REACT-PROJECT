import React from 'react';

export const SelectApi = ({ onChange }) => {
  return (
    <>
      <h2>Choose your API</h2>
      <select name="Choose your API" id="choose_api" onChange={onChange}>
        <option value="APOD">APOD</option>
        <option value="MARS ROVERS">MARS ROVERS</option>
      </select>
    </>
  );
};
