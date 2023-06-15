import React, {  useState, useEffect } from 'react'
import './allData.css'

export const AllData = ({Data1,setTimers,QuestionNumber, setQuestionNum}) => {

    let [data, setData] = useState(null)
    let [selectAnsers, setSelectsAns] = useState(null)
    let [className, setClassName] = useState("allAnser")

    useEffect(() => {
        setData(Data1[QuestionNumber - 1])
        
     },[Data1,QuestionNumber]);

    let delay = (duration, callBack) => {
        setTimeout(() => {
            callBack()
        }, duration)
    }

     let clickHandler = (d) => {
        setSelectsAns(d)
        setClassName("allAnser")
        delay(3000,()=> 
        setClassName(d.correct ? "allAnser correct" : "allAnser wrong" )
        )
        delay(6000,()=>
        {
            if(d.correct){
                setQuestionNum( prev => prev + 1 )
                setSelectsAns(null)
            }else{
                setTimers(true)
            }
        }
        )
    }
 
    return (
        
        <div className='MainData'>
           
              <div>
                <h2 className='questions'> {data?.questions}</h2>
                 </div>
                 
           <div className='Answer'>
               {
                data?.answers.map((d) =>( 
              <p  className= {selectAnsers === d ? className : "allAnser"} 
              onClick={() => clickHandler(d)}>{d.id}{d.text}</p>
              ))}

           </div>
               
        </div>
    )
}