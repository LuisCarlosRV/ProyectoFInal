import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import Header from './Header'
import Inicio from './Inicio'
import Escritorios from './Escritorios'
import Login from './Login'


export default function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes> 
      <Route index path="/" element={<Header/>}/>
      <Route path="/Inicio" element={<Inicio/>}/>
      <Route path="/Escritorios" element={<Escritorios/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
