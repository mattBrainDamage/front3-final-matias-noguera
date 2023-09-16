import React from 'react'
import { Link } from "react-router-dom";
import { useCharStates } from '../Context/Context'
import '../assets/Navbar.css'




const Navbar = () => {


  const {dispatch} = useCharStates();

    const toggleTheme = () => {
      dispatch({ type: "SWITCH_THEME" });
    };




  return (
    <nav  className="navbar">
        <Link to = {'/'}>Home</Link>
        <Link to = {'/favs'}>Favs</Link>
        <Link to = {'/contact'}>Contact</Link>

        <button onClick={toggleTheme}>Cambiar Tema </button>
    </nav>
  )
}

export default Navbar

