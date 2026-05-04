import React from "react";
import { ChevronsUpDown, Loader2 } from "lucide-react";

function MiniSpark({ points = [], color = "#16a34a" }) {
  if (!points || points.length === 0) {
    // Generate dummy points if none provided
    points = [1, 2, 1.5, 3, 2.5, 4];
  }
  const w = 64;
  const h = 28;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => {
      const x = Math.round(i * step);
      const y = Math.round(h - ((p - min) / range) * (h - 6) - 3);
      return `${i === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-16 h-6 inline-block">
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const CryptoTable = ({ cryptos = [], loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Crypto market prices</h2>
        <div className="text-sm text-slate-600">Updated just now</div>
      </div>
      <div className="overflow-x-auto min-h-[200px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
             <Loader2 className="animate-spin text-blue-600" size={40} />
             <p className="text-slate-500 font-medium">Loading assets...</p>
          </div>
        ) : (
          <table className="min-w-full text-left">
            <thead className="text-slate-500 text-sm">
              <tr>
                <th className="px-4 py-3 w-8" />
                <th className="px-4 py-3">Asset <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
                <th className="px-4 py-3 text-right">Market price <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
                <th className="px-4 py-3">Chart</th>
                <th className="px-4 py-3">Change <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
                <th className="px-4 py-3 hidden md:table-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cryptos.map((crypto) => (
                <tr key={crypto._id} className="border-t border-slate-100 hover:bg-slate-50 group transition-colors">
                  <td className="px-4 py-4 text-sm text-slate-400 hover:text-yellow-500 cursor-pointer">☆</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img src={crypto.image} alt={crypto.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <div className="font-bold text-slate-900">{crypto.name}</div>
                        <div className="text-sm text-slate-500">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-bold text-slate-900 text-right">
                    ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-4 py-4">
                    <MiniSpark 
                      points={crypto.change24h >= 0 ? [1, 2, 1.5, 3, 2.5, 4] : [4, 3, 3.5, 2, 2.5, 1]} 
                      color={crypto.change24h >= 0 ? "#16a34a" : "#dc2626"} 
                    />
                  </td>
                  <td className={`px-4 py-4 font-bold ${crypto.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h}%
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 shadow-sm">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {!loading && cryptos.length === 0 && (
         <div className="p-10 text-center text-slate-500">No assets found matching your search.</div>
      )}
      <div className="p-4 border-t border-slate-100 text-sm text-slate-500">
        Showing {cryptos.length} assets
      </div>
    </div>
  );
};

export default CryptoTable;




