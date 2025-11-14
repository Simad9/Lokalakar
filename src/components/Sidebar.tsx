import { Home, Map, Bookmark, MessageSquare, Settings, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Map, label: "Peta", path: "/map" },
    { icon: Bookmark, label: "Simpan Tempat", path: "/saved" },
    { icon: MessageSquare, label: "Review Saya", path: "/reviews" },
    { icon: Settings, label: "Pengaturan", path: "/settings" },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth state here if needed
    navigate("/");
  };

  return (
    <aside className="w-64 bg-sidebar text-white flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="LOKALAKAR" className="h-10 w-10 brightness-0 invert" />
          <span className="text-xl font-bold">LOKALAKAR</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-sidebar-hover hover:text-white transition-colors"
            activeClassName="bg-sidebar-hover text-white font-medium"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-6 py-4 text-white/80 hover:bg-sidebar-hover hover:text-white transition-colors border-t border-white/10"
      >
        <LogOut className="h-5 w-5" />
        <span>Keluar</span>
      </button>
    </aside>
  );
};

export default Sidebar;
