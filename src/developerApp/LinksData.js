import React from 'react'
import './LinksData.css'
import { NavLink } from 'react-router-dom';

export const LinksData = () => {

    return (
        <div className='AllData'>
            <NavLink to="/">MyData</NavLink>
            <NavLink to="MyContacts">MyContacts</NavLink>
            <NavLink to="MyLinks">MyLinks</NavLink>
            <NavLink to="AboutMe" >AboutMe</NavLink>
            <NavLink to="*" >ErrorPage</NavLink>
        </div>
    )
}
