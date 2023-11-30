import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

    useEffect(() => {
        document.title = '404 - Página no encontrada'
    }, [])

    const handleSupportClick = (e) => {
        e.preventDefault()
    }

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
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <Link to="/" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                        Go back
                    </Link>
                    <a href="/" onClick={handleSupportClick} className="block py-2 px-4 text-white hover:bg-green-600 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                        Contact support
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
