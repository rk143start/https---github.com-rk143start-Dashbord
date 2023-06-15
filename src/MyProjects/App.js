
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {Home} from './Home'
import { Contacts } from './Contacts'
import {AboutDats} from './AboutDats'
import {LinkData} from './LinkData'
import {Products} from './Products'
import {New} from './New'
import {PriceNew} from './PriceNew'
import {NewProduct} from './NewProduct'
import {JavaScripts} from './JavaScripts'
import {Reacts} from './Reacts'

export const App = () => {
    return (
        <>
            <LinkData/>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='Contacts' element ={<Contacts />}>
                    <Route index  element ={<Contacts />} />
                    <Route path='Products' element={<Products />}/>
                    <Route path='New' element={<New />} />   
                 </Route>   
                <Route path='AboutDats' element ={<AboutDats />}>
                    <Route path='NewProduct' element={<NewProduct />}/>
                    <Route path='PriceNew' element={<PriceNew />}>
                    <Route path='JavaScripts' element={<JavaScripts />} />
                    <Route path='Reacts' element={<Reacts />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}
