import React, { useState } from "react";

function Createfolder({ open, onClose, onCreate }) {
    const [folderName, setFolderName] = useState("");

  if (!open) return null;

  const handleCreate = () => {
    if (!folderName.trim()) return;
    onCreate(folderName);
    setFolderName("");
    onClose();
  };
  return (
    <>
     {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed z-50 top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        bg-violet-950 rounded-xl shadow-lg p-6 w-80"
      >
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          Create Folder
        </h2>

        <input
          type="text"
          placeholder="Folder name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          className="placeholder-gray-400 w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-1 rounded-lg border border-black  bg-gray-900 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-1 rounded-lg bg-blue-600 text-white"
          >
            Create
          </button>
        </div>
      </div>
    </>
  )
}

export default Createfolder