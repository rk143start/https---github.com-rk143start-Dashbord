import './testomonials.css'
import {useEffect, useState} from 'react'

export const Testomonials = () => {

    let [datas, setDats]= useState(["React js","Developer","Frelancer"])

    let getData = () => {
        setTimeout(() => {
            setDats(datas.map((d) =>  d))
            console.log("sdhvbdv")
        });
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <div className='tostomonial' id='testomonials'>
           <div className='left'>
             <img src="assets/Screenshot .png" alt="" />
            </div>
           <div className='right'>
            <div className='info'>
                  <h3>Hiii i am Ram</h3>
                  <h2>Freelancer Devloper</h2>
                  <h3>Devolper :- <span  style={{color: "red"}}>{datas.reverse().join(", ")}</span></h3>
            </div>
           </div>
        </div>
    )
}
