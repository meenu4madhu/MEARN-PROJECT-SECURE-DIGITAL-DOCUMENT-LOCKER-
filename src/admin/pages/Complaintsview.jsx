import React from 'react'
import AdminLayout from './AdminLayout'
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllComplaintsAPI, replyToComplaintAPI } from '../../services/allAPI';


function Complaintsview() {
  const [complaints,setComplaints] = useState()
  const [replyMessages, setReplyMessages] = useState({})

  useEffect(()=>{
    getAllComplaints()
  },[])

  const getAllComplaints=async()=>{
  try{
    const token = sessionStorage.getItem("token");
const reqHeader = {
      "Authorization":`Bearer ${token}` 
    }
    const result = await getAllComplaintsAPI(reqHeader)
    if(result.status==200){
      
      setComplaints(result.data)
      console.log(result.data);
      

    }else{
      console.log(result);
      
    }

  }catch(error){
    console.log(error);
    
  }
  }

const handleReply = async (complaintId) => {
  const replyMessage = replyMessages[complaintId];
  if (!replyMessage) return alert("Please write a reply");

  try {
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const res = await replyToComplaintAPI(complaintId, replyMessage, headers);

    if (res.status === 200) {
      alert("Reply sent successfully!");

      // Remove complaint from admin list
      setComplaints(complaints.filter(c => c._id !== complaintId));
    }
  } catch (err) {
    console.log(err);
    alert("Failed to send reply");
  }
};

  return (
   <AdminLayout>
  {/* Attractive Heading */}
  <h2 className="text-4xl  font-bold  text-violet-700 mb-6 flex flex-row justify-center" style={{textShadow:'2px 2px  4px indigo '}}>
    User Complaints<MdOutlineSpeakerNotes className=' ms-2 text-lg text-violet-500'/>
  </h2>

  {
    complaints?.length>0 &&
    complaints?.map((complaint)=>(
    
    <div key={complaint?._id} className="space-y-6 my-5">
    <div className="p-4 bg-white/10 rounded-lg flex gap-4">

      {/* Small Profile */}
      <div className="flex flex-col items-center min-w-[90px]">
        <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center text-lg font-bold">
          {complaint?.userId?.username.charAt(0)}
        </div>
        <span className="mt-1 text-sm text-white font-medium">
         {complaint?.userId?.username}
        </span>
        <span className="text-xs text-gray-400">
        {complaint?.userId?.useremail}
        </span>
      </div>

      {/* Complaint Content */}
      <div className="flex-1">
       <div className='border border-violet-300 m-2 px-2 py-3 bg-black/40 rounded'>
         <p className="text-red-500 mb-2 ">
          {complaint?.message}
        </p>
       </div>

        <textarea
         value={replyMessages[complaint._id] || ""}
         onChange={(e) =>
         setReplyMessages({ ...replyMessages, [complaint._id]: e.target.value })
        }
          placeholder="Write your reply..."
          className="w-full p-2 bg-black/50 text-white rounded outline-none focus:ring-1 focus:ring-violet-500"
        />

        <button onClick={() => handleReply(complaint._id)} className="mt-2 bg-violet-600 px-4 py-1 rounded text-white hover:bg-violet-700 transition">
          Reply
        </button>
      </div>

    </div>
  </div>))
  }
</AdminLayout>

  )
}

export default Complaintsview