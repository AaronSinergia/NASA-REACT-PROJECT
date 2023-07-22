import React from 'react'
import { useState } from 'react';

const SetData = () => {
    const [date, setDate] = useState('');
  
    const handleInput = (ev) => {
      setDate(ev.target.value);
    };
  
    return (
      <input type="date" value={date} onChange={handleInput} />
    );
  }
  
  export default SetData;