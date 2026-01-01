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
        <Route path='/user/trash' element={<Trashpage/>}/>
        <Route path='/user/complaint' element={<Complaintsubmit/>}/>
        <Route path="/user/folders" element={<FolderPage />} />

      </Routes>
  
    </>
  )
}

export default App
