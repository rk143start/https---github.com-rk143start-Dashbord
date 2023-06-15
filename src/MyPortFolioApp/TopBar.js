import React from 'react'
import './topBar.css'

export const TopBar = ({colorData,setColor}) => {
    return (
        <div className='topbar'>
           <div className={'barName '+(colorData && "active1")}>         
               <div className='Mile'>
               <a href="Intro" className='logos'>RkDevolpers.</a>
                <div className='itemsContainer'>
                <span className='logo'>RkDevloper@gmail.com</span>
                </div>
                <div className='itemsContainer'>
                <span className='logo'>+919730208154 Contact</span>
                </div>
               </div>
               <div className='right'>
               <div className='allbars' onClick={() => setColor(!colorData)}>
                    <span className="line1">-</span>
                    <span className="line2">-</span>
                    <span className="line3">-</span>
                </div>
               </div>                 
           </div>
        </div>
    )
}
 


