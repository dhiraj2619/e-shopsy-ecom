import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'


const Dashboard = ({activeTab}) => {

  
 const [onMobile, setOnMobile] = useState(false);
 const [toggleSidebar, setToggleSidebar] = useState(false);

 useEffect(()=>{
     if(window.innerWidth < 600){
       setOnMobile(true);
     }
 },[])
  return (
    <main className="flex min-h-screen">
        {!onMobile && <Sidebar activeTab={activeTab}/>}
        {toggleSidebar && <Sidebar activeTab={activeTab} setToggleSidebar={setToggleSidebar}/>}

        <div className="min-h-screen min-w-full"></div>
    </main>
  )
}

export default Dashboard