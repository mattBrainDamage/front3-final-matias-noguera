import React, { useEffect } from 'react'

import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const [char, setChar]  = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  const url = 'https://jsonplaceholder.typicode.com/users/'+id


  useEffect(()=>{

    fetch(url)
    .then(res => res.json())
    .then(data => {setChar(data)
    setLoading(false)})


  }, [])

  return (
    <div>
      { loading ? 'Cargando...' : <>
        <img src='../../public/dentista.jpg'  alt="doctor" />
        <h4>Id: {char.id}</h4>
        <h1>Nombre: {char.name}</h1>
        <h2>{`Ciudad:  ${char.address.city}`}</h2> 
        <h3>Nombre:{char.name}</h3>

        <h4>E-mail: {char.email}</h4>
        <h4>Tel: {char.phone}</h4>
      </>}
    </div> 
  )
}

export default Detail