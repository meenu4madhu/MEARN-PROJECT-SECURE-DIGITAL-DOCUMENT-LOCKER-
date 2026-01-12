import Adminsidebar from "../components/Adminsidebar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen  flex flex-col lg:flex-row bg-gradient-to-br from-black via-indigo-950 to-violet-950">
      
      {/* Sidebar */}
      <Adminsidebar />

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
