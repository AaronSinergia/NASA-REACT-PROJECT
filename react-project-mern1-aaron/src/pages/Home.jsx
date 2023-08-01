import React, { useState } from 'react'

import ApiNasa from '../api/ApiNasa'
import ApiMars from '../api/ApiMars'
import { SelectApi } from '../api/SelectApi'

import SetDate from '../api/SetDate'
import CurrentDate from '../components/CurrentDate'


export const Home = () =>{
    const [selectedApi, setSelectedApi] = useState("APOD")
    const [apiInfo, setApiInfo] = useState(null);

    const handleApiChange = (event) => {
        setSelectedApi(event.target.value);
      };
    
    return (
        <>
            <header>
            <h1 className="title">NASA HOME PAGE</h1>
            </header>
            <SelectApi className='select_api' onChange={handleApiChange}  />
            {selectedApi  === "APOD" ? <ApiNasa apiInfo={apiInfo} setApiInfo={setApiInfo} /> : <ApiMars apiInfo={apiInfo} setApiInfo={setApiInfo} />}
            <p className="astro_img_today">Astronomic Image for Today</p>
            <div className="set_data"><SetDate apiInfo={apiInfo} setApiInfo={setApiInfo}/></div>
            <div className="today_date"><CurrentDate /></div>
        </>
    );
};