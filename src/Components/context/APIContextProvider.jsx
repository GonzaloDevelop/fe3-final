import React, { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { apiReducer } from '../reducers/apiReducer'

export const APIContext = createContext()

const APIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, {
    users: [],
    isLoading: false,
    error: null,
  })

  useEffect(() => {
    dispatch({ type: 'LOADING' })
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error })
      })
  }, [])

  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
      return null
    }
  }

  return (
    <APIContext.Provider value={{ ...state, fetchUserById }}>
      {children}
    </APIContext.Provider>
  )
}

export default APIContextProvider