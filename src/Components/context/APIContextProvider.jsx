import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

export const APIContext = createContext()

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, users: action.payload, isLoading: false, error: null }
    case 'FETCH_ERROR':
      return { ...state, users: [], isLoading: false, error: action.payload }
    case 'LOADING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}

const APIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, {
    users: [],
    isLoading: true,
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
