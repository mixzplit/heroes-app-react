import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

// Con la funcion init creada no es necesario
// este objeto, ya que podemo enviar un
// objeto vacio a nuestro Reducer y va a 
// funcionar de la misma manera ya que tenemos
// el usuario en nuestro init
const initialState = {
  logged: false,
}

// Inicializador que va a ser enviado a
// nuestri reducer
const init = () => {
  const user = JSON.parse( localStorage.getItem('user'));

  return {
    logged: !!user,
    user
  }
}


export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, initialState, init);


  const login = (name = '') => {
    const user = { id:'ABC', name: name }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');

    const action = {
      type: types.logout,
      payload: initialState
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ ...state, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  )
}
