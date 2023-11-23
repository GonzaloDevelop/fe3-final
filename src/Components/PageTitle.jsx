import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeTitles = {
  '/': 'DH - Odonto',
  '/contact': 'Contacto',
  '/favs': 'Favoritos',
}

const PageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    
    if (routeTitles.hasOwnProperty(location.pathname)) {
      document.title = routeTitles[location.pathname]
    }
    
  }, [location.pathname])

  return null
}

export default PageTitle