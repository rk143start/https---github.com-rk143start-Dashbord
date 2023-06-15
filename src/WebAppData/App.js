import './app.css'
import {Routes,Route } from 'react-router-dom';
import { useState } from 'react'
import {Testomonials} from './Testomonials'
import {Contacts} from  './Contacts'
import {Home} from './Home'
import {Intro} from  './Intro'
import {PortFilio} from './PortFilio'
import {Topbar} from './Topbar'
import {MainComp} from './MainComp'

export const App = () => {
    let [colorsdata ,setColor] = useState(false)

    return (
        <div className='app'>
         <Topbar colorsdata = {colorsdata} setColor={setColor} />
         <MainComp colorsdata ={colorsdata} setColor ={setColor} />

        <div className='resolution'>
        
         <Routes>
       <Route path='/' element={ <Testomonials />} /> 
       <Route path='Contacts' element={ <Contacts />} />
       <Route path='Home' element={ <Home /> }  />
       <Route path='Intro' element={<Intro  /> } />
       <Route path='PortFilio' element={<PortFilio />} />
       
       </Routes>
       <Testomonials />
        <Contacts />
        <Home />
        <Intro  />
        <PortFilio />
        </div>
    
        </div>
    )
}
