import React from 'react'
import './Links.css'
import { NavLink } from 'react-router-dom'

export const LinkData = () => {
    return (
        <>
        <nav className='MyAlllinks'>
            <NavLink className="a1"  to="/">Home</NavLink>
            <NavLink to="AboutDats">AboutDats</NavLink>
            <NavLink to="Contacts" >Contacts</NavLink>
        </nav>
        </>
    )
}
