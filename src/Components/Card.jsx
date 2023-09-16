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
    <div className="card">
        <Link to = {`/detail/${char.id} `}>
        <img src="../../public/dentista.jpg"  alt="doctor" />
         <h3>Nombre:{char.name}</h3>
         <p>E-mail: {char.email}</p>
         <p>Tel: {char.phone}</p>
        </Link>
        <button onClick = {AddFav}>⭐</button>

    </div>
  )
}

export default Card

