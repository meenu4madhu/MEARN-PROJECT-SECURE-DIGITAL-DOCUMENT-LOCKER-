import React from "react";
import { FaBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from 'react'
import { HardDrive } from "lucide-react";
import { userTotalStorageAPI } from '../../services/allAPI';



function Userheader({ setProfileOpen,onNotificationClick, hasNotifications,open}) {
  

 const [usedMB, setUsedMB] = useState(0);

  const getUserStorage = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await userTotalStorageAPI(token);

      setUsedMB(Number(response.data.usedMB));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserStorage();
  }, []);

  return (
    <div className="fixed top-0 w-103 md:w-full h-16 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-50">

      <h1 className="text-xl font-bold text-violet-400">SecureDoc</h1>

      <div className="flex items-center gap-6">

        <span className="text-sm text-gray-300 hidden md:flex">
          Storage : {usedMB} MB
        </span>

        {/* Notification */}
       <button
  onClick={onNotificationClick}
  className="relative text-white hover:text-violet-400"
>
  <FaBell className="text-yellow-400"/>
  {!open && hasNotifications && (
        <span
          className="
            absolute -top-1 -right-1
            w-3 h-3
            bg-red-500
            rounded-full
            animate-pulse
          "
        />
      )}

  {/* {hasNotifications && (
    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
  )} */}
</button>

        {/* Profile */}
        <button
          onClick={() => setProfileOpen(true)}
          className="w-9 h-9 rounded-full bg-violet-600 text-white font-semibold flex items-center justify-center"
        >
          <FaRegUser className="text-black m-1" />
        </button>
        

      </div>
    </div>
  );
}

export default Userheader;
