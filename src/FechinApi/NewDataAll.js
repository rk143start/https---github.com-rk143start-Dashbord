import axios from 'axios';
import React, { useState } from 'react'

export const NewDataAll = () => {
    let [datas, setData] = useState("");
    let [itemsUSer, setItems] = useState("")

    let ChangeHandler = (e) => {
        setData(e.target.value)
    }

    let SubmitHandler = async (e) => {
        e.preventDefault() 
        let results = await axios.get(
            `http://hn.algolia.com/api/v1/items/:${datas}`
        ).catch((error) => {
            console.log(error, "Wrong Data")
        })
        console.log(results);
        setItems(datas)
    } 

    return (
        <div>
            <form onSubmit={SubmitHandler}>
            <input
             type="text"
             name='datas'
             value={datas}
             onChange={ChangeHandler}
             />
             <button>Click</button>
            </form>
            <h2>{datas}</h2>
            <h1>{itemsUSer}</h1>
        </div>
    )
}