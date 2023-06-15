import React from 'react'
import {useState,useEffect} from 'react'
export const Timers = ({setTimers,QuestionNumber}) => {
      let [timersData, setTimersData] = useState(30)

      useEffect(() => {
        if(timersData === 0) return setTimers(true)
          let results = setInterval(() => {
            setTimersData((prev) =>  prev - 1)
          }, 1000);
          return () => clearInterval(results)
      },[setTimers,timersData])

       useEffect ( () => {
        setTimersData(30) 
       },[QuestionNumber])

    return (
        <div>
            {timersData}
        </div>
    )
}
