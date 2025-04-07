import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import SearchSection from '../../Components/SearchSection/SearchSection'

const Home = () => {
  return (
    <Box sx={{mt:10,}}>
      <HeroSection/>
      <SearchSection/>
    </Box>
  )
}

export default Home