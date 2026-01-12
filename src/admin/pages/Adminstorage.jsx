import React from 'react'
import AdminLayout from './AdminLayout';
import StorageCard from '../components/StorageCard';

function Adminstorage() {
  
  return (
   <AdminLayout>
      <h2 className="text-2xl font-bold text-violet-500 mb-8 text-center bg-gradient-to-br
            from-pink-700 via-pink-900 to-violet-800 rounded-4xl py-3 ">
        Storage Usage
      </h2>

      <div className="flex justify-center ">
        <StorageCard used={2.13} total={30} />
      </div>
    </AdminLayout>
  )
}

export default Adminstorage