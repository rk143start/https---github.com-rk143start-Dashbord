import React, { useRef } from 'react'
import './appMy12.css'

export const Starts = ({setUserName}) => {

    let refData = useRef("")

    let ClickHandler = () => {
        refData.current.value &&  setUserName(refData.current.value)
    }
    return (
        <div className='inputField'>
            <input type="text" className='inputData' ref={refData} placeholder='Enter UserName' /> <br />
            <button className='usersStart' onClick={ClickHandler}>Start</button>
        </div>
    )
}
