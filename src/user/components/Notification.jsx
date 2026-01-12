import React from "react";
import { FaTimes } from "react-icons/fa";

function Notification({ open, onClose,notifications }) {
  if (!open) return null;
console.log(notifications);

  return (
    <>
     {/* Background click to close (optional, lighter) */}
<div
  className="fixed inset-0 z-40"
  onClick={onClose}
/>

{/* Small Notification Box */}
<div className="
  fixed top-16 right-6
  w-80 max-h-72
    bg-gradient-to-br from-indigo-700 via-violet-700 to-black text-white
  rounded-xl shadow-2xl
  border border-white/10
  z-50
  overflow-hidden
">
  {/* Header */}
  <div className="flex justify-between items-center px-4 py-3 border-b border-b-yellow-400">
    <h2 className="text-sm text-yellow-400 font-semibold">Notifications</h2>
    <button onClick={onClose} className="text-yellow-400 hover:text-white">
      <FaTimes size={14} />
    </button>
  </div>

  {/* Messages */}
  <div className="p-3 space-y-2 text-sm max-h-56 overflow-y-auto">
    {notifications?.length > 0 ? (
      notifications.map((msg) => (
        <div
          key={msg?._id}
          className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          {msg?.adminReply}
        </div>
      ))
    ) : (
      <p className="text-center text-white/60 text-xs py-6">
        No new notifications
      </p>
    )}
  </div>
</div>

    </>
  );
}

export default Notification;
