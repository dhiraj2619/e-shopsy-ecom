import React from 'react'
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({activeTab,setToggleSidebar}) => {

  const {user} = useSelector((state)=>state.user);
  return (
    <div className="sidebar z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/1 sm:w-1/5 bg-gray-800 text-white overflow-x-hidden border-r">
             <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
                  <Avatar src='' alt='Avatar'/>
                  <div className="flex flex-col gap-0 ">
                      <span className="font-medium text-lg">{user.name}</span>
                      <span className="font-medium text-sm">{user.email}</span>
                  </div>

                  <button className="sm:hidden bg-gray-800" onClick={()=>setToggleSidebar(false)}>
                      <CloseIcon/>
                  </button>
             </div>
    </div>
  )
}

export default Sidebar