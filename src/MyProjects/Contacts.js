import React from 'react'
import './Contact.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Contacts = () => {
    return (
        <div>
            <h2>This is my Contacts Page</h2>
              <input type="text" name=''   /><button>Click Me</button><br /><br />
            <nav className='navData'><br />
            <NavLink to="Products">Products</NavLink>|
            <NavLink to="New">New</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
