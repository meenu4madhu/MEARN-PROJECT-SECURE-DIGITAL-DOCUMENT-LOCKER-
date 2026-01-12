import { historyFiles } from "./files/historyData";
import { HiOutlineEye } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useFiles } from "../../../src/context/FileAndFolderContext"
import { useEffect } from "react";
import { viewFileAPI } from "../../services/allAPI";


function HistoryPreview() {

  const navigate = useNavigate();
  const { folderId } = useParams;
  const { files,handleGetFiles} = useFiles();
   const latestFiles = files.slice(-4).reverse();
   useEffect(() => {
        handleGetFiles()
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
  

  return (
    <>
    <div className="p-9 ml-30 mr-20 rounded-2xl bg-white/10 border border-white/10 text-white">
      <div className="flex  justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-violet-500">Recent Files</h2>
        <button
          onClick={() => navigate("/user/history")}
          className="text-sm text-indigo-400 hover:underline"
        >
          View more →
        </button>
      </div>

      <div className="space-y-3 ">
        {latestFiles?.map(file => (
          <div
            key={file?._id}
            className="flex justify-between items-center p-3 rounded-lg bg-black/30 hover:bg-white/5"
          >
            <div>
              <p className="font-medium">{file?.filename}</p>
              <span className="text-xs text-white/60"></span>
            </div>
            <HiOutlineEye onClick={() => handleView(file._id)} className="text-indigo-300 text-xl cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
export default HistoryPreview