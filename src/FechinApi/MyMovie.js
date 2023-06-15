import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export const MyMovie = () => {
    let [inputs, setInputs] = useState("")
    let [results, setResults] = useState([])
    
    let ChangeHandler = (e) => {
        setInputs(e.target.value)
    }

    let SubmitHandler = async (e) => {
         e.preventDefault()
         let response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${inputs}`          

         ).catch((error) => {
            console.log(error,"Wrong Data")
         }).then(() => {
            setResults(response.data.results)
            console.log(response.data.results);
         })
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
               <input type="text" name="inputs" value={inputs} onChange={ChangeHandler} />    
                <button>Submit</button>
            </form>
            <ul>
                {
                  results.map((d) =>
                   <h2>{d}</h2>
                  )
                }
            </ul>
        </div>
    )
}
