import axios from 'axios'
import React from 'react'
import {useState} from 'react'


export const NewDatas = () => {
    let [inputsData,setInputs] = useState("")

    let ChangeHandler1 = (e) => {
        setInputs(e.target.value)
    }

    let SubmitHandler = async (e) => {
        e.preventDefault()
        
        let responce = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${inputsData}`
        ).catch((ans) => {
           console.log(ans,"its Error Data only Wrong answer")
        })
         console.log(responce)

    }
    return (
        <div>
            <form  onSubmit={SubmitHandler}>
                <label htmlFor="">UserName</label>
                <input type="text"
                 name="inputsData"  
                 value={inputsData} 
                 onChange={ChangeHandler1}  />
                <button >Submit</button>
            </form>
        </div>
    )
}
