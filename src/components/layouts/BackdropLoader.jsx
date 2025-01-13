import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const BackdropLoader = () => {
  return (
    <Backdrop sx={{
        color:'#fff',zIndex:1500
    }} open={true}> 
        <CircularProgress color="inherit"/>
    </Backdrop>
  )
}

export default BackdropLoader