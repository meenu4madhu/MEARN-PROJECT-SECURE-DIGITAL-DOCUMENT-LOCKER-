import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Usersidebar from "../components/Usersidebar";
import { RiDownload2Fill } from "react-icons/ri";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiFoldersFill } from "react-icons/pi";
import Profile from "../components/Profile";
import Createfolder from "../components/folders/Createfolder";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import Storage from './Storage';
import Trash from "../components/Trash";
import Complaint from "./Complaint";
import HistoryPreview from '../components/HistoryPreview';
import FolderPreview from "../components/folders/FolderPreview";



function Userdashboard({ sidebarOpen, setSidebarOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [createFolderOpen, setCreateFolderOpen] = useState(false);
    const [folders, setFolders] = useState([
    { id: 1, name: "Certificates" },
    { id: 2, name: "ID Proofs" },
  ]);
   const [showUploadBox, setShowUploadBox] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleCreateFolder = (name) => {
    setFolders([...folders, { id: Date.now(), name }]);
  };

  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950">
      <Userheader />

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
        onCreate={(folderName) => {
          console.log("Folder created:", folderName);
          // later → API call
        }}
      />
      <main className="flex-1 p-16 space-y-0">

  {/* 🚀 MODERN UPLOAD CARD */}
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





  {/* 📂 SELECT FOLDER + FILE UPLOAD */}
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
        {folders.map((folder) => (
          <option key={folder.id} value={folder.name}>
            {folder.name}
          </option>
        ))}
      </select>

      {/* File Input */}
      {selectedFolder && (
        <label className="block">
          <input
            type="file"
            className="hidden"
            onChange={(e) =>
              alert(
                `File "${e.target.files[0].name}" uploaded to folder "${selectedFolder}"`
              )
            }
          />

          <div className="mt-4 p-6  rounded-xl bg-gradient-to-br
            from-pink-700 via-pink-900 to-violet-700
            shadow-lg hover:shadow-2xl transition-all duration-300
            cursor-pointer flex flex-col items-center justify-center
            hover:scale-105">
            <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center mb-3 animate-pulse">
              <img
                src="/user-upload.png"
                alt="upload"
                className="w-12 h-12"
              />
            </div>
            <p className="text-white font-medium text-lg">
              Click to choose file
            </p>
            <p className="text-xs text-white/70 mt-1 text-center">
              File will be uploaded to <b>{selectedFolder}</b>
            </p>
          </div>
        </label>
      )}
    </div>
  )}
</main>
<HistoryPreview />
<FolderPreview/>
       
    </div>
    </>
  );
}

export default Userdashboard;
