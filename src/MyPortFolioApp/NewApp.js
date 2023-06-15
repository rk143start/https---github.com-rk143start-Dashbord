import React from 'react'
import {TopBar} from './TopBar'
import {Intro} from './Intro'
import {Contact} from './Contact'
import {Portfilo} from './Portfilo'
import {Testimonials} from './Testimonials'
import {Work} from './Work'
import {MainManu} from './MainManu'
import {MyNew} from './MyNew'
import { useState } from 'react'
import './app.css'

// import { Routes, Route } from 'react-router-dom';

export const NewApp = () => {
  let [colorData, setColor] = useState(true)
     
    return (    
       <div className='list'>
       <TopBar  colorData={colorData}  setColor={setColor}/>
       <MainManu colorData={colorData} setColor={setColor}/>
      
        <div className='allsection'>  
          <Intro/>
         <Contact/>
         <Portfilo/>
         <Testimonials/>
         <Work />
         <MyNew />  

         {/* <Routes>
          <Route path='/' element={<Intro />} />
         <Route path="Contact" element={<Contact/>}  />  
         <Route path="Portfilo" element={<Portfilo/>} />
         <Route path="Testimonials" element={<Testimonials/>} />
         <Route path="Work" element={<Work/>}/> 
         <Route path="MyNew" element={<MyNew />} />
         </Routes>   */}
         
         </div>
       </div>
    ) 
}