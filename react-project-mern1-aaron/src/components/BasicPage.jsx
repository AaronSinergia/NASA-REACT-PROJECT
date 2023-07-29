import React, { useState } from 'react'

import AppBar from './AppBar'
import CurrentDate from './CurrentDate'
import Footer from './footer'

import { ApiNasa } from '../api/ApiNasa'
import SetDate from '../api/SetDate'
import { SelectApi } from '../api/SelectApi'

const BasicPage = ({title, description}) => {
  const [apiInfo, setApiInfo] = useState(null);

  return (
    <div className='content'>
        <h1 className="title">{title}</h1>
        <div className="app_bar"><AppBar /></div>
        <p className="description">{description}</p>
        <div className="api_info"><ApiNasa apiInfo={apiInfo} setApiInfo={setApiInfo}/></div>
        <div className="set_data"><SetDate apiInfo={apiInfo} setApiInfo={setApiInfo}/></div>
        <div className="today_date"><CurrentDate /></div>
        <div className='footer'><Footer /></div>
    </div>
  )
}

export default BasicPage