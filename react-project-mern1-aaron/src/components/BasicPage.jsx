import React from 'react'

import AppBar from './AppBar'
import SetData from './SetData'
import CurrentDate from './CurrentDate'

import { ApiNasa } from '../api/ApiNasa'

const BasicPage = ({title, description}) => {
  return (
    <div className='content'>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="app_bar"><AppBar /></div>
        <div className="api_info"><ApiNasa /></div>
        <div className="set_data"><SetData /></div>
        <div className="today_date"><CurrentDate /></div>
    </div>
  )
}

export default BasicPage