import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { PieChart, ArrowUpRight, Plus, Filter, Search, TrendingUp } from "lucide-react";
import { getAllCryptos } from "../utils/api";

export default function Assets() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCryptos();
        setCryptos(response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Helmet>
        <title>Assets</title>
      </Helmet>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Portfolio</h1>
          <p className="text-slate-500 font-medium">Overview of your digital asset holdings</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-slate-50 hover:shadow-md transition-all">
            <Filter size={18} /> Filter
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            <Plus size={18} /> Add Funds
          </button>
        </div>
      </div>

      {/* Portfolio Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
         <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
               <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Total Balance</p>
               <h2 className="text-5xl font-bold mb-8">$42,850.12</h2>
               <div className="flex gap-8">
                  <div>
                     <p className="text-slate-400 text-xs font-bold uppercase mb-1">24h Change</p>
                     <p className="text-green-400 font-bold flex items-center gap-1">
                        <TrendingUp size={16} /> +$1,240.50 (2.8%)
                     </p>
                  </div>
                  <div>
                     <p className="text-slate-400 text-xs font-bold uppercase mb-1">Total Profit</p>
                     <p className="text-blue-400 font-bold">+$8,420.00</p>
                  </div>
               </div>
            </div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute right-10 bottom-10 opacity-20">
               <PieChart size={120} />
            </div>
         </div>
         <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-100 flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
               <Plus size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Buy more assets</h3>
            <p className="text-slate-500 text-sm mb-6">Instantly buy crypto with your cash balance or card.</p>
            <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
               Go to Trade <ArrowUpRight size={18} />
            </button>
         </div>
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Asset</th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Balance</th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Price</th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Value</th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Allocation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                [1, 2, 3, 4, 5].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="5" className="h-24 px-8">
                       <div className="h-12 bg-slate-50 rounded-2xl w-full"></div>
                    </td>
                  </tr>
                ))
              ) : (
                cryptos.slice(0, 10).map((crypto, i) => (
                  <tr key={crypto._id} className="hover:bg-slate-50/80 transition-all cursor-pointer group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <img src={crypto.image} alt="" className="w-8 h-8 rounded-full" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{crypto.name}</p>
                          <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">{crypto.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <p className="font-bold text-slate-900">{(0.5 * (i + 1)).toFixed(4)}</p>
                      <p className="text-xs text-slate-400 font-bold uppercase">{crypto.symbol}</p>
                    </td>
                    <td className="px-8 py-6 text-right font-bold text-slate-700">
                      ${crypto.price.toLocaleString()}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <p className="font-bold text-slate-900">${(crypto.price * 0.5 * (i + 1)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                      <p className="text-[10px] text-green-500 font-black">+2.4%</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col items-end gap-2">
                        <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" 
                            style={{ width: `${Math.max(10, 80 - i * 7)}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{Math.max(10, 80 - i * 7)}% of Total</span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}





