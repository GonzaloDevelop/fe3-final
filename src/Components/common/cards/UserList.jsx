import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { APIContext } from '../../context/APIContextProvider'
import Card from '../../Card'
import CardSkeleton from '../cards/CardSkeleton'
import { Grid } from '@mui/material'

const UserList = () => {
  const { users, isLoading } = useContext(APIContext)
  const navigate = useNavigate()
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleCardClick = (userId) => {
    navigate(`/details/${userId}`)
  }

  const shouldShowSkeleton = isLoading || showSkeleton

  return (
    <article className='flex items-center justify-center m-auto pt-20 pb-20'>
      <Grid container alignItems='center' justifyContent='space-evenly' spacing={8} sx={{ width: '70%' }}>
        {shouldShowSkeleton ? (
          [...Array(10)].map((_, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <CardSkeleton />
            </Grid>
          ))
        ) : (
          users.map(user => (
            <Grid item xs={12} md={6} lg={4} key={user.id}>
              <Card user={user} onClick={() => handleCardClick(user.id)}/>
            </Grid>
          ))
        )}
      </Grid>
    </article>
  )
}

export default UserList
