import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";



function Trash() {
  return (
    <>
     <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <Trash2 className="text-red-500" />
        <h2 className="text-lg font-semibold text-red-500">Trash</h2>
      </div>

      <p className="text-sm text-white/70 mb-4">
        Deleted files (auto removed after 30 days)
      </p>

      <Link
        to="/user/trash"
        className="inline-block px-4 py-2 rounded-lg bg-red-500 hover:bg-red-700 transition"
      >
        Open Trash
      </Link>
  
    </div>
    </>
  )
}

export default Trash