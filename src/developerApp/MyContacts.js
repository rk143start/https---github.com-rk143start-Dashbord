import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './MyContacts.css'
import { useNavigate } from 'react-router-dom'

export const MyContacts = () => {


    let usersData = [
        {
            id: "0",
            title: "This is My Reacts App"
        },
        {
            id: "1",
            title: "This Is an JavaScripts Data"
        },
        {
            id: "2",
            title: "My ProDucts Page"
        },
        {
            id: "3",
            title: "User Info"
        },

    ]

    let [myDats, setData] = useState(usersData)
    let [NewData, setNewData] = useState([])

    // const usersData = myDats.find((MyData1)=> 
    // MyData1.id === NewData
    // )


    let clickHandler = (id,e) =>{
        setData(myDats.map((d) =>{
            if(d.id === id){
                return {
                    ...d,
                     title: e.target.value
                }
            }else{
                return d
            }

        }))
    }

    let ChnageHandler = () => {
        setNewData([...NewData,myDats])
    }
   
    let navigate = useNavigate()
    return (
        <div>
            <h2>This is My Contacts Componets.</h2>
            <button onClick={() => navigate(-1)}>CLick Me</button>
            <ul>
                {
                    myDats.map((d) => <li key={d.id}>
                        <input type="text" name='d.title' value={d.title} onChange={(e) => clickHandler(d.id,e)} />
                         <button onClick={() => ChnageHandler(d.id)} >Choose Data</button></li> )
                }
            </ul>
            <div>
                {
                    myDats.map((d) =>  <h3>{d.title}</h3> )
                }
            </div>
            <div>
                <h2>{NewData.title}</h2>
            </div>
            <nav className='MyDatas'><br />
            <NavLink to="JavaScripts">JavaScripts</NavLink>
            <NavLink to="Reactas">Reactas</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
