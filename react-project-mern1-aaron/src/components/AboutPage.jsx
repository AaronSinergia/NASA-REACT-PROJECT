import React from 'react'

import AppBar from './AppBar'
import Footer from './footer'

const AboutPage = ({title, description}) => {
  return (
    <div className='content'>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="app_bar"><AppBar /></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse, rem deleniti optio ipsa eum atque nostrum odit et cumque officiis? Est consequatur ullam aut. Ipsum doloribus ipsa et possimus.</p>
        <div className='footer'><Footer /></div>
    </div>
  )
}

export default AboutPage