import React from 'react'
import { FaTimes } from "react-icons/fa";
function Profile({ open, onClose }) {
     if (!open) return null;
     
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      ></div>

      {/* Right Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white z-50 shadow-2xl animate-slideIn">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-green-400 text-white">
          <h2 className="text-lg font-semibold">My Profile</h2>
          <button onClick={onClose} className="cursor-pointer">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center p-6">

          {/* Profile Image */}
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* Name */}
          <h3 className="mt-4 text-xl font-bold text-blue-800">
            Max Well
          </h3>

          {/* Role */}
          <span className="text-sm text-green-600 font-medium">
            Role: User
          </span>

          {/* Divider */}
          <div className="w-full border-t my-6"></div>

          {/* Details */}
          <div className="w-full space-y-4 text-sm text-gray-700">

            <div className="flex justify-between">
              <span className="font-medium text-blue-700">Email</span>
              <span>max123@gmail.com</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-blue-700">
                Account Created
              </span>
              <span>12 Aug 2025</span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile