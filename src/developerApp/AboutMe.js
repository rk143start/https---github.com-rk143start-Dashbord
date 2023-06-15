import React, { useState } from 'react'
import {MyData} from './MyData'
import { useNavigate } from 'react-router'

export const AboutMe = () => {
    let MyInfo = [{
        UserName: "",
        PassWord: ""
    }]
    let [dataInfo,setInfo] = useState(MyInfo)
    let [usersData, setData] = useState("")

    let ChnageHandle= ((e) => {
        let {name, value}= e.target
        setInfo({...dataInfo,[name]: value})
})

let MyNavigate = useNavigate()

let SubmitHandler = ((e) => {
    e.preventDefault()
    console.log([dataInfo])

    if(dataInfo.UserName === "Ram123" && dataInfo.PassWord === "12345"){
        alert("Your Anser  is Correct")
        setData(<MyData />)          
    }else{
        alert("Your ans is Wrong Plz Tri Again")
        setData("Wrong Data")
    }

})
    let {UserName,PassWord} = dataInfo

    return (
        <div>
            <h2>This is Information about Me</h2>
            <form onSubmit={SubmitHandler}>
                <div>
                <label htmlFor="">Login Name</label>
                <input type="text" name='UserName' value={UserName} placeholder='Login Id' onChange={ChnageHandle}/>
                </div>
                <div>
                    <label htmlFor="">PassWord</label>
                    <input type="text" name='PassWord' value={PassWord} placeholder="PassWord" onChange={ChnageHandle}/>
                </div>
                <button >Submit</button>
                <h2>{usersData}</h2>
            </form>
            <button onClick={() => MyNavigate("MyData")}>CLickMain</button>
        </div>
    )
}
