import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Profile({ open, onClose }) {
  if (!open) return null;

  const user = {
    name: "Max Well",
    email: "max123@gmail.com",
    role: "User",
    created: "12 Aug 2025",
  };

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password updated successfully");
    setNewPassword("");
    setConfirmPassword("");
  };

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
              {user.name.charAt(0)}
            </div>
          </div>

          {/* User Details (TOP) */}
          <div className="space-y-3 text-sm ">
            <div className="flex justify-between">
              <span className="text-white/60">Name</span>
              <span>{user.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Email</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Role</span>
              <span>{user.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Joined</span>
              <span>{user.created}</span>
            </div>
          </div>

          

          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* Change Password */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-sm font-semibold text-violet-400">
              Change Password
            </h3>

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
    </>
  );
}

export default Profile;
