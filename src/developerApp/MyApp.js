import React from 'react'
import { Routes, Route } from 'react-router'
import { MyData } from './MyData'
import { MyContacts } from './MyContacts'
import { MyLinks } from './MyLinks'
import {ErrorPage} from './ErrorPage'
import {LinksData} from './LinksData'
import {Reacts} from './Reacts'
import {JavaScripts1} from './JavaScripts1'
import {AboutMe} from './AboutMe'
import {JavaScripts} from './JavaScripts'
import {Reactas} from './Reactas'
// import { Route } from 'react-router-dom';

export const MyApp = () => {
    return (
        <div>
            <LinksData />
            <Routes>
                <Route path='/' element={<MyData />} />
                <Route path='MyContacts' element ={<MyContacts />}>
                <Route index element={<JavaScripts />} />
                    <Route path='JavaScripts' element={<JavaScripts />} />
                    <Route path='Reactas' element={<Reactas />} />
                </Route>
                <Route path='MyLinks' element={<MyLinks />}>
                    <Route index element={<JavaScripts1 />} />
                    <Route path='JavaScripts1' element={<JavaScripts1 />} />
                    <Route path='Reacts' element={<Reacts />}/> 
                </Route>    
                <Route path='AboutMe' element={<AboutMe />} /> 
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </div>
    )
}
