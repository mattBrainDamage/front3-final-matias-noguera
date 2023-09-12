import React, { useEffect } from 'react'

import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const [char, setChar]  = useState({})
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'+id


  useEffect(()=>{

    fetch(url)
    .then(res => res.json())
    .then(data => setChar(data))


  }, [])

  return (
    <div>
      <h1>{char.name}</h1>
    </div>
  )
}

export default Detail