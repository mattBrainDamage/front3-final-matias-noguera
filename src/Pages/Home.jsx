import React from 'react'
import Card  from '../Components/Card'
import { useCharStates } from '../Context/Context'
import '../assets/Home.css'
import "../assets/Dark.css"
import "../assets/Light.css"


/* /home	
Donde tendrán que renderizar una card por cada dentista devuelto por la API.
 */


const Home = () => {

    const {state} = useCharStates()


    const themeClass = state.theme;

    return (
      <main className={themeClass}>     
      <div className='container'>
        {state.chars.map(char => <Card char={char} key={char.id} />)}
      </div></main>

    )
   
}

export default Home