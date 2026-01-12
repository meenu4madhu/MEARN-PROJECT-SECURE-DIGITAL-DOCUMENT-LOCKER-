import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { FaUsers } from "react-icons/fa";
import { getAllAdminUsersAPI } from '../../services/allAPI';


function Userslist() {
 const [allUsers,setAllUsers]= useState([])
 console.log(allUsers);
useEffect(()=>{
  getAllUsers()
},[])

 const getAllUsers=async(token)=>{
const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllAdminUsersAPI(reqHeader)
    if(result.status==200){
      
      setAllUsers(result.data.users)

    }else{
      console.log(result);
      
    }
  }
  return (
   <AdminLayout>
  <h2 className="text-4xl font-bold text-violet-600 mb-6 flex justify-center">
    <FaUsers className="me-2 text-violet-600 mt-1" /> Users
  </h2>

  {/* GRID CONTAINER */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {allUsers?.map((user) => (
      <div
        key={user?._id}
        className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-indigo-400/50 transition"
      >
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
          {user?.username.charAt(0)}
        </div>

        {/* User Info */}
        <div>
          <p className="text-white font-medium">{user?.username}</p>
          <p className="text-sm text-gray-400">{user?.email}</p>
          <p className="text-sm text-violet-500">10 kb used</p>
        </div>
      </div>
    ))}
  </div>
</AdminLayout>

  )
}

export default Userslist