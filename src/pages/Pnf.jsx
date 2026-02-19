import React from 'react'
import {  useNavigate } from 'react-router-dom'


function Pnf() {
  const navigate=useNavigate()
  return (
    <>
<div className='flex justify-center items-center flex-col my-10 text-white'> <img width={'500'} src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299959.gif" alt="pnf" /> 
<p className='text-xs'>Oh No !</p> <h1 className='text-2xl my-3 font-bold'>Look Like You're Lost</h1> 
<p className='text-xs'>The page you are looking for is not available</p> <button  onClick={()=>navigate('/')} className='type:button my-5 text-white bg-blue-400 p-3 rounded'>Back Home</button> </div>
    </>
  )
}

export default Pnf