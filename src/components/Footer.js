import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

 
import FooterLogo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#fff3f4" > 
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" >
         <img src={FooterLogo} alt='logo' width='200px' height='40px'/>
         <Typography variant='h4' mb='20px'>
            Made with love by Dvinod
         </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
