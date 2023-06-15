import './appMy12.css'
import {AllData} from './AllData'
import { useEffect, useState, useMemo } from 'react'
import {Timers} from './Timers'
import {Starts} from './Starts'


export const AppMy12 = () => {

    let [userName, setUserName] = useState("")
    let [QuestionNumber, setQuestionNum] = useState(1)
    let [timers, setTimers] = useState(false)
    let [earn, setEarn] = useState("$ 0")

    let Data1 = [
        {
            id: "1",
            questions: "Relaxe is a company that specilized what type of Products?",
            answers:[
                {
                    text: "phone",
                    correct: true,
                },
                {
                    text: "Watches",
                    correct: false,
                },
                {
                     text: "Gorden",
                     correct: false,
                },
                {
                    text: "Match",
                    correct: false,
               }
            ]
        },
        {
            id: "2",
            questions: "What is JavaScipts and Reacts? ",
            answers:[
                {
                    text: "Data",
                    correct: false,
                },
                {
                    text: "Titles",
                    correct: false,
                },
                {
                    text: "Height",
                    correct: true,

                },
                {
                    text: "MyInputs",
                    correct: false,
                }
            ]
        },
        {
            id: "3",
            questions: "what is Reacts oNlu?",
            answers:[
                {
                    text: "Librari",
                    correct: false,
                },
                {
                    text: "Methods",
                    correct: false,
                },
                {
                     text: "Functions",
                     correct: true,
                },
                {
                    text: "Array",
                    correct: false,
               }
            ]
        },
        {
            id: "4",
            questions: "What is And API? ",
            answers:[
                {
                    text: "Stored Data",
                    correct: false,
                },
                {
                    text: "Acusseed Data",
                    correct: false,
                },
                {
                    text: "Fetch Data",
                    correct: false,

                },
                {
                    text: "Information Data",
                    correct: true,
                }
            ]
        },
    ]

    let AllDatas = useMemo(() => [
        {id:1, amount: "$100"},
        {id:2, amount: "$200"},
        {id:3, amount: "$300"},
        {id:4, amount: "$400"},
        {id:5, amount: "$500"},
        {id:6, amount: "$600"},
        {id:7, amount: "$700"},
        {id:8, amount: "$800"},
        {id:9, amount: "$900"},
    ].reverse(),
    []
    )

    useEffect(() => {
        QuestionNumber > 1 && 
        setEarn(AllDatas.find((m) => m.id ===  QuestionNumber - 1).amount);
    },[AllDatas,QuestionNumber])

    return (
        <div className='AddedData'>
          {userName ? (     
          <>
            <h2 className="Main">
                {
                    timers ? <h1 className ='hedData'>You aren:- {earn}</h1> : (
                        <>
                <div className='data'>
                   <div className='hedsData'> <Timers setTimers = {setTimers} QuestionNumber ={QuestionNumber} /> </div>
                </div>
                <div className='hedsData2'><AllData 
                Data1 = {Data1} 
                setTimers = {setTimers}
                QuestionNumber = {QuestionNumber}
                setQuestionNum = {setQuestionNum} 
                />
                </div>
                </>
                 )}
                 </h2>
            <div className='pyrymid'>
            <ul className='listData'>
            { AllDatas.map((d) => (
               <div className='allLists1'>
                 <li className={QuestionNumber === d.id ? "spanData active" : "spanData"} 
                 onClick={() => setQuestionNum(!QuestionNumber)}>
                    <span className='span1' >{d.id}</span>
                    <span className='span1'>{d.amount}</span>
                 </li>
               </div>
               ) ) }
              </ul>
            </div>
        </>
            ) : <Starts  setUserName ={setUserName} /> }
        </div>
    )
}