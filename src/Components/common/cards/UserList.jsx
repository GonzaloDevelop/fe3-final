import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { APIContext } from '../../context/APIContextProvider'
import Card from '../../Card'
import CardSkeleton from '../cards/CardSkeleton'
import { Grid } from '@mui/material'

const UserList = () => {
  const { users, isLoading } = useContext(APIContext)
  const navigate = useNavigate()

  const handleCardClick = (userId) => {
    navigate(`/details/${userId}`)
  }

  return (
    <article className='flex items-center justify-center m-auto pt-20 pb-20'>
      <Grid container alignItems='center' justifyContent='space-evenly' spacing={8} sx={{ width: '70%' }}>
        {isLoading ? (
          [...Array(10)].map((_, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <CardSkeleton />
            </Grid>
          ))
        ) : (
          users.map(user => (
            <Grid item xs={12} md={6} lg={4} key={user.id}>
              <Card user={user} onClick={() => handleCardClick(user.id)} />
            </Grid>
          ))
        )}
      </Grid>
    </article>
  )
}

export default UserList
