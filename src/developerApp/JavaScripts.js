import React from 'react'
import { useNavigate } from 'react-router-dom'

export const JavaScripts = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h2>This is My JavaScripts page</h2>
            <button onClick={() => navigate("MyContacts")}>{"->"}</button>
        </div>
    )
}
