import React from 'react'
import Header from './Pages/Header'
import Home from './Componeds/Home.jsx'
import About from './Componeds/About'
import Contact from './Componeds/Contact'
import Menu from './Componeds/Menu'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Pages/Footer.jsx'


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/Componeds/About' element={<About/>}/>
      <Route path='/Componeds/Contact' element={<Contact/>}/>
      <Route path='/Componeds/Menu' element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}
