import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  PieChart, 
  ArrowLeftRight, 
  Compass, 
  Wallet, 
  User, 
  Bell, 
  Search, 
  Menu, 
  X,
  LogOut,
  ChevronDown
} from "lucide-react";
import { getProfile, logoutUser } from "../../utils/api";

export function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile();
        setUser(response.data);
      } catch (err) {
        navigate("/signin");
      }
    };
    fetchUser();
  }, [navigate]);

  const navItems = [
    { name: "Home", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Assets", icon: PieChart, path: "/dashboard/assets" },
    { name: "Trade", icon: ArrowLeftRight, path: "/dashboard/trade" },
    { name: "Explore", icon: Compass, path: "/dashboard/explore" },
    { name: "Web3", icon: Wallet, path: "/dashboard/web3" },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('token');
      navigate("/signin");
    } catch (err) {
      localStorage.removeItem('token');
      navigate("/signin");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-slate-100 flex-col sticky top-0 h-screen">
        <div className="p-6">
          <Link to="/">
            <img src="/logo.png" className="h-8 w-8 text-blue-600" alt="" />
          </Link>
        </div>

        <nav className="grow px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === item.path 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
           <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer group relative">
             <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
               {user?.name?.charAt(0).toUpperCase()}
             </div>
             <div className="grow min-w-0">
               <p className="text-sm font-semibold text-slate-900 truncate">{user?.name}</p>
             </div>
             <ChevronDown size={16} className="text-slate-400" />
             
             {/* Simple Tooltip/Menu on hover */}
             <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-slate-100 shadow-xl rounded-2xl p-2 hidden group-hover:block">
                <Link to="/profile" className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg text-sm text-slate-600">
                  <User size={16} /> Profile Settings
                </Link>
                <button onClick={handleLogout} className="w-full flex items-center gap-2 p-2 hover:bg-red-50 rounded-lg text-sm text-red-600">
                  <LogOut size={16} /> Sign out
                </button>
             </div>
           </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white sticky top-0 z-50">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} className="text-slate-600" />
        </button>
        <Link to="/">
          <img src="/logo.png" className="h-8 w-8" alt="" />
        </Link>
        <button>
          <Bell size={24} className="text-slate-600" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-100 md:hidden">
          <div className="w-4/5 h-full bg-white p-6 slide-in-left">
            <div className="flex justify-between items-center mb-8">
              <img src="/logo.png" className="h-8 w-8" alt="" />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-lg font-semibold text-slate-900"
                >
                  <item.icon size={24} className="text-slate-500" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-slate-100">
                <Link to="/profile" className="flex items-center gap-4 text-lg font-semibold text-slate-900 mb-4">
                  <User size={24} className="text-slate-500" />
                  Profile
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-4 text-lg font-semibold text-red-600">
                  <LogOut size={24} />
                  Sign out
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="grow flex flex-col min-w-0">
        {/* Top bar for search and notifications (Desktop) */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 border-b border-slate-100">
          <div className="w-1/2 max-w-md">
            <div className="flex items-center bg-slate-50 rounded-full px-4 py-2 border border-transparent focus-within:border-blue-500 transition-all">
              <Search size={18} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search for an asset" 
                className="bg-transparent border-none outline-none ml-3 w-full text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full">
              <Bell size={20} />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-700">
              Buy / Sell
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-4 md:p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}




