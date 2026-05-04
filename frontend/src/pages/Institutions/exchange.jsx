import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { BarChart3, Zap, Shield, Globe, ArrowRight, TrendingUp } from "lucide-react";

export default function Exchange() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>Institutional Exchange</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-linear-to-br from-blue-900/30 to-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
             <BarChart3 className="text-blue-500" size={18} />
             <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Institutional Exchange</span>
          </div>
          <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight mb-10">
            The world's most <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">liquid exchange.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            Access deep liquidity, advanced trading tools, and institutional-grade security on the platform trusted by the world's largest financial institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button blue text="Open institutional account" className="px-12 py-5 font-bold rounded-2xl text-lg" />
            <Button text="View exchange status" className="px-12 py-5 font-bold rounded-2xl text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-10 border-y border-white/10 bg-black">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
               {[
                 { label: "Quarterly Volume", value: "$300B+" },
                 { label: "Assets under custody", value: "$100B+" },
                 { label: "Uptime", value: "99.99%" },
                 { label: "Institutions served", value: "13,000+" }
               ].map((stat, i) => (
                 <div key={i}>
                    <p className="text-3xl font-bold mb-2">{stat.value}</p>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                 </div>
               ))}
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
                title: "Ultra-low Latency",
                desc: "Execute trades in microseconds with our institutional-grade matching engine."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Secure Custody",
                desc: "Integrated with  Custody for seamless and secure asset management."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Deep Liquidity",
                desc: "Access a massive pool of liquidity across hundreds of trading pairs."
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

      {/* Advanced Tools */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Advanced tools for <br /> advanced traders.</h2>
              <div className="space-y-8">
                 {[
                   { title: "Real-time market data", desc: "Access high-frequency price feeds and order book depth through our robust APIs." },
                   { title: "Smart Order Routing", desc: "Optimize execution across multiple liquidity pools to minimize slippage." },
                   { title: "Customizable UI", desc: "Tailor your trading dashboard with the widgets and charts that matter most to you." }
                 ].map((tool, i) => (
                   <div key={i} className="flex gap-6">
                      <TrendingUp className="text-blue-500 shrink-0" size={24} />
                      <div>
                         <h4 className="text-xl font-bold mb-1">{tool.title}</h4>
                         <p className="text-gray-400">{tool.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="bg-white/5 p-4 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1611974717482-4828c282464a?auto=format&fit=crop&q=80&w=1200" 
                   alt="Exchange Dashboard" 
                   className="w-full rounded-[32px] opacity-80"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-5xl mx-auto bg-blue-600 rounded-[60px] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Ready to trade?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button text="Get started" className="bg-white text-blue-600 px-12 py-5 font-bold rounded-2xl shadow-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-100 transition-colors">
                  Contact institutional sales <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






