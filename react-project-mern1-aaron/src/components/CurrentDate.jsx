import React from 'react'

export const today = new Date(Date.now()).toISOString().slice(0, 10);

export const CurrentDate = () => {
  return (
    <p className='current_date'>Today: {today}</p>
  )
}

export default CurrentDate