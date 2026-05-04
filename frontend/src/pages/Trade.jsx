import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeftRight, ChevronDown, Info, Search, Loader2 } from "lucide-react";
import { getAllCryptos } from "../utils/api";

export default function Trade() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [mode, setMode] = useState("Buy");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCryptos();
        setCryptos(response.data.data);
        if (response.data.data.length > 0) {
            setSelectedAsset(response.data.data[0]);
        }
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
        <title>Trade - {mode}</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Trade Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50">
            <div className="flex gap-6 mb-10 border-b border-slate-100/60">
              {['Buy', 'Sell', 'Convert'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMode(tab)}
                  className={`pb-4 text-sm font-bold transition-all relative ${
                    mode === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                  {mode === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {/* Input Amount Container */}
              <div className="group p-6 bg-slate-50/50 border border-slate-100 rounded-3xl hover:border-blue-500 hover:bg-white transition-all duration-300">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{mode}</p>
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="0"
                    className="text-4xl font-bold bg-transparent outline-none w-1/2 placeholder:text-slate-200"
                  />
                  <div className="bg-white border border-slate-100 px-4 py-2 rounded-2xl flex items-center gap-3 cursor-pointer hover:shadow-md transition-all">
                    <span className="text-sm font-bold text-slate-700">USD</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center -my-6 relative z-10">
                <div className="bg-white p-3 rounded-2xl border border-slate-100 text-blue-600 shadow-lg shadow-slate-200/50 hover:scale-110 transition-transform cursor-pointer">
                  <ArrowLeftRight size={22} className="rotate-90" />
                </div>
              </div>

              {/* Asset Selector Trigger */}
              <div className="group p-6 bg-slate-50/50 border border-slate-100 rounded-3xl hover:border-blue-500 hover:bg-white transition-all duration-300">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                  {mode === "Convert" ? "To" : "With"}
                </p>
                <div className="flex justify-between items-center">
                  {selectedAsset ? (
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img src={selectedAsset.image} className="w-10 h-10 rounded-full shadow-sm" alt="" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <span className="text-xl font-bold text-slate-900">{selectedAsset.name}</span>
                    </div>
                  ) : (
                    <div className="h-10 w-32 bg-slate-100 animate-pulse rounded-2xl" />
                  )}
                  <ChevronDown size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>

              {/* Details Panel */}
              <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-100">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-slate-500 font-semibold">1 {selectedAsset?.symbol} Price</span>
                  <span className="font-bold text-slate-900">${selectedAsset?.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-semibold">Payment method</span>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                     <span className="font-bold text-slate-900">Cash Balance</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className={`w-full text-white py-5 rounded-[24px] font-bold text-lg hover:-translate-y-0.5 active:translate-y-0 shadow-xl transition-all duration-300 ${
                mode === "Sell" ? "bg-red-600 hover:bg-red-700 shadow-red-100" : 
                mode === "Convert" ? "bg-slate-900 hover:bg-black shadow-slate-200" :
                "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
              }`}>
                {mode} {selectedAsset?.name}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Asset List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden flex flex-col h-full">
            <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Select Asset</h2>
                <p className="text-slate-500 text-sm font-medium">Choose a cryptocurrency to trade</p>
              </div>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="pl-12 pr-6 py-3.5 bg-slate-50 rounded-2xl text-sm outline-none border border-transparent focus:border-blue-500 focus:bg-white focus:shadow-md transition-all w-full md:w-64"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto max-h-[600px] no-scrollbar">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-4">
                  <Loader2 className="animate-spin text-blue-600" size={40} />
                  <p className="text-slate-400 font-bold animate-pulse">Loading markets...</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-50">
                  {cryptos.map((crypto) => (
                    <div
                      key={crypto._id}
                      onClick={() => setSelectedAsset(crypto)}
                      className={`p-6 flex items-center justify-between hover:bg-slate-50/80 transition-all cursor-pointer group ${
                        selectedAsset?._id === crypto._id ? 'bg-blue-50/40 border-l-4 border-blue-600' : 'border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <img src={crypto.image} className="w-8 h-8 rounded-full" alt="" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{crypto.name}</p>
                          <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">{crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900 text-lg">${crypto.price.toLocaleString()}</p>
                        <div className={`flex items-center justify-end gap-1 text-sm font-bold ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





