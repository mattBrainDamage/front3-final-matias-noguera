import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context/Context'


const Favs = () => {

    const {state, dispatch} = useCharStates()


    const themeClass = state.theme;

  return (
    <main className={themeClass} >
      <div>{state.favs.map(fav=> <Card char={fav} key={fav.id}/>)}</div>        
    </main>

  )
}

export default Favs