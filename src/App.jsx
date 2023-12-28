import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Menu from './components/Menu'
import Testimomnal from './components/Testimomnal'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    <Menu/>
    <Testimomnal/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
