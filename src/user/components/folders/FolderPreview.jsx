import { Folder, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FolderPreview() {
  const navigate = useNavigate();

  const folders = [
    { id: 1, name: "ID Proofs", files: 4 },
    { id: 2, name: "Certificates", files: 6 },
    { id: 3, name: "Bills", files: 2 },
    { id: 4, name: "Office Docs", files: 5 },
  ];

  const latestFolders = folders.slice(0, 3);

  return (
    <div className="mx-4 p-6 rounded-2xl bg-white/10 border border-white/10 text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Folder className="text-indigo-400" />
          Folders
        </h2>

        <button
          onClick={() => navigate("/user/folders")}
          className="text-sm text-indigo-400 hover:underline flex items-center gap-1"
        >
          Explore more <ArrowRight size={14} />
        </button>
      </div>

      {/* Folder Cards */}
      <div className="grid gap-3">
        {latestFolders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center justify-between p-4 rounded-xl
            bg-black/40 hover:bg-white/10 transition cursor-pointer"
            onClick={() => navigate(`/user/folders/${folder.id}`)}
          >
            <div className="flex items-center gap-3">
              <Folder className="text-indigo-300" />
              <div>
                <p className="font-medium">{folder.name}</p>
                <span className="text-xs text-white/60">
                  {folder.files} files
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderPreview;
