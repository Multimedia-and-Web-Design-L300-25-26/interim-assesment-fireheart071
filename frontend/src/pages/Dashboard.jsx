import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { TrendingUp, TrendingDown, ArrowUpRight, Plus, Info } from "lucide-react";
import { getAllCryptos } from "../utils/api";

export function Dashboard() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await getAllCryptos();
        setCryptos(response.data.data.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch cryptos", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCryptos();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {/* Hero Portfolio Section */}
      <div className="mb-12">
        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Total Portfolio Value</p>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">$24,402.18</h1>
          <div className="flex items-center gap-2 pb-1.5">
             <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm shadow-green-100">
                <TrendingUp size={16} />
                +2.5%
             </div>
             <span className="text-slate-400 text-sm font-medium">past 24h</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-10">
          {/* Chart Section */}
          <div className="bg-white p-8 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-100/50 min-h-[450px] flex flex-col group">
            <div className="flex items-center justify-between mb-10">
              <div className="flex p-1 bg-slate-50 rounded-2xl">
                {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map(t => (
                  <button key={t} className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${t === '1M' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 hover:text-blue-500 transition-colors cursor-pointer">
                <Info size={18} />
              </div>
            </div>
            
            {/* Dynamic Chart Mockup */}
            <div className="grow flex items-end gap-2 px-2 h-56">
               {[40, 45, 38, 52, 60, 58, 65, 75, 70, 85, 80, 95, 100, 90, 110, 105, 120].map((h, i) => (
                 <div 
                   key={i} 
                   className="grow bg-blue-600/5 rounded-t-xl hover:bg-blue-600/20 transition-all cursor-pointer relative group/bar" 
                   style={{ height: `${h}%` }}
                 >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 text-white text-[10px] font-black py-1.5 px-3 rounded-lg opacity-0 group-hover/bar:opacity-100 pointer-events-none whitespace-nowrap z-20 shadow-xl transition-all translate-y-2 group-hover/bar:translate-y-0">
                      ${(24000 + h * 10).toLocaleString()}
                    </div>
                    {i === 16 && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 border-2 border-white rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse" />
                    )}
                 </div>
               ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center">
               <div className="flex gap-10">
                  <div>
                     <p className="text-slate-400 text-[10px] font-black uppercase mb-1">Low</p>
                     <p className="font-bold text-slate-900">$23,104.20</p>
                  </div>
                  <div>
                     <p className="text-slate-400 text-[10px] font-black uppercase mb-1">High</p>
                     <p className="font-bold text-slate-900">$25,890.12</p>
                  </div>
               </div>
               <button className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Full details <ArrowUpRight size={16} />
               </button>
            </div>
          </div>

          {/* Watchlist Section */}
          <section>
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="text-2xl font-bold text-slate-900">Watchlist</h2>
              <button className="text-blue-600 text-sm font-bold hover:underline bg-blue-50 px-4 py-2 rounded-full transition-all">View all markets</button>
            </div>
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50 bg-slate-50/30">
                    <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Asset</th>
                    <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Price</th>
                    <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Change</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {loading ? (
                    [1, 2, 3].map(i => (
                      <tr key={i} className="animate-pulse">
                        <td colSpan="4" className="h-24 px-8">
                           <div className="h-12 bg-slate-50 rounded-2xl w-full"></div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    cryptos.map((crypto) => (
                      <tr key={crypto._id} className="hover:bg-slate-50/80 transition-all group cursor-pointer">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                               <img src={crypto.image} alt="" className="w-8 h-8 rounded-full" />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{crypto.name}</p>
                              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{crypto.symbol}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right font-bold text-slate-900 text-lg">
                          ${crypto.price.toLocaleString()}
                        </td>
                        <td className="px-8 py-6 text-right">
                           <span className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold ${crypto.change24h >= 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                              {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                           </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                            <ArrowUpRight size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-10">
           {/* Promo Card */}
           <div className="bg-linear-to-br from-blue-600 to-blue-800 p-10 rounded-[48px] text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
              <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-3">Claim your <br /> free rewards</h3>
                 <p className="text-blue-100 text-sm mb-8 leading-relaxed">Learn about new assets and get $10 worth of rewards to get started.</p>
                 <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
                   Start earning
                 </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
           </div>

           {/* Transactions Sidebar */}
           <div className="bg-white p-8 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-100/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900">Activity</h3>
                <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:underline">History</button>
              </div>
              <div className="space-y-8">
                {[
                  { type: 'Bought', asset: 'Bitcoin', amount: '0.0024 BTC', price: '$150.00', date: 'Oct 24', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { type: 'Received', asset: 'Ethereum', amount: '0.05 ETH', price: '$120.50', date: 'Oct 22', color: 'text-green-600', bg: 'bg-green-50' },
                  { type: 'Sold', asset: 'Solana', amount: '12.5 SOL', price: '$450.00', date: 'Oct 20', color: 'text-red-600', bg: 'bg-red-50' }
                ].map((tx, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-pointer">
                    <div className={`w-12 h-12 ${tx.bg} rounded-2xl flex items-center justify-center ${tx.color} group-hover:scale-110 transition-transform`}>
                       {tx.type === 'Bought' ? <Plus size={20} /> : tx.type === 'Sold' ? <TrendingDown size={20} /> : <TrendingUp size={20} />}
                    </div>
                    <div className="grow">
                      <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{tx.type} {tx.asset}</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">{tx.date} · {tx.amount}</p>
                    </div>
                    <p className="font-bold text-slate-900">{tx.price}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 bg-slate-50 text-slate-400 text-sm font-bold rounded-2xl hover:bg-slate-100 hover:text-slate-600 transition-all border border-slate-100">
                 View all transactions
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}





