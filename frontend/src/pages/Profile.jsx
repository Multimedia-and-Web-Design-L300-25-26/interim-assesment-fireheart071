import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getProfile, logoutUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { User, Mail, Shield, LogOut, Loader2 } from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile();
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        localStorage.removeItem('token');
        navigate("/signin");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem('token');
      navigate("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
      localStorage.removeItem('token');
      navigate("/signin");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{user?.name}</h2>
                <p className="text-slate-500">Personal Account</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 space-y-8">
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Account Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <User className="text-slate-400" size={20} />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Full Name</p>
                    <p className="font-medium">{user?.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Mail className="text-slate-400" size={20} />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Email Address</p>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Security</h3>
              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Shield className="text-green-600" size={20} />
                  <div>
                    <p className="font-medium">Account Status</p>
                    <p className="text-sm text-slate-500">Verified and Secure</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Active</div>
              </div>
            </section>
            
            <div className="pt-4">
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-colors"
              >
                <LogOut size={20} />
                Sign out of all devices
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}





