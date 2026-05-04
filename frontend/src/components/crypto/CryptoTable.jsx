import React from "react";
import {ChevronsUpDown} from "lucide-react";

const rows = [
  { id: 1, name: "Bitcoin Cash", symbol: "BCH", price: "GHS 4,827.01", change: "-1.21%", series: [1,2,3,2,3,4,3,4,3], color: "#16a34a", market: "GHS 96.9B", volume: "GHS 2.9B" },
  { id: 2, name: "UNUS SED LEO", symbol: "LEO", price: "GHS 97.59", change: "+0.24%", series: [1,1.5,2,1.8,2.3,2.6,2.8], color: "#0ea5e9", market: "GHS 89.9B", volume: "GHS 7.3M" },
  { id: 3, name: "Hyperliquid", symbol: "HYPE", price: "GHS 333.13", change: "+1.78%", series: [2,2.3,2.1,2.5,2.8,3], color: "#16a34a", market: "GHS 86.3B", volume: "GHS 2.5B" },
];

function MiniSpark({ points = [], color = "#16a34a" }) {
  if (!points || points.length === 0) return null;
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

export const CryptoTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Crypto market prices</h2>
        <div className="text-sm text-slate-600">Updated just now</div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="text-slate-500 text-sm">
            <tr>
              <th className="px-4 py-3 w-8" />
              <th className="px-4 py-3">Asset <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
              <th className="px-4 py-3">Market price <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
              <th className="px-4 py-3">Chart</th>
              <th className="px-4 py-3">Change <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
              <th className="px-4 py-3">Mkt cap <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
              <th className="px-4 py-3">Volume <span className="inline-block align-middle"><ChevronsUpDown size={14} className="inline-block ml-1" /></span></th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 text-sm text-slate-500">☆</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-700">
                      {r.symbol}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{r.name}</div>
                      <div className="text-sm text-slate-500">{r.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 font-medium text-slate-900">{r.price}</td>
                <td className="px-4 py-4"><MiniSpark points={r.series} color={r.color} /></td>
                <td className={`px-4 py-4 ${r.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{r.change}</td>
                <td className="px-4 py-4 text-slate-700">{r.market}</td>
                <td className="px-4 py-4 text-slate-700">{r.volume}</td>
                <td className="px-4 py-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 shadow">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-slate-100 text-sm text-slate-500">Showing top {rows.length} assets</div>
    </div>
  );
};

export default CryptoTable;
