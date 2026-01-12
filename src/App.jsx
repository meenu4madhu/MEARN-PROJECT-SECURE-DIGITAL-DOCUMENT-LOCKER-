import {  Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Userdashboard from "./user/pages/Userdashboard"
import Storage from "./user/pages/Storage"
import Complaint from "./user/pages/Complaint"
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Auth from "./pages/Auth"
import Trashpage from "./user/pages/Trashpage"
import Complaintsubmit from "./user/pages/Complaintsubmit"
import History from "./user/pages/History"
import FolderPage from "./user/components/folders/FolderPage"
import Admindashboard from "./admin/pages/Admindashboard"
import Userslist from "./admin/pages/Userslist"
import Complaintsview from"./admin/pages/Complaintsview"
import Adminstorage from"./admin/pages/Adminstorage"
import ShareFile from "./user/pages/ShareFile"



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/user-dashboard' element={ <Userdashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}/>
        <Route path='/user/storage' element={<Storage/>}/>
        <Route path='/user/history' element={<History/>}/>
        <Route path="/user/folder/:folderId" element={<History />} />
        <Route path='/user/trash' element={<Trashpage/>}/>
        <Route path='/submit-complaint' element={<Complaintsubmit/>}/>
        <Route path="/user/allfolders" element={<FolderPage />} />
        <Route path="/share/:token" element={<ShareFile />} />


        <Route path="/admin/dashboard" element={<Admindashboard />} />
        <Route path="/admin/all-users" element={<Userslist />} />
        <Route path="/admin/view-complaints" element={<Complaintsview />} />
        <Route path="/admin/storage" element={<Adminstorage />} />

        

      </Routes>
  
    </>
  )
}

export default App
