import React from "react";
import MarketStats from "../components/crypto/MarketStats";
import CryptoTable from "../components/crypto/CryptoTable";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Sidebar = () => (
  <div className="space-y-6">
  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-lg shadow-md border border-transparent">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold">Get started</h4>
          <div className="mt-2 text-sm">Create your account today</div>
        </div>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full" />
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-white text-blue-600 px-3 py-2 rounded-full text-sm font-semibold">Sign up</button>
      </div>
    </div>

    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-sm font-semibold">Top movers</h5>
          <div className="text-xs text-slate-500">24hr change</div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <button className="p-1 rounded-full hover:bg-slate-100"><ChevronLeft size={16} /></button>
          <button className="p-1 rounded-full hover:bg-slate-100"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="mt-3">
      <div className="flex gap-3 overflow-x-auto no-scrollbar items-stretch py-1">
          <div className="min-w-[160px] bg-slate-100 rounded-xl p-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">F</div>
              <div>
                <div className="text-sm font-medium">FAI</div>
                <div className="text-xs text-slate-500">GHS 0.0866</div>
              </div>
            </div>
            <div className="mt-2 text-sm text-green-600 font-semibold">▲ 25.72%</div>
          </div>

          <div className="min-w-[160px] bg-slate-100 rounded-xl p-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs">P</div>
              <div>
                <div className="text-sm font-medium">POLS</div>
                <div className="text-xs text-slate-500">GHS 0.65</div>
              </div>
            </div>
            <div className="mt-2 text-sm text-red-600 font-semibold">▼ 24.52%</div>
          </div>

          <div className="min-w-[160px] bg-slate-100 rounded-xl p-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">PR</div>
              <div>
                <div className="text-sm font-medium">PRCL</div>
                <div className="text-xs text-slate-500">GHS 0.17</div>
              </div>
            </div>
            <div className="mt-2 text-sm text-red-600 font-semibold">▼ 18.25%</div>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-sm font-semibold">New on Coinbase</h5>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <button className="p-1 rounded-full hover:bg-slate-100"><ChevronLeft size={16} /></button>
          <button className="p-1 rounded-full hover:bg-slate-100"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          <div className="min-w-[140px] bg-slate-100 rounded-xl p-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">H</div>
              <div>
                <div className="text-sm font-medium">HYPE</div>
                <div className="text-xs text-slate-500">Hyperliquid · Added Feb 5</div>
              </div>
            </div>
          </div>

          <div className="min-w-[140px] bg-slate-100 rounded-xl p-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">J</div>
              <div>
                <div className="text-sm font-medium">JUPITER</div>
                <div className="text-xs text-slate-500">Added Dec 9</div>
              </div>
            </div>
          </div>

          <div className="min-w-[140px] bg-slate-100 rounded-xl p-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">L</div>
              <div>
                <div className="text-sm font-medium">LIGHTER</div>
                <div className="text-xs text-slate-500">Added Jan 15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function Explore() {
  return (
    <div className="bg-slate-50 py-8">
        <Helmet>
            <title>Explore — Coinbase Clone</title>
          </Helmet>
      <div className="container mx-auto px-4">

        {/* header moved into main column so it aligns with stats and sidebar */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
              <div>
                <h1 className="text-2xl font-bold">Explore crypto</h1>
                <div className="mt-1 text-sm text-slate-600">Coinbase 50 Index is down <span className="text-red-600">↓ 0.14%</span> <span className="text-slate-400">(24hrs)</span></div>
              </div>
              <div className="w-3/4 md:w-1/3 lg:w-2/5">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search size={16} className="text-slate-400" />
                  <input aria-label="Search" className="ml-3 w-full outline-none placeholder-slate-400 text-sm" placeholder="Search for an asset" />
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Market stats</h3>
                <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                  The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.34 trillion, representing a 2.10% increase from last week.
                </p>
                <a href="#" className="text-sm text-blue-600 mt-2 inline-block">Read more</a>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <button className="p-2 rounded-full hover:bg-slate-100">◀</button>
                <button className="p-2 rounded-full hover:bg-slate-100">▶</button>
              </div>
            </div>

            <MarketStats />
            <CryptoTable />
          </div>
          <aside className="md:col-span-1 md:self-start">
            <div className="md:sticky md:top-16">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
