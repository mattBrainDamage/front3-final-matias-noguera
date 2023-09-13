import axios from 'axios'
import { createContext, useContext, useState, useReducer, useEffect } from "react";

const CharStates = createContext()

const Context = ({children}) => {

    const [chars, setChars] = useState([])

    const [favs, setFavs] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(()=>{

        axios(url)
        .then(res => setChars(res.data))
        .catch(err => console.log(err))

    }, [])

    return(
        <CharStates.Provider value={{chars, favs, setFavs}}>
            {children}
        </CharStates.Provider>

    )

}

export default Context

export const useCharStates = () => useContext(CharStates)
