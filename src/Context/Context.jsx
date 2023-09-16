import axios from 'axios'
import { createContext, useContext, useState, useReducer, useEffect } from "react";

const CharStates = createContext()

const reducer = (state, action) => {

    switch(action.type) {
        case "GET_CHARS":
           return {...state, chars: action.payload }
        case "ADD_FAV":
            return {...state, favs: [...state.favs, action.payload]}   

        case 'SWITCH_THEME'  :  
             return { ...state, theme: state.theme === "lightTheme" ? "darkTheme" : "lightTheme"} 
        default: 
           throw new Error()
      }

    
}


const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []


const initialState = {
    chars: [],
    detail: [],
    favs: initialFavState,
    theme: 'lightTheme'
  }


const Context = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)


    const [theme, setTheme] = useState(true)


    /* HOME */

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(()=>{

        axios(url)
        .then(res => dispatch({type: 'GET_CHARS', payload: res.data}))
        .catch(err => console.log(err))

    }, [])


    /* FAVS */

    useEffect(()=>{
        localStorage.setItem('favs', JSON.stringify(state.favs))
    },[state.favs])

    const [user, setUser] = useState({
        fullname: " ",
        email: " ",
      })
      // Estados para el form
      const [show, setShow] = useState(false)
      const [error, setError] = useState(false)



    return(
        <CharStates.Provider value={{dispatch, state, user, setUser, show, setShow, error, setError}}>
            {children}
        </CharStates.Provider>

    )

}

export default Context

export const useCharStates = () => useContext(CharStates)
