import React from "react";
import { useCharStates } from '../Context/Context'
import '../assets/Form.css'





const Form = () => {

  const {user, setUser, show, setShow, error, setError} = useCharStates();
  //Aqui deberan implementar el form completo con sus validaciones

  
  //Constante para verificar email
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  

  const handleSubmit = ()=>{
    if(user.fullname.length > 5 && (emailRegex.test(user.email))) {   
        setShow(true)
        setError(false)
    }
    else{setError(true)
        setShow(false)
    }
  }


  return (  
      <div className="form">
      <label>Nombre completo</label>
      <input type="text" value={user.fullname} onChange={(event)=> setUser({...user, fullname:event.target.value})}/>
      <br />
      <label>E-mail</label>
      <input type="email" value={user.email} onChange={(event)=> setUser({...user, email:event.target.value})}/>
      <br />
      
      
      <div className="divBoton">
      <button className='boton' onClick={handleSubmit} >Enviar</button>
      </div>

      {show &&  <h5>  Gracias {user.fullname}, te contactaremos a través de tu correo electrónico  </h5> }
      {error && <h5 style={{color: "red"}}  > Por favor verifique su información nuevamente. 
      El nombre debe tener una longitud mayor a 5. Verifique el formato de su email.   </h5>}

      </div>
  );
};

export default Form;
