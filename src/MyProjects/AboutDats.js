import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const AboutDats = () => {
    return (
        <div>
           <h2>This ia my About Page</h2>
           <nav>
              <NavLink to="NewProduct">NewProduct</NavLink>||
              <NavLink to='PriceNew'>PriceNew</NavLink>
           </nav>
            <Outlet />
        </div>
    )
}
