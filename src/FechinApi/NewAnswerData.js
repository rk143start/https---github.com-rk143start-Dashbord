import axios from 'axios'
import React,{useState} from 'react'

export const NewAnswerData = () => {
    let [datasInput, setInputs] = useState("")

    let ChangeHandler = (e) => {
        setInputs(e.target.value)

    }

    let SubmitHandler = async (e) => {
        e.preventDefault()
        let res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${datasInput}`
        ).catch((error) => {
          console.log(error, "Answer is Wrong")
        })
        console.log(res)
    }
    
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input type="text"
                name='datasInput'
                value={datasInput}
                onChange={ChangeHandler} />
                <button>Submit</button>
            </form>
        </div>
    )
}
