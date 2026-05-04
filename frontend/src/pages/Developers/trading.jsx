import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { TrendingUp, Zap, Shield, Globe, ArrowRight, BarChart2 } from "lucide-react";

export default function DevTrading() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Exchange & Trading APIs</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#0a0b0d] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
               <TrendingUp size={20} />
               <span>Trading Infrastructure</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Build on the world's <br />
              <span className="text-blue-500">most liquid exchange.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Access deep liquidity, real-time market data, and advanced order types through our high-performance trading APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="View API Reference" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full" />
                      <span className="font-bold">BTC-USD</span>
                   </div>
                   <span className="text-green-500 font-mono">64,231.50 ▲</span>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Order Type</span>
                      <span className="text-white">Limit</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Price</span>
                      <span className="text-white">64,200.00</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Amount</span>
                      <span className="text-white">1.50</span>
                   </div>
                </div>
                <button className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-bold">Execute Trade</button>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Engineered for performance.</h2>
             <p className="text-xl text-gray-500">Execute trades in microseconds with our institutional-grade matching engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Low Latency",
                desc: "Our APIs are designed for high-frequency trading with predictable performance."
              },
              {
                icon: <BarChart2 className="text-blue-600" />,
                title: "Real-time Data",
                desc: "Access high-fidelity market data through WebSocket and FIX interfaces."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Deep Security",
                desc: "Enterprise-grade security with API key permissions and IP whitelisting."
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-gray-50 hover:bg-white hover:shadow-xl transition-all">
                 <div className="mb-8">{feature.icon}</div>
                 <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Start trading today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Create API Key" className="px-12 py-5 font-bold rounded-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold text-gray-400 cursor-pointer hover:text-black transition-colors">
                  Join the developer Discord <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






