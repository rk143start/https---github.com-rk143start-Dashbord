import axios from 'axios'
import React, { useState } from 'react'

export const AxiosDatas = () => {
    let [UserId,setUserId] = useState("")
    let [userData, setuserData] = useState("")

    let submitHandler = async(e) => {
        e.preventDefault()
        
        let response = await axios.get(
            `http://hn.algolia.com/api/v1/items/:${UserId}`
        ).catch((errro) => {
            console.log(errro, "Wrong Data")
        })
        console.log(response.datta)
        setUserId(response)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">User Data</label>
                <input type="text" name='UserId' value={UserId} onChange={(e) => setUserId (e.target.value)} />
                <br /><br />
                <label htmlFor="">User Body</label>
                <input type="text" name="userData" value={userData} onChange={(e) => setuserData(e.target.value)}/>
                <br /><br />
                <button>Submit</button>
            </form>
            <h2>{UserId}</h2>
        </div>
    )
}