import React, { useContext } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'
import { ThemeContext } from '../../context/ThemeContextProvider'

const CardSkeleton = () => {
  const { theme } = useContext(ThemeContext)
  const skeletonColor = theme === 'dark' ? '#98C7CE' : undefined
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Skeleton variant="circular" width={40} height={40} style={{ backgroundColor: skeletonColor }} />
      <Skeleton variant="rectangular" width={210} height={118} style={{ backgroundColor: skeletonColor }} />
      <Skeleton variant="text" width={210} style={{ backgroundColor: skeletonColor }} />
      <Skeleton variant="text" width={210} style={{ backgroundColor: skeletonColor }} />
      <Skeleton variant="text" width={210} style={{ backgroundColor: skeletonColor }} />
    </Grid>
  )
}

export default CardSkeleton