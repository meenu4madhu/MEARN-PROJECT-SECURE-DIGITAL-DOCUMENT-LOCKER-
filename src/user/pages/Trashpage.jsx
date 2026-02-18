import React from "react";
import { Trash2, RotateCcw, ArrowLeft, Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getTrashFilesAPI ,restoreFileAPI} from "../../services/allAPI";



function Trashpage() {
  const navigate = useNavigate();
const [trashedFiles, setTrashedFiles] = useState([]);
 useEffect(() => {
  fetchTrashFiles();
}, []);

const fetchTrashFiles = async () => {
  try {
    const res = await getTrashFilesAPI();
    if (res.status === 200) {
      setTrashedFiles(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const handleRestore = async (fileId) => {
  try {
    const res = await restoreFileAPI(fileId)
    if (res.status === 200) {
      // remove restored file from UI
      setTrashedFiles((prev) =>
        prev.filter((file) => file._id !== fileId)
      )
    }
  } catch (err) {
    console.log(err)
  }
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950 p-3 text-white">

      {/* ===== Modern Header ===== */}
      <div className="mb-10">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4
          p-6 
          bg-gradient-to-r from-red-700/40 via-indigo-900/40 to-black
          border border-white/10 backdrop-blur shadow-xl"
        >
          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-500/20">
              <Trash2 className="text-red-400 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Trash</h1>
              <p className="text-sm text-white/70">
                Deleted files stay here for 30 days
              </p>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate("/user-dashboard")}
            className="flex items-center gap-2 px-5 py-2 rounded-xl
            bg-black/40 border border-white/20
            hover:bg-red-500/20 transition"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* ===== EMPTY STATE ===== */}
      {trashedFiles.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-32 opacity-80">
          <Trash2 className="text-red-500 text-6xl mb-4" />
          <p className="text-lg font-semibold">Trash is empty</p>
          <span className="text-sm text-white/60">
            Deleted files will appear here
          </span>
        </div>
      ) : (
        /* ===== TRASH FILE LIST ===== */
        <div className="space-y-6">

          {trashedFiles.map((file) => (
            <div
              key={file?._id}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4
              p-6 rounded-2xl
              bg-white/10 backdrop-blur
              border border-white/10
              hover:bg-white/15 transition"
            >
              {/* File Info */}
              <div>
                <p className="text-lg font-semibold">{file?.filename}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mt-2">
                  {/* <span>Size: {file.size}</span> */}
                  <span>Deleted on:{new Date(file?.trashedAt).toLocaleDateString()}</span>

                  <span className="flex items-center gap-1">
                    <Folder size={14} />
                    From: {file?.originalFolderId?.foldername || "Unknown"}
                  </span>
                </div>
              </div>

              {/* Restore Button */}
              <button
              onClick={() => handleRestore(file._id)}
                className="flex items-center justify-center gap-2
                px-5 py-2 rounded-xl
                bg-gradient-to-r from-violet-600 to-indigo-600
                hover:from-violet-700 hover:to-indigo-700
                transition shadow-lg"
              >
                <RotateCcw size={16} />
                Restore to Folder
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Trashpage;
