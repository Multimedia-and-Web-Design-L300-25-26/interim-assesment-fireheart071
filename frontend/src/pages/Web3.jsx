import React from "react";
import { Helmet } from "react-helmet-async";
import { Wallet, Globe, Shield, Sparkles, ExternalLink } from "lucide-react";

export default function Web3() {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>Web3</title>
      </Helmet>

      <div className="bg-linear-to-r from-blue-700 to-indigo-800 rounded-[40px] p-8 md:p-16 text-white mb-12 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
           <div className="flex items-center gap-2 mb-6">
              <Sparkles size={20} className="text-blue-300" />
              <span className="text-sm font-bold uppercase tracking-widest text-blue-200">The New Internet</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Explore the Web3 world</h1>
           <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">Connect to decentralized apps, collect NFTs, and discover the next generation of finance with  Wallet.</p>
           <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20">
              Launch Web3 Browser
           </button>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
           <Globe size={400} className="translate-x-20 -translate-y-20 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
               <Wallet size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Self-Custody Wallet</h3>
            <p className="text-slate-500 mb-6">Your keys, your crypto. Take full control of your digital assets and identity.</p>
            <a href="#" className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
               Setup Wallet <ExternalLink size={14} />
            </a>
         </div>

         <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
               <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">DeFi Portfolio</h3>
            <p className="text-slate-500 mb-6">Earn yield, provide liquidity, and manage your DeFi positions across multiple chains.</p>
            <a href="#" className="flex items-center gap-2 text-indigo-600 font-bold text-sm hover:underline">
               Explore DeFi <ExternalLink size={14} />
            </a>
         </div>

         <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
               <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">NFT Gallery</h3>
            <p className="text-slate-500 mb-6">Browse and manage your digital collectibles from OpenSea and other major marketplaces.</p>
            <a href="#" className="flex items-center gap-2 text-purple-600 font-bold text-sm hover:underline">
               View Gallery <ExternalLink size={14} />
            </a>
         </div>
      </div>
    </div>
  );
}





