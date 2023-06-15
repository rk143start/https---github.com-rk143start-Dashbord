import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Reacts = () => {
    // let navigate = useNavigate()
    return (
        <>
            <h2>This is my Reacts Page</h2>
            <Link to="MyData"  >MyData</Link>
            {/* <button onClick={() => navigate("MyData")}>CLick MyData</button> */}
            <Outlet />
        </>
    )
}
