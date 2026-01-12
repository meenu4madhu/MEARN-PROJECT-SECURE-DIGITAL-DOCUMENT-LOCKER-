import React, { useState } from "react";
import { MessageSquare, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitComplaintAPI } from "../../services/allAPI";



function Complaintsubmit() {
    const [complaints,setComplaints] = useState([]); // empty for now
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

const handleSubmit = async () => {
  if (!message) return alert("Please write your complaint!");

  try {
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` }; // correct syntax

    const res = await submitComplaintAPI(message,headers); // pass headers to API
    if (res.status === 200) {
      setComplaints([res.data, ...complaints]); // update state
      setMessage(""); // clear textarea
      alert("Complaint submitted successfully!");
    }
  } catch (err) {
    console.log(err);
    alert("Failed to submit complaint!");
  }
};



  return (
     <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950 p-6 text-white">

      {/* Page Header */}
      
<div className="relative mb-8">
  <div
    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4
      p-9 rounded-xl
      bg-gradient-to-r from-indigo-700 via-violet-700 to-black
      shadow-lg border border-white/10"
  >
    {/* Left: Title */}
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
        <MessageSquare className="text-indigo-300 w-6 h-6" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-white">
         Complaints
        </h1>
        <p className="text-sm text-white/70">
          Raise issues and track admin responses
        </p>
      </div>
    </div>

    {/* Right: Back Button */}
    <button
      onClick={() => navigate("/user-dashboard")}
      className="flex items-center gap-2
        px-5 py-2 rounded-xl
        bg-black/40 text-white
        border border-white/20
        hover:bg-white/10 transition"
    >
      <ArrowLeft size={18} />
      Back to Dashboard
    </button>
  </div>
</div>

      {/* New Complaint Box */}
      <div className="mb-8 p-6 rounded-2xl bg-white/10 border border-white/10">
        <h2 className="text-lg font-semibold mb-4">Raise a Complaint</h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your issue..."
          className="w-full h-28 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

       <button
  onClick={handleSubmit} // <-- call the function here
  className="mt-4 flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
>
  <Send size={16} />
  Submit
</button>
      </div>

      {/* Complaints List */}
      {complaints.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 opacity-80">
          <MessageSquare className="text-indigo-500 text-6xl mb-4" />
          <p className="text-lg">No complaints raised</p>
          <span className="text-sm text-white/60">
            Your complaints and admin responses will appear here
          </span>
        </div>
      ) : (
        <div className="space-y-4">
          {complaints?.map((item) => (
            <div
              key={item?._id}
              className="p-5 rounded-xl bg-white/10 border border-white/10"
            >
              <p className="font-medium">{item?.message}</p>
              <span className="text-xs text-white/60">
                Status: {item?.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Complaintsubmit