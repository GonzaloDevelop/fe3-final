import React, { useContext } from 'react'
import { FavsLogicContext } from '../Components/context/FavsLogicContextProvider'
import Card from '../Components/Card'
import { Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { red } from '@mui/material/colors'

const Favs = () => {
  const { favorites, clearFavorites } = useContext(FavsLogicContext)
  const navigate = useNavigate()

  const handleCardClick = (userId) => {
    navigate(`/details/${userId}`)
  }

  return (
      <article className='flex flex-col items-center justify-center m-auto pt-20 pb-20'>
        <Grid container alignItems='center' justifyContent='space-evenly' spacing={8} sx={{ width: '70%' }}>
          {favorites.map(user => {
            return (
              <Grid item xs={12} md={6} lg={4} key={user.id}>
                <Card user={user} onClick={() => handleCardClick(user.id)} />
              </Grid>
          )
        })}
        </Grid>
        {favorites.length > 0 && (
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={clearFavorites}
            style={{ marginTop: '30px', backgroundColor: red[700] }}
          >
            Resetear Favoritos
          </Button>
        )}
      </article>
  )
}

export default Favs
