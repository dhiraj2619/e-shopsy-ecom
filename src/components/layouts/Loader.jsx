import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
        <CircularProgress/>
    </div>
  )
}

export default Loader