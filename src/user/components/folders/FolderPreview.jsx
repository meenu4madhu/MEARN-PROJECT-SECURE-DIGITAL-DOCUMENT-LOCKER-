import React from "react";
import { PiFoldersFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


function FolderPreview({folders }) {
  const navigate = useNavigate();
console.log("previewdata:",folders);


  return (
    <div className="mt-8 px-34">
      <h2 className="text-xl font-bold text-white mb-4">Your Folders</h2>

      {
      folders.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <div
                key={folder?._id}
                onClick={() => navigate(`/user/folder/${folder?._id}`)}
                className="flex flex-col items-center justify-center p-4 rounded-xl
                           bg-gradient-to-br from-indigo-700 via-violet-700 to-black
                           cursor-pointer hover:scale-105 transition shadow-lg"
              >
                <PiFoldersFill className="text-yellow-400 text-5xl mb-2" />
                <span className="text-white font-medium truncate">
                  {folder?.foldername}
                </span>
                
              </div>
              
             
              
            ))}
          </div>

          <div className="mt-4 text-end">
            <button
              onClick={() => navigate("/user/allfolders")}
              className="px-5 py-1 rounded-full bg-yellow-400 border border-violet-700 hover:bg-violet-700"
            >
              Explore More..
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-400">No folders yet</p>
        
        
      )}
    </div>
  );
}

export default FolderPreview;
