import React from 'react'
import { Link } from "react-router-dom";

function Adminsidebar() {
  return (
   <aside className=" w-100 md:w-72 bg-black/60 backdrop-blur-md border-r border-white/10 p-6">

      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-violet-600 flex items-center justify-center text-3xl font-bold text-white">
          A
        </div>
        <h3 className="mt-3 text-white font-semibold">Admin</h3>
        <p className="text-sm text-gray-400">admin@securedoc.com</p>
      </div>

      <div className="border-t border-white/10 my-6" />

      <nav className="space-y-4 text-gray-300">
        <Link to="/admin/dashboard" className="block hover:text-violet-400">Dashboard</Link>
        <Link to="/admin/all-users" className="block hover:text-violet-400">Users</Link>
        <Link to="/admin/view-complaints" className="block hover:text-violet-400">Complaints</Link>
        <Link to="/admin/storage" className="block hover:text-violet-400">Storage</Link>
      </nav>
    </aside>
  )
}

export default Adminsidebar