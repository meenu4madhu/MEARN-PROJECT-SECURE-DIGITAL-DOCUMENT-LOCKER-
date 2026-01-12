import React, { useEffect, useState } from "react";
import Userheader from "../components/Userheader";
import Usersidebar from "../components/Usersidebar";
import Profile from "../components/Profile";
import Createfolder from "../components/folders/Createfolder";
import Storage from './Storage';
import Trash from "../components/Trash";
import Complaint from "./Complaint";
import HistoryPreview from '../components/HistoryPreview';
import Notification from "../components/Notification";
import { createFolderAPI, getUserNotificationsAPI, uploadFileAPI } from "../../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import { getAllFoldersAPI } from "../../services/allAPI";
import { PiFoldersFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";




function Userdashboard({ sidebarOpen, setSidebarOpen }) {


 const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [createFolderOpen, setCreateFolderOpen] = useState(false);
   const [folderArray,setFolderArray] = useState([])
     console.log(folderArray);
     
     useEffect(()=>{
       getAllFolders()
       
     },[])

  
const [notifications, setNotifications] = useState([]);
const hasNotifications = notifications.length > 0;
const [notificationOpen, setNotificationOpen] = useState(false);
const [showUploadBox, setShowUploadBox] = useState(false);
const [selectedFolder, setSelectedFolder] = useState("");
const [selectedFile, setSelectedFile] = useState(null);
const [uploading, setUploading] = useState(false);

  
 
   const getAllFolders = async ()=>{
   const result = await getAllFoldersAPI()
   if(result.status==200){
     setFolderArray(result.data)
   }
   else{
     console.log(result);
     
   }
   }

const handleCreateFolder = async (foldername) => {
  try {
    const res = await createFolderAPI({ foldername });

    if (res.status === 200) {
      toast.success("Folder Created...")
      setFolders((prev) => [
        ...prev,
        {
          id: res.data._id,
          name: res.data.foldername
        }
      ]);
      
      setCreateFolderOpen(false);
      
    }else{alert("Folder creation failed");}
  } catch (err) {
    console.log(err);
    
  }
};
const handleOpenNotifications =async () => {
  setNotificationOpen(true);
  try {
    const res = await getUserNotificationsAPI();
    if (res.status === 200) {
      console.log("notif:",res.data);
      
      setNotifications(res.data);
    }
  } catch (err) {
    console.log(err);
  }
};
const handleFileUpload = async () => {
  if (!selectedFolder|| !selectedFile) {
    toast.error("Please select a folder and file");
    return;
  }
  try {
    setUploading(true);
    const token = sessionStorage.getItem("token")
    // console.log(token); 
    if(token)
     {
    const reqHeader = {
    "Authorization": `Bearer ${token}`
     }
    const reqBody = new FormData();
    reqBody.append("filename", selectedFile);
    reqBody.append("folderId", selectedFolder);
    
    const result = await uploadFileAPI(reqBody,reqHeader);
   console.log(token,result);
    if (result.status === 200) {
      toast.success("File uploaded successfully ");
      setSelectedFile(null);
      setSelectedFolder("");
      setShowUploadBox(false);
    }
  }} catch (error) {
    toast.error("Upload failed");
  } finally {
    setUploading(false);
  }
}

  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950">
  <Userheader
  setProfileOpen={setProfileOpen}
  onNotificationClick={handleOpenNotifications}
  hasNotifications={hasNotifications}
/>
<Profile open={profileOpen} onClose={() => setProfileOpen(false)} />
<div className="flex pt-16 px-16">
<Usersidebar
setCreateFolderOpen={setCreateFolderOpen}
/>
   

        <main className="flex-1 p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          <Storage />
          <Complaint />
          <Trash />
        </main>
        
</div>
{/* CREATE FOLDER MODAL */}
<Createfolder
  open={createFolderOpen}
  onClose={() => setCreateFolderOpen(false)}
  onCreate={handleCreateFolder}
/>
 {/* UPLOAD CARD */}
<main className="flex-1 p-16 space-y-0">
 
<div
  className="
    w-full min-h-full p-6
    bg-[url('https://cdn-icons-png.freepik.com/512/6870/6870041.png')]
    bg-no-repeat bg-center bg-contain
    flex flex-col items-center
    text-white text-center cursor-pointer
    hover:scale-[1.05] transition-all duration-500
  "
  onClick={() => setShowUploadBox(true)}
>
 <div className="mt-15"> 
  <h2 className="text-2xl font-bold mt-40">Upload Your Files</h2>
  <p className="text-sm text-white/80 mt-2">
    Secure • Encrypted • Cloud Stored
  </p></div>
</div>

  {/*  SELECT FOLDER + FILE UPLOAD */}
  {showUploadBox && (
    <div className="p-6 ml-20 rounded-2xl bg-white/10 border border-white/10 space-y-6">
      <h3 className="text-lg font-semibold mb-4 text-pink-600">
        Select Folder to Upload
      </h3>

      {/* Folder Dropdown */}
      <select
        value={selectedFolder}
        onChange={(e) => setSelectedFolder(e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-gradient-to-br
            from-pink-700 via-pink-900 to-violet-700 border border-white/20 text-black"
      >
        <option value="" >-- Select Folder --</option>
        {folderArray.map((folder) => (
          <option key={folder?._id} value={folder?._id}>
            {folder?.foldername}
          </option>
        ))}
      </select>

      {/* File Input */}
     {/* FILE INPUT – ENABLE ONLY AFTER FOLDER SELECTION */}
<label className={`block ${!selectedFolder && "opacity-50 pointer-events-none"}`}>
  <input
    type="file"
    className="hidden"
    accept="*/*"
    disabled={!selectedFolder}
    onChange={(e) => setSelectedFile(e.target.files[0])}
  />

  <div className="mt-4 p-6 rounded-xl bg-gradient-to-br
      from-pink-700 via-pink-900 to-violet-700
      shadow-lg transition-all duration-300
      cursor-pointer flex flex-col items-center justify-center
      hover:scale-105">

    <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center mb-3">
      <img src="/user-upload.png" alt="upload" className="w-12 h-12" />
    </div>

    <p className="text-white font-medium text-lg">
      {selectedFile ? selectedFile.name : "Click to choose file"}
    </p>

    <p className="text-xs text-white/70 mt-1 text-center">
      File will be uploaded to <b>{selectedFolder || "—"}</b>
    </p>
  </div>
</label>
{selectedFile && selectedFolder && (
  <button
    onClick={handleFileUpload}
    disabled={uploading}
    className="w-25 mt-4 py-3 rounded-xl
      bg-violet-700 hover:bg-pink-600
      disabled:opacity-50
      text-white font-semibold"
  >
    {uploading ? "Uploading Securely..." : "Upload"}
  </button>
)}


    </div>
  )}
</main>
<HistoryPreview/>
{/* folders preview */}
  {
      
      folderArray?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-30 py-10">
          {folderArray.slice(0, 4)?.map((folder) => (
            <div
              key={folder?._id}
              onClick={() => navigate(`/user/folder/${folder?._id}`)}
              className="flex  flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-indigo-700 via-violet-700 to-black
                         cursor-pointer hover:scale-105 transition-transform shadow-lg border border-white/10 "
            >
              <PiFoldersFill className="text-yellow-400 text-6xl mb-2 " />
              <span className="text-white font-medium truncate">{folder?.foldername}</span>
              
            </div>
            
          ))}
          <div><button
              onClick={() => navigate("/user/allfolders")}
              className="px-5 py-5 rounded-2xl bg-yellow-400 border border-violet-700 hover:bg-violet-300 mt-15"
            >
              Explore More..
            </button></div>
        </div>
        
        
     ) : (
        <div className="flex flex-col items-center mt-24 opacity-70">
          <PiFoldersFill size={64} className="text-yellow-400 mb-4" />
          <p>No folders created yet</p>
        </div>
      )}
  <Notification
  open={notificationOpen}
  onClose={() => setNotificationOpen(false)}
   notifications={notifications}
/>
 <ToastContainer
position="top-center"
autoClose={2000}
theme="colored"
/>
<Footer/>
    </div>
    </>
  );
}

export default Userdashboard;
