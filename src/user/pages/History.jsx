import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi2";
import { History as HistoryIcon } from "lucide-react";
import { ArrowLeft} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { historyFiles } from "../components/files/historydata";

function History() {
  const navigate = useNavigate();
const files = historyFiles

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950 p-2 text-white">

      {/* Page Header */}
      <div className="relative mb-8">
      {/* Gradient Header Card */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4
        p-9 rounded-xl
        bg-gradient-to-r from-violet-700 via-indigo-700 to-black
        shadow-lg border border-white/10">

        {/* Left: Title */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
            <HistoryIcon className="text-violet-300 w-6 h-6" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              File History
            </h1>
            <p className="text-sm text-white/70">
              View, download, share or delete your uploaded files
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
            hover:bg-violet-700 transition"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
      </div>
    </div>

      {/* File Table */}
      <div className="overflow-x-auto  rounded-2xl bg-white/10 backdrop-blur border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-black/40 text-sm uppercase text-white/70">
            <tr>
              <th className="p-4">File Name</th>
              <th className="p-4">Folder</th>
              <th className="p-4">Size</th>
              <th className="p-4">Uploaded</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {files.map((file) => (
              <tr
                key={file.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-4 font-medium">{file.name}</td>
                <td className="p-4 text-white/70">{file.folder}</td>
                <td className="p-4 text-white/70">{file.size}</td>
                <td className="p-4 text-white/70">{file.uploadedAt}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-5 text-2xl">
                    <HiOutlineEye className="cursor-pointer text-indigo-200 hover:text-white" />
                    <RiDownload2Fill className="cursor-pointer text-indigo-300 hover:text-white" />
                    <FaShareFromSquare className="cursor-pointer text-blue-500 hover:text-white" />
                    <MdDelete className="cursor-pointer text-red-600 hover:text-white" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty Hint (optional) */}
      {files.length === 0 && (
        <div className="flex flex-col items-center mt-24 opacity-70">
          <HistoryIcon size={64} className="text-violet-500 mb-4" />
          <p>No files uploaded yet</p>
        </div>
      )}
    </div>
    </>
  )
}

export default History