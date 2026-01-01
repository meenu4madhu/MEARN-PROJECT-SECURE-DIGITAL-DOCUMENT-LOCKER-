import React from 'react'
import { HardDrive } from "lucide-react";

function Storage() {
  
  return (
    <>

    <div className="p-6 ms-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <HardDrive className="text-violet-400" />
        <h2 className="text-lg font-semibold text-violet-500">Storage</h2>
      </div>

      <p className="text-sm text-white/70 mb-3">
        Used: 1.2GB / 5GB
      </p>

      <div className="w-full h-2 bg-white/10 rounded-full">
        <div className="h-2 w-[40%] bg-violet-500 rounded-full"></div>
      </div>
    </div>
  

    </>
  )
}

export default Storage