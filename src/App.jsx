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
import ProtectedRoute from "./components/ProtectedRoute";




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
        <Route path='/user-dashboard' element={
          <ProtectedRoute allowedRole="user">
         <Userdashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </ProtectedRoute> }/>
        <Route path='/user/storage' element={<ProtectedRoute allowedRole="user"><Storage/></ProtectedRoute>}/>
        <Route path='/user/history' element={<ProtectedRoute allowedRole="user"><History/></ProtectedRoute>}/>
        <Route path="/user/folder/:folderId" element={<ProtectedRoute allowedRole="user"><History /></ProtectedRoute>} />
        <Route path='/user/trash' element={<ProtectedRoute allowedRole="user"><Trashpage/></ProtectedRoute>}/>
        <Route path='/submit-complaint' element={<ProtectedRoute allowedRole="user"><Complaintsubmit/></ProtectedRoute>}/>
        <Route path="/user/allfolders" element={<ProtectedRoute allowedRole="user"><FolderPage /></ProtectedRoute>} />
       

        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRole="admin"><Admindashboard /></ProtectedRoute>} />
        <Route path="/admin/all-users" element={<ProtectedRoute allowedRole="admin"><Userslist /></ProtectedRoute>} />
        <Route path="/admin/view-complaints" element={<ProtectedRoute allowedRole="admin"><Complaintsview /></ProtectedRoute>} />
        <Route path="/admin/storage" element={<ProtectedRoute allowedRole="admin"><Adminstorage /></ProtectedRoute>} />

        

      </Routes>
  
    </>
  )
}

export default App
