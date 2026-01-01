import React from 'react'

function Foldergrid() {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-6 rounded-2xl text-white hover:scale-105 transition">
    📁 Certificates
  </div>

  <div className="bg-zinc-800 p-6 rounded-2xl text-gray-300 border border-white/10">
    + Create Folder
  </div>
</div>

    </>
  )
}

export default Foldergrid