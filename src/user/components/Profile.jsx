import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { getUserProfileAPI, updatePasswordAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function Profile({ open, onClose }) {
  if (!open) return null;

  const navigate =useNavigate()
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

   useEffect(() => {
    fetchProfile();
  }, []);

   const fetchProfile = async () => {
      try {
        
        
        const token = sessionStorage.getItem("token"); // or localStorage
        if (!token) return;

        const res = await getUserProfileAPI(token); // pass token
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (newPassword !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }
  
  const reqBody = {
    currentPassword,
    newPassword,
  };
 const token = sessionStorage.getItem("token")
    // console.log(token); 
    
    const reqHeader = {
    "Authorization": `Bearer ${token}`
     }
     

  const res = await updatePasswordAPI(reqBody,reqHeader);
console.log(res.data);

  if (res.status === 200) {
    toast.success("Password updated successfully");
    navigate('/login')
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  } else {
    toast.error(res.response?.data || "Update failed");
  }
};

if (!user) return <div className="text-white p-4">Loading profile...</div>;
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Profile Panel */}
      <div className="
        fixed top-0 right-0 h-full w-80
        bg-black/80 backdrop-blur-xl
        text-white
        z-50 shadow-2xl
        border-l border-white/10
      ">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-pink-500">
            My Profile
          </h2>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="
              w-24 h-24 rounded-full
              bg-gradient-to-br from-violet-600 to-pink-600
              flex items-center justify-center
              text-4xl font-bold
            ">
              {user?.username.charAt(0)}
            </div>
          </div>

          {/* User Details (TOP) */}
          <div className="space-y-3 text-sm ">
            <div className="flex justify-between">
              <span className="text-white/60">Name</span>
              <span>{user?.username}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Email</span>
              <span>{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Role</span>
              <span>{user?.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Joined</span>
              <span>{new Date(user?.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          

          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* Change Password */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-sm font-semibold text-violet-400">
              Change Password
            </h3>
            {/* CURRENT PASSWORD */}
  <input
    type="password"
    placeholder="Current Password"
    value={currentPassword}
    onChange={(e) => setCurrentPassword(e.target.value)}
    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
  />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="
                w-full px-4 py-2 rounded-lg
                bg-white/10 border border-white/20
                text-white placeholder-white/50
                focus:outline-none focus:border-violet-500
              "
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="
                w-full px-4 py-2 rounded-lg
                bg-white/10 border border-white/20
                text-white placeholder-white/50
                focus:outline-none focus:border-violet-500
              "
            />

            <button
              type="submit"
              className="
                w-full py-2 rounded-lg
                bg-gradient-to-r from-violet-600 to-pink-600
                hover:opacity-90 transition
                font-semibold
              "
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
       <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored"
      />
    </>
  );
}

export default Profile;
