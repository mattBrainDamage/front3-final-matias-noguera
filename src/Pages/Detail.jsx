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
      <h1>{char.name}</h1>
      <h2>{`Ciudad:  ${char.address.city}`}</h2> 
      </>}
    </div> 
  )
}

export default Detail