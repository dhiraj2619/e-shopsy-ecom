import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {user} = useSelector((state)=>state.user);

  return (
    <main className="flex min-h-screen">
        <Sidebar user={user}/>
    </main>
  )
}

export default Dashboard