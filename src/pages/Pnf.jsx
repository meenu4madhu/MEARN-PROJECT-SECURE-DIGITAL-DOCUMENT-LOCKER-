import React from 'react'
import {  useNavigate } from 'react-router-dom'


function Pnf() {
  const navigate=useNavigate()
  return (
    <>
<div className='flex justify-center items-center flex-col my-10 text-white'> <img width={'500'} src="https://assets.dochipo.com/editor/animations/404-error/b6463d8b-ac87-42a7-ad59-6584a19a77a8.gif" alt="pnf" /> 
<p className='text-xs'>Oh No !</p> <h1 className='text-2xl my-3 font-bold'>Look Like You're Lost</h1> 
<p className='text-xs'>The page you are looking for is not available</p> <button  onClick={()=>navigate('/')} className='type:button my-3 text-white bg-black p-3 rounded'>Back Home</button> </div>
    </>
  )
}

export default Pnf