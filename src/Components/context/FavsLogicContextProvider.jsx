import React, { createContext, useReducer, useEffect } from 'react'
import { favsReducer } from '../reducers/favsReducer'

export const FavsLogicContext = createContext()

const FavsLogicContextProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favsReducer, [])

  const loadFavorites = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || []
    favs.sort((a, b) => a.id - b.id)
    dispatch({ type: 'LOAD_FAVORITES', payload: favs })
  }

  useEffect(() => {
    loadFavorites()

    const handleFavoriteChange = () => {
      loadFavorites()
    }

    window.addEventListener('favoriteChanged', handleFavoriteChange)
    return () => {
      window.removeEventListener('favoriteChanged', handleFavoriteChange)
    }
  }, [])

  return (
    <FavsLogicContext.Provider value={{ favorites, clearFavorites: () => dispatch({ type: 'CLEAR_FAVORITES' }) }}>
      {children}
    </FavsLogicContext.Provider>
  )
}

export default FavsLogicContextProvider