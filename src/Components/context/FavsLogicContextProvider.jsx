import React, { createContext, useEffect, useReducer } from 'react'

export const FavsLogicContext = createContext()

const favsReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return [...action.payload]
    case 'CLEAR_FAVORITES':
      return []
    default:
      return state
  }
}

const FavsLogicContextProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favsReducer, [])

  const loadFavorites = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || []
    favs.sort((a, b) => a.id - b.id)
    dispatch({ type: 'LOAD_FAVORITES', payload: favs })
  }

  const clearFavorites = () => {
    localStorage.removeItem('favorites')
    dispatch({ type: 'CLEAR_FAVORITES' })
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
    <FavsLogicContext.Provider value={{ favorites, clearFavorites }}>
      {children}
    </FavsLogicContext.Provider>
  )
}

export default FavsLogicContextProvider
