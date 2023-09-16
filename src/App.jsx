import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Navbar from './Components/Navbar'
import Favs from './Pages/Favs'
import Footer from './Components/Footer';
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/> 
          <Route path='/Contact' element= {<Contact/>}/>    
      </Routes>
    </>
  )
}

export default App
