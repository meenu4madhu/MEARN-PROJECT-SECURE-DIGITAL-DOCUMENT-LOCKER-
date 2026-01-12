import React, { useState,useContext } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';



function Auth({insideRegister}) {
  const navigate = useNavigate()
  //  const{role,setAuthorised}=useContext()
  const [viewPassword,setViewPassword]=useState(false)
  const [userDetails,setuserDetails]=useState({
    username:"",email:"",password:""
  })

  const handleRegister=async(e)=>{
     e.preventDefault()
    const {username,email,password}=userDetails
    if(email && password && username)
    {
      // toast.success("API Call")
      try{
    const result = await registerAPI(userDetails)
    console.log(result);
    if(result.status==200){
      toast.success("Register Successfully...Please login to SecureDoc!!")
      setuserDetails({username:"",email:"",password:""})
      navigate('/login')
    }
    else if(result.status==409){
    toast.warning(result.response.data)
     setuserDetails({username:"",email:"",password:""})
      navigate('/login')
    }
    else{
      console.log(result);
      toast.error("Something went wrong!")
       setuserDetails({username:"",email:"",password:""})
    }
    
      }catch(err){
    console.log(err);
    
      }

    }
    else{
      toast.info("Please fill the form completely!!")
    }
  }
   // handle login
   const handleLogin=async(e)=>{
     e.preventDefault()
    const {email,password}=userDetails
    if(email && password)
    {
      // toast.success("API Call")
      try{
  //api call 
    const result = await loginAPI(userDetails)
    console.log(result)
    if(result.status==200){
       toast.success("Login Successfull..")
       sessionStorage.setItem("token",result.data.token)
       sessionStorage.setItem("user",JSON.stringify(result.data.user))
      //  setAuthorised(true)
       setTimeout(()=>{
        if(result.data.user.role=="admin"){
        navigate('/admin/dashboard')
        }
        else{
          navigate('/user-dashboard')
        }
       },2500)
       
    }
    
    else if(result.status==401 || result.status==404){
    toast.warning(result.response.data)
    setuserDetails({username:"",email:"",password:""})
    }
    else{
      toast.error("Something went wrong!!")
      setuserDetails({username:"",email:"",password:""})
    }
      }catch(err){
    console.log(err);
    
      }

    }
    else{
      toast.info("Please fill the form completely!!")
    }
  }
  
  return (
    <>
     <div className='w-full min-h-screen  flex justify-center items-center flex-col' style={{backgroundImage:'url("https://files.123freevectors.com/wp-content/original/106944-indigo-abstract.jpg")',backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100vh'}}>
   <div className='w-full h-full  flex justify-center items-center '>
    <div className="p-10 shadow-white">
    <h1 className="text-3xl font-bold text-indigo-200 text-center">SecureDoc</h1>
    <div style={{width:'400px'}} className=" border rounded-2xl bg-white/60  border-indigo-700 text-white p-5 flex flex-col justify-center items-center my-5">
<div style={{width:'100px', height:'100px' ,borderRadius:'50%'}} className='border   mb-5 flex  justify-center items-center border-indigo-700'>
  <FaUser className='text-3xl text-indigo-700'/>
</div>
<h2 className="text-2xl text-indigo-700">{insideRegister?"Register":"Login"}</h2>
<form className="my-5 w-full">

     {/* username */}{
    insideRegister&&
    <input value={userDetails.username} onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})} type="text" placeholder='User Name'  className='bg-white text-indigo-700 placeholder-gray-400 w-full p-2 rounded border border-indigo-700 mt-5' />
     }
  {/* email */}
  <input value={userDetails.email} onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})} type="email"  placeholder='Email ID' className='bg-white border border-indigo-700 text-indigo-700 placeholder-gray-400 w-full p-2 rounded my-5' />
  {/* password */}
  <div className="flex items-center">
    <input value={userDetails.password}  onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})} type={viewPassword ?"text":"password"} placeholder='Password' className='bg-white border border-indigo-700 text-indigo-700 placeholder-gray-400 w-full p-2 rounded mb-5'/>
    {
      viewPassword ?
   <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
   :
    <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px',marginTop:'-20px'}}/>
   
    }
    
  </div>
  {/* forgot pswd */}
  
   
    <div className="flex justify-between mb-5">
      <p className="text-sm text-yellow-600">*Never share your password with others</p>
    { !insideRegister &&  <button className='text-xs text-indigo-700 underline'>Forgot Password</button>}
    </div>
  
  {/* login btn */}
  
    <div className="text-center text-indigo-200">
   {
    insideRegister ?
    <button type='button' onClick={handleRegister} className='bg-indigo-700 p-2 w-full rounded-xl border border-indigo-900'>Register</button>
    :
    <button type='button' onClick={handleLogin}  className='bg-indigo-700 p-2 w-full rounded'>Login</button>
   }
    </div>
  {/* google authentication */}
  <div className="text-center my-5">
    { !insideRegister && <p className='text-indigo-500'>----------------------------or-------------------------------</p>
    }
   
  </div>
  <div className="my-5 text-center">
    {
      insideRegister ?
      <p className="text-indigo-700">Already a user ? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
      :
      <p className="text-indigo-700">Are you a new user ? <Link to={'/register'} className='underline ms-5'>register</Link></p>
    }
  </div>
</form>
    </div>
   </div>
   </div>
    {/* toast */}
   <ToastContainer
position="top-center"
autoClose={2000}
theme="colored"
/>
 
   </div>
</>
  )
}

export default Auth