import {useEffect} from 'react'

const NotFoundPage = () => {

    useEffect(() => {
        document.title = '404 - Página no encontrada'
    }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <div className="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-400 mx-auto" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z"/>
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg font-medium text-gray-300 mb-8">Página no encontrada</p>
        <p className="text-gray-400">Lo sentimos, la página que buscas no existe o fue movida.</p>
      </div>
    </div>
  )
}

export default NotFoundPage
