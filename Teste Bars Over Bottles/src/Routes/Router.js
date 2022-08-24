import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categoria from '../Pages/Categoria'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Produto from '../Pages/Produto'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path='/categoria/:id' element={<Categoria />}></Route>
                <Route path='/produto/:id' element={<Produto/>}></Route>
                <Route path='/*' element={<ErrorPage />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}
