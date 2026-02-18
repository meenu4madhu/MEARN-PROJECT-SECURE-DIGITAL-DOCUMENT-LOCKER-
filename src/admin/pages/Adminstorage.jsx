import React from 'react'
import AdminLayout from './AdminLayout';
import StorageCard from '../components/StorageCard';
import { adminStorageInfoAPI } from '../../services/allAPI';
import { useState } from "react";
import { useEffect } from 'react';

function Adminstorage() {
  const [storage, setStorage] = useState(0);
   useEffect(() => {
    fetchStorage();
  }, []);
  
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
      <h2 className="text-2xl font-bold text-violet-500 mb-8 text-center bg-gradient-to-br
            from-pink-700 via-pink-900 to-violet-800 rounded-4xl py-3 ">
        Storage Usage
      </h2>
      
      <div className="flex justify-center ">
        <StorageCard used={Number(storage.cloudUsedGB)} total={Number(storage.cloudTotalGB)} />
      </div>
    </AdminLayout>
  )
}

export default Adminstorage