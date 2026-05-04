import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { BarChart2, TrendingUp, Zap, Shield, ArrowRight, Settings } from "lucide-react";

export default function Advanced() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>Advanced Trading: Professional Tools & Charts</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-linear-to-br from-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
            <BarChart2 className="text-blue-500" size={18} />
            <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Advanced Trading</span>
          </div>
          <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight mb-10">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">professional traders.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            Access deep liquidity, lower fees, and advanced order types on a powerful, secure trading platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button blue text="Start trading" className="px-12 py-5 font-bold rounded-2xl text-lg" />
            <Button text="View API docs" className="px-12 py-5 font-bold rounded-2xl text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10" />
          </div>
        </div>
      </section>

      {/* Trading Interface Preview */}
      <section className="py-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1a1b1f] rounded-[48px] p-8 border border-white/5 shadow-2xl overflow-hidden relative group">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full" />
                  <span className="text-2xl font-bold">BTC-USD</span>
                </div>
                <div className="hidden md:flex gap-8">
                  <div>
                    <p className="text-gray-500 text-xs uppercase">Price</p>
                    <p className="text-green-500 font-mono">$64,120.50</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase">24h Change</p>
                    <p className="text-green-500 font-mono">+2.4%</p>
                  </div>
                </div>
              </div>
              <Settings className="text-gray-500" />
            </div>
            <div className="h-[400px] w-full bg-linear-to-t from-blue-500/5 to-transparent rounded-3xl flex items-end p-8">
              {/* Simulated Chart */}
              <div className="flex items-end gap-1 w-full h-full opacity-40">
                {[...Array(40)].map((_, i) => (
                  <div key={i} className="bg-blue-500/20 w-full" style={{ height: `${Math.random() * 80 + 20}%` }} />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#1a1b1f] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-10 bg-white text-black rounded-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Unified Balance",
                desc: "Trade across spot, futures, and margin from a single, unified account balance."
              },
              {
                icon: <TrendingUp className="text-blue-600" />,
                title: "Advanced Orders",
                desc: "Execute complex strategies with limit, stop limit, and bracket orders."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Institutional Security",
                desc: "Rest easy with the same security infrastructure used by the world's largest banks."
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-gray-50 hover:bg-blue-50 transition-colors group">
                <div className="mb-8 group-hover:scale-110 transition-transform w-fit">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[60px] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-tight">Ready for more?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Start trading" className="bg-white text-blue-600 px-12 py-5 font-bold rounded-2xl shadow-2xl" />
            <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-100 transition-colors">
              Contact institutional sales <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







