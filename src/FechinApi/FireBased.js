import React, {useState, useEffect } from 'react'
import axios from 'axios';

export const FireBased = () => {
    let [datas, setDatas] = useState("")

    let ClickHandler = (e) => {
        setDatas(e.target.value)

    }

    // let SubmitHandler = async (e) => {
    //     e.preventDefault()
    //   let res = await axios.get(
    //     'http://hn.algolia.com/api/v1/items/:id'
    //     ).catch((error) => {
    //         console.log(error,"Plz Enter Correct Data")
    //     })
    //     console.log(res.data)
    // }
    

    // useEffect(() => {
    //     SubmitHandler()
    // })

    let SubmitHandler = async(e) => {
        e.preventDefault()
        let results = await axios.get(
          `http://hn.algolia.com/api/v1/search?query= ${datas}`
        ).catch((error) => {
            console.log(error," wrong Data")
        })
            console.log(results.data.hits[0])
    }
    useEffect(() => {
        SubmitHandler()
    },[])

    return (
        <div>
            <form onSubmit={SubmitHandler} >
                <label>Your Data</label>
                <input type="text" name='datas' value={datas} onChange={ClickHandler}/>
                <button>CLick Me</button>
            </form>
            <h2>
                {datas}
            </h2>
        </div>
    )
}
