import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import AdminLayout from './AdminLayout';
import { adminStorageInfoAPI, getAllAdminUsersAPI, getAllComplaintsAPI } from '../../services/allAPI';
import { useState } from 'react';



function Admindashboard() {
   const navigate = useNavigate();
  const [totalUsers,setTotalUsers]=useState()
  const[totalComplaints,setTotalComplaints]= useState()
  const [storage, setStorage] = useState(0);
useEffect(()=>{
  getTotalUsers()
  getComplaints()
   fetchStorage();
},[])
console.log(storage);

const getTotalUsers=async()=>{
    const result = await getAllAdminUsersAPI()
    if(result.status==200){
      setTotalUsers(result.data.totalUsers)
    }else{
      console.log(result);
    }
  }
  const getComplaints=async()=>{
    const result = await getAllComplaintsAPI()
    if(result.status==200){
      setTotalComplaints(result.data.length)
    }else{
      console.log(result);
    }
  }
   console.log(Storage);
  const fetchStorage = async () => {
      try {
        const res = await adminStorageInfoAPI();
        setStorage(res.data);
      
        
       
        
      } catch (err) {
        console.error("Failed to load storage", err);
      }
    };

   
  return (
     <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <button
          onClick={() => navigate("/admin/all-users")}
          className="p-8 rounded-xl bg-violet-600 hover:bg-white/20 transition text-white text-center"
        >
          <h3 className="text-lg text-gray-200">Total Users</h3>
          <p className="text-3xl font-bold mt-2">{totalUsers}</p>
        </button>

        <button
          onClick={() => navigate("/admin/view-complaints")}
          className="p-8 rounded-xl bg-violet-600 hover:bg-white/20 transition text-white text-center"
        >
          <h3 className="text-lg text-gray-200">Complaints</h3>
          <p className="text-3xl font-bold mt-2">{totalComplaints}</p>
        </button>

        <button
          onClick={() => navigate("/admin/storage")}
          className="p-8 rounded-xl bg-violet-600 hover:bg-white/20 transition text-white text-center"
        >
          <h3 className="text-lg text-gray-200">Total Storage</h3>
          <p className="text-3xl font-bold mt-2">{Number(storage.cloudTotalGB)} GB</p>
        </button>

      </div>
      <div className='mt-50 text-center  flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-violet-500'style={{fontFamily:'Rubik Wet Paint'}}>WELCOME  TO  ADMIN  AREA !</h1>
        <img  className='w-75 text-center text-white' src="../admin.gif" alt="admin" />
      </div>
    </AdminLayout>
  )
}

export default Admindashboard