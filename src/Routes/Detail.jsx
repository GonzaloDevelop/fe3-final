import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { APIContext } from '../Components/context/APIContextProvider'
import NotFoundPage from '../Routes/NotFoundPage'
import DoctorIcon from '../../public/images/doctor.jpg'
import CircularProgress from '@mui/material/CircularProgress'

const Detail = () => {
  const { fetchUserById } = useContext(APIContext)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    const loadingTimeout = setTimeout(() => {
      fetchUserById(id).then(userData => {
        if (isMounted) { 
          if (userData) {
            setUser(userData)
            setError(false)
            document.title = `${userData.name} - Información de contacto`
          } else {
            setError(true)
          }
        }
      }).catch(() => {
        if (isMounted) setError(true)
      }).finally(() => {
        if (isMounted) setLoading(false)
      })
    }, 1000)

    return () => {
      clearTimeout(loadingTimeout)
      isMounted = false
    }
  }, [id, fetchUserById])

  const handleBack = () => {
    navigate(-1)
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <CircularProgress />
      </div>
    )
  }

  if (error) return <NotFoundPage />

  return (
    <article className='flex flex-col items-center justify-center min-h-screen'>
      <div className="relative flex flex-col items-center justify-center h-[60vh] lg:h-[40vh] gap-4 lg:w-[30%] m-auto dark:text-white bg-gray-100 border border-red-500 dark:border-green-600 dark:bg-purple-900 dark:hover:bg-purple-700 rounded-lg p-6 shadow-md">
        <div className='absolute -top-16 w-full flex justify-center'>
          <img src={DoctorIcon} alt="Doctor" className="w-40 h-40 rounded-full border-2 border-red-500 dark:border-green-600"/>
        </div>
        {user && (
          <>
            <p className="text-lg font-semibold">Nombre: {user.name}</p>
            <p className="text-lg font-semibold">Email: {user.email}</p>
            <p className="text-lg font-semibold">Teléfono: {user.phone}</p>
            <p className="text-lg font-semibold pb-4">Web: <a href={`http://${user.website}`} className="text-blue-600 dark:text-blue-200 hover:text-blue-800 visited:text-purple-600 dark:visited:text-purple-300">{user.website}</a></p>
          </>
        )}
        <button onClick={handleBack} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">Volver</button>
      </div>
    </article>
  )
}

export default Detail