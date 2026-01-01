import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
function Complaint() {
  return (
    <>
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare className="text-indigo-600" />
        <h2 className="text-lg font-semibold text-indigo-600">Complaints</h2>
      </div>

      <p className="text-sm text-white/70 mb-4">
        Raise issues and track admin responses
      </p>

      <Link
        to='/user/complaint'
        className="inline-block px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
      >
        My Complaints
      </Link>
    </div>
    </>
  )
}

export default Complaint