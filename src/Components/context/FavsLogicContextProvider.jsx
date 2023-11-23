import { createContext, useState, useEffect } from 'react'

export const FavsLogicContext = createContext()

const FavsLogicContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const loadFavorites = () => {
    let favs = JSON.parse(localStorage.getItem('favorites')) || []
    favs.sort((a, b) => a.id - b.id)
    setFavorites(favs)
  }

  const clearFavorites = () => {
    localStorage.removeItem('favorites')
    setFavorites([])
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
    <FavsLogicContext.Provider value={{ favorites, setFavorites, clearFavorites }}>
      {children}
    </FavsLogicContext.Provider>
  )
}

export default FavsLogicContextProvider