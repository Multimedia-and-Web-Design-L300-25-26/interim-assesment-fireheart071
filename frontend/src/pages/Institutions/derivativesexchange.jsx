import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { TrendingUp, Zap, Shield, BarChart3, ArrowRight, Activity } from "lucide-react";

export default function DerivativesExchange() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>Institutional Derivatives Exchange —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
               <Activity size={20} />
               <span>Institutional Derivatives</span>
            </div>
            <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight">
              Next-generation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">derivatives.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              The CFTC-regulated derivatives exchange built for institutional traders who require the highest standards of safety and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Apply for access" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white/5 p-8 rounded-[48px] border border-white/10 backdrop-blur-xl relative z-10">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-2xl font-bold">BTC-USD MONTHLY</h3>
                   <span className="text-blue-500 font-mono text-xl">$64,500.00</span>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Open Interest</span>
                      <span className="text-white">$2.4B</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>24h Volume</span>
                      <span className="text-white">$850M</span>
                   </div>
                   <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-6">
                      <div className="h-full bg-blue-500 w-3/4" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 px-4 sm:px-10 bg-white text-black rounded-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Built for institutions.</h2>
             <p className="text-xl text-gray-500">Regulated products designed for sophisticated trading strategies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-blue-600" />,
                title: "Futures",
                desc: "Quarterly and monthly settled futures contracts for Bitcoin and Ethereum."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Options",
                desc: "High-performance options trading with competitive pricing and deep liquidity."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Regulated",
                desc: "CFTC-regulated exchange providing a secure and compliant trading environment."
              }
            ].map((product, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-gray-50 hover:bg-blue-50 transition-colors">
                 <div className="mb-8">{product.icon}</div>
                 <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Ready to trade derivatives?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Contact our sales team" className="px-12 py-5 font-bold rounded-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold text-gray-400 cursor-pointer hover:text-white transition-colors">
                  View exchange rules <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






