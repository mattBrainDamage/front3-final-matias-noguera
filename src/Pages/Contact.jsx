import React from 'react'
import Form from '../Components/Form'
import { useCharStates } from '../Context/Context'
import '../assets/Contact.css'

const Contact = () => {
    const {state} = useCharStates();
    const themeClass = state.theme


  return (
    <div className={`container ${themeClass}`}>
      <div className='contact'>
        <div className='centered-content'>
          <p>Para consultas complete el formulario</p>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact