
import { RiDownload2Fill } from "react-icons/ri";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi2";
import { History as HistoryIcon } from "lucide-react";
import { ArrowLeft} from "lucide-react";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFiles } from "../../../src/context/FileAndFolderContext"
import { deleteFileAPI, shareFileAPI, viewFileAPI } from "../../services/allAPI";



function History() {
  const navigate = useNavigate();
  const { folderId } = useParams();
  const { files,handleGetFiles} = useFiles();
   useEffect(() => {
        handleGetFiles(folderId)
      }, [folderId]);
    
const handleView = async (fileId) => {
  const response = await viewFileAPI(fileId); // responseType: 'blob'

  if (response.status === 200) {
    // Use the correct MIME type from the response headers
    const contentType = response.headers["content-type"];
    const blob = new Blob([response.data], { type: contentType });

    // Open in new tab
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  } else {
    console.log("error:", response);
  }
};



const handleShare = async (fileId) => {
  try {
    const res = await shareFileAPI(fileId);

    if (res?.status === 200 && res.data?.shareUrl) {
      // copy link
      await navigator.clipboard.writeText(res.data.shareUrl);

      // OPEN share page
      window.open(res.data.shareUrl, "_blank");

    } else {
      alert("Failed to share file");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

const handleDelete = async (fileId) => {
  if (!window.confirm("Are you sure you want to delete this file?")) return;

  const result = await deleteFileAPI(fileId);

  if (result.status === 200) {
    handleGetFiles(folderId); 
  }
};



  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950  p-2 text-white">

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
              <th className="p-4">Uploaded</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            
            {
             
            [...files].reverse()?.map((file) => (
              <tr
                key={file?._id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-4 font-medium">{file?.filename}</td>
                <td className="p-4 text-white/70">{new Date(file.createdAt).toLocaleString()}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-8 text-3xl">
                    {/* <HiOutlineEye onClick={() => handleView(file._id)} className="cursor-pointer text-indigo-200 hover:text-white" /> */}
                    <RiDownload2Fill onClick={() => handleView(file._id)} className="cursor-pointer text-indigo-300 hover:text-white" />
                    <FaShareFromSquare onClick={() => handleShare(file._id)} className="cursor-pointer text-blue-500 hover:text-white" />
                    <MdDelete  onClick={() => handleDelete(file._id)} className="cursor-pointer text-red-600 hover:text-white" />
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