import React from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

function Userheader({ setSidebarOpen, setProfileOpen }) {



  return (
    <div className="fixed top-0 w-full h-16 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-50 ">
  <h1 className="text-xl font-bold text-violet-400">SecureDoc</h1>

  <div className="flex items-center gap-6">
    <span className="text-sm text-gray-300">Storage: 120MB / 500MB</span>
    <button className="text-white hover:text-violet-400">🔔</button>
    <button className="w-9 h-9 rounded-full bg-violet-600 text-white">M</button>
  </div>
</div>

  );
}

export default Userheader;
