import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const PriceNew = () => {
    let Features = [
        {
            id: "1",
            title: "New Price Data"
        },
        {
            id: "2",
            title: "Takes All Data"
        },
        {
            id: "3",
            title: "Fetured Data"
        },
        {
            id: "4",
            title: "CompProducts"
        },
    ]
    
    return (
        <div> 
            <br /> <br />
            <input type="text" name='' placeholder='Enter Products Price...'/> <button>Click</button><br />

            <nav><br /> 
                <h2>This is My Peice Data Comp</h2>
            </nav>
            <ul><br />
                {
                    Features.map((s)=> <h2>{s.title}</h2>)
                }
            </ul>
            <address>
                Name: "Rameshwar Karhale" <br />
                Age: 24, <br />
                City: Hingoli Maharashtra, <br />
                pin Code: 431705 <br />
                Skills: "HTML,CSS,JavaScripts and Reacts Js"<br />
            </address><br />
            <nav><br />
            <NavLink to='JavaScripts'>JavaScripts</NavLink> ||
            <NavLink to='Reacts'>Reacts</NavLink>
            </nav><br />

            <Outlet />
        </div>
    )
}
