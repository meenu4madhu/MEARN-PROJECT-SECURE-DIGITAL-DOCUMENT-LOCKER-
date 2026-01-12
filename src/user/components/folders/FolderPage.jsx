import React, { useEffect, useState } from "react";
import { PiFoldersFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { getAllFoldersAPI } from "../../../services/allAPI";
import FolderPreview from "./FolderPreview";


function FolderPage() {
  const navigate = useNavigate();
  const [folderArray,setFolderArray] = useState([])
  console.log(folderArray);
  
  useEffect(()=>{
    getAllFolders()
  },[])


  const getAllFolders = async ()=>{
  const result = await getAllFoldersAPI()
  if(result.status==200){
    setFolderArray(result.data)
  }
  else{
    console.log(result);
    
  }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950 text-white p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 p-6   bg-gradient-to-r from-violet-700 via-indigo-700 to-black rounded-xl shadow-lg border border-white/10">
        <h1 className="text-2xl font-bold">All Folders</h1>
        <button
          onClick={() => navigate("/user-dashboard")}
          className="px-4 py-2 rounded-xl bg-black/40 hover:bg-violet-700 transition"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Folders Grid */}

      {
      
      folderArray?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
          {folderArray?.map((folder) => (
            <div
              key={folder?._id}
              onClick={() => navigate(`/user/folder/${folder?._id}`)}
              className="flex flex-col  items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-indigo-700 via-violet-700 to-black
                         cursor-pointer hover:scale-105 transition-transform shadow-lg border border-white/10"
            >
              <PiFoldersFill className="text-yellow-400 text-6xl mb-2" />
              <span className="text-white font-medium truncate">{folder?.foldername}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-24 opacity-70">
          <PiFoldersFill size={64} className="text-yellow-400 mb-4" />
          <p>No folders created yet</p>
        </div>
      )}
     </div>
  
  );
}

export default FolderPage;
