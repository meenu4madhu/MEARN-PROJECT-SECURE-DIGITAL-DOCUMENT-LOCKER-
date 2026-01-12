
import { createContext, useContext, useState } from "react";
import { getfilesAPI, getHistoryfilesAPI } from "../services/allAPI"
// import { useParams } from "react-router-dom";

const FileAndFolderContext = createContext();
export  const FileProvider = ({ children }) => {
 
      
      const [files, setFiles] = useState([])
    //  const { folderId } = useParams();
      const handleGetFiles = async (folderId = null) => {
        const result = folderId
        ? await getfilesAPI(folderId)
        : await getHistoryfilesAPI();

      if (result.status === 200) {
        setFiles(result.data);
        }
        
       
        
      };
       
  return (
    <FileAndFolderContext.Provider value={{files,handleGetFiles}}>
        {children}
    </FileAndFolderContext.Provider>
  )
  }; 

export  const useFiles = () => useContext(FileAndFolderContext)