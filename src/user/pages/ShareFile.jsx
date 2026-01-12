import { useParams } from "react-router-dom";
import axios from "axios";
import { accessFileAPI } from "../../services/allAPI";



function ShareFile() {
  const { token } = useParams();

  const handleOpenFile = async () => {
    try {
      const res =await accessFileAPI(token)
    
      const blob = new Blob([res.data], {
        type: res.headers["content-type"]
      });

      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      
    } catch (err) {
      alert("Link expired or invalid");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleOpenFile}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Open File
      </button>
    </div>
  );
}

export default ShareFile;
