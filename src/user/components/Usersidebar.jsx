import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";
import { MdWorkHistory } from "react-icons/md";
import { FcFullTrash } from "react-icons/fc";


function Usersidebar({ sidebarOpen, setSidebarOpen, setProfileOpen ,setCreateFolderOpen}) {
  
const navigate = useNavigate();
  return (
    
    <>
   <div className=" h-screen w-20 bg-gradient-to-b from-zinc-900 to-black
      flex  flex-col md:items-center pt-24 gap-8 fixed left-0 top-0">

      {/* CREATE FOLDER */}
      <button
  onClick={() => setCreateFolderOpen(true)}
  className="text-gray-400 hover:text-violet-400 text-xl transition"
>
  <FaFolderPlus />
</button>


      {/* History */}
      <button
        onClick={() => navigate("/user/history")}
        className="text-gray-400 hover:text-violet-400 text-xl transition"
      >
        <MdWorkHistory />
      </button>

      {/* Complaints */}
      <button
        onClick={() => navigate("/user/complaint")}
        className="text-gray-400 hover:text-violet-400 text-xl transition"
      >
        <IoMailSharp />
      </button>

      {/* Trash */}
      <button
        onClick={() => navigate("/user/trash")}
        className="text-gray-400 hover:text-violet-400 text-xl transition"
      >
        <FcFullTrash />
      </button>
     
    </div>
      
    </>
  );
}

export default Usersidebar;
