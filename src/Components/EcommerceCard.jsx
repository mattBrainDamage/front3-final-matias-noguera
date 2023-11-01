import React from 'react'
import { Link } from  'react-router-dom'
import { useCharStates } from '../Context/Context'


/*

/*
/dentist/:id
Donde mostrarán en detalle la información de cada dentista (nombre, email, teléfono, website).
Cada card renderizada en la ruta /home debe ser un link hacia esta dirección.



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

*/




import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function EcommerceCard({char}) {


  const {dispatch} = useCharStates()

  const AddFav = () => {
    dispatch({type: 'ADD_FAV', payload: char})
  }

  
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="../../public/dentista.jpg"  alt="doctor"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Nombre:{char.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
          E-mail: {char.email}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Tel: {char.phone}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick = {AddFav}
        >
          A favoritos
        </Button>
      </CardFooter>
    </Card>
  );
}