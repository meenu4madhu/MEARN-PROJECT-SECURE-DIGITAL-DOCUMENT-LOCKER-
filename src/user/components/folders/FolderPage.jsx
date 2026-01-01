import { Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FolderPage() {
  const navigate = useNavigate();

  const folders = [
    { id: 1, name: "ID Proofs", files: 4 },
    { id: 2, name: "Certificates", files: 6 },
    { id: 3, name: "Bills", files: 2 },
    { id: 4, name: "Office Docs", files: 5 },
    { id: 5, name: "Personal", files: 8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950 p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">All Folders</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {folders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => navigate(`/user/folders/${folder.id}`)}
            className="p-6 rounded-2xl bg-white/10 border border-white/10
            hover:bg-white/20 transition cursor-pointer"
          >
            <Folder className="text-indigo-400 mb-3" size={32} />
            <h3 className="font-semibold">{folder.name}</h3>
            <p className="text-sm text-white/60">{folder.files} files</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderPage;
