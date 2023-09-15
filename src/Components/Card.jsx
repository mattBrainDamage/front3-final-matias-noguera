import React from 'react'
import { Link } from  'react-router-dom'
import { useCharStates } from '../Context/Context'



/*
/dentist/:id
Donde mostrarán en detalle la información de cada dentista (nombre, email, teléfono, website).
Cada card renderizada en la ruta /home debe ser un link hacia esta dirección.

*/

const Card = ({char}) => {


  const {dispatch} = useCharStates()

  const AddFav = () => {
    dispatch({type: 'ADD_FAV', payload: char})
  }

  return (
    <div>
        <Link to = {`/detail/${char.id} `}>
         <h3>{char.name}</h3>
         <h4>{char.email}</h4>
         <h4>{char.phone}</h4>
        </Link>
        <button onClick = {AddFav}>⭐</button>

    </div>
  )
}

export default Card



/*  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }*/