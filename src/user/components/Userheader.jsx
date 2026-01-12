import React from "react";
import { FaBell } from "react-icons/fa";





function Userheader({ setProfileOpen,onNotificationClick, hasNotifications }) {
  const userName = "Max Well";
 


  return (
    <div className="fixed top-0 w-103 md:w-full h-16 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-50">

      <h1 className="text-xl font-bold text-violet-400">SecureDoc</h1>

      <div className="flex items-center gap-6">

        <span className="text-sm text-gray-300 hidden md:flex">
          Storage: 120MB / 500MB
        </span>

        {/* Notification */}
       <button
  onClick={onNotificationClick}
  className="relative text-white hover:text-violet-400"
>
  <FaBell className="text-yellow-400"/>

  {hasNotifications && (
    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
  )}
</button>

        {/* Profile */}
        <button
          onClick={() => setProfileOpen(true)}
          className="w-9 h-9 rounded-full bg-violet-600 text-white font-semibold flex items-center justify-center"
        >
          {userName.charAt(0)}
        </button>

      </div>
    </div>
  );
}

export default Userheader;
