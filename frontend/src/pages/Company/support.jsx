import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { HelpCircle, Search, MessageCircle, Phone, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export default function Support() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Coinbase Help Center — Coinbase Clone</title>
      </Helmet>

      {/* Hero / Search Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb] text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
             <HelpCircle size={20} />
             <span>Support Center</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto w-full mt-4">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
             <input 
               type="text" 
               placeholder="Search for help articles..." 
               className="w-full pl-16 pr-8 py-6 bg-white rounded-3xl shadow-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-lg"
             />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="text-blue-600" />, title: "Account Security", desc: "Secure your account and 2FA" },
              { icon: <FileText className="text-blue-600" />, title: "Verifying Identity", desc: "KYC and ID verification help" },
              { icon: <Zap className="text-blue-600" />, title: "Trading & Funding", desc: "Buy, sell, and deposit crypto" },
              { icon: <Wallet className="text-blue-600" />, title: "Coinbase Wallet", desc: "Help with self-custody" }
            ].map((link, i) => (
              <div key={i} className="p-8 rounded-[32px] border border-gray-100 hover:bg-gray-50 hover:border-blue-100 transition-all cursor-pointer group">
                 <div className="mb-6 group-hover:scale-110 transition-transform">{link.icon}</div>
                 <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Topics */}
      <section className="py-20 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-bold mb-12">Common Topics</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "How to reset your password",
                "Why is my account restricted?",
                "How to link a bank account",
                "Understanding network fees",
                "How to contact Coinbase support",
                "Reporting a suspicious email"
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-500/20 cursor-pointer group transition-all">
                   <span className="font-medium group-hover:text-blue-600">{topic}</span>
                   <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-600" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl font-medium mb-16">Still need help?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="p-12 rounded-[48px] bg-blue-600 text-white flex flex-col items-center gap-6">
                 <MessageCircle size={48} />
                 <h3 className="text-3xl font-bold">Live Chat</h3>
                 <p className="text-blue-100">Average wait time: 2 minutes</p>
                 <Button text="Start Chat" className="bg-white text-blue-600 px-10 py-4 font-bold rounded-xl mt-4" />
              </div>
              <div className="p-12 rounded-[48px] border border-gray-100 flex flex-col items-center gap-6">
                 <Phone size={48} className="text-blue-600" />
                 <h3 className="text-3xl font-bold">Call Us</h3>
                 <p className="text-gray-500">Available 24/7 for urgent issues</p>
                 <Button blue text="View Phone Numbers" className="px-10 py-4 font-bold rounded-xl mt-4" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

// Internal Wallet icon fix
function Wallet(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

