import React, { useState,useEffect } from 'react'
import './Registers.css'

export const RegistrantionForm = () => {
    let [info, setInfo] = useState({
           FullName: "",
           Email: "",
           passWord: ""
    });
    let [results, setReasults] = useState([])
    let [ans ,setAns] = useState("")        
   

    let ChangeHandler = (e) => {
        let {name,  value} = e.target
        setInfo({...info,[name]: value})
    }

    useEffect(() => {
        clearInterval(() => {
            <h2>{info.FullName}</h2>
        }, 1000)
    }, [info.FullName])

    let submitHandler = (e) => {
        e.preventDefault()
        setReasults([...results,info]);
        console.log(results)
        if(!FullName || !Email || !passWord){
            setAns("All fields are Mandetori")
        }else{
                setAns(`Hey ${info.FullName}, You are registerd Sucussesfully`)
        }
    }

    let {FullName , Email, passWord} = info
    return (
        <div className='AllForms'>
        <h2 className='results1'>{ans}</h2>           
        <form className='form1' onSubmit={submitHandler}>
            <div className='heads'>
                <span>Registration Form</span>
            </div>
            <div className='formData'>
                <div>
                <label htmlFor="">FullName :-</label><br />
                <input type="text" name='FullName' value={FullName} onChange={ChangeHandler} /><br />
                </div>
                <div>
                <label htmlFor="">Email:-</label><br />
                <input type="text" name='Email' value={Email} onChange={ChangeHandler} /><br />
                </div>
                <div>
                <label htmlFor="">passWord:-</label><br />
                <input type="text" name='passWord' value={passWord} onChange={ChangeHandler} /><br />
                </div>
            </div>
            <div>
            <button>Submit</button>
            </div>
        </form>
        </div>
    )
}

