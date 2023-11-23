import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const APIContext = createContext()

const APIContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
        setError(false)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
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
    <APIContext.Provider value={{ users, isLoading, error, fetchUserById }}>
      {children}
    </APIContext.Provider>
  )
}

export default APIContextProvider
