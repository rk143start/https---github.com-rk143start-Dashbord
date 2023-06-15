import React from 'react'
import './NewLinks.css'
import {recipes} from './MyLinkData'
import { NavLink, Outlet } from 'react-router-dom'

export const MyLinks = () => {
    return (
        <div>
            <h2>My Favorite Foods items</h2>
          <h2>Recipe</h2>
           {
            recipes.map((d) =>  
               <div>
                 <h2>{d.name}</h2>
                 <ul>
                {
                    d.ingredients.map((data) => 
                      <p>{data}</p>
                    )
                }
               </ul>
               </div>               
            )
           }
          
          <nav className='NewLinks'>
              <NavLink to="JavaScripts1">JavaScripts1</NavLink>
              <NavLink to="Reacts">Reacts</NavLink>
          </nav>
          <Outlet />
        </div>
    )
}
