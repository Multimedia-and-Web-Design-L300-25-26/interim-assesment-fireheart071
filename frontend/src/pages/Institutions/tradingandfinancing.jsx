import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { BarChart3, Shield, Zap, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function TradingAndFinancing() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Institutional Trading & Financing —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <Shield size={20} />
               <span>Prime Services</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Full-service <br />
              <span className="text-blue-600">institutional trading.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Access deep liquidity, institutional-grade financing, and expert trade execution on a single, unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Apply for Prime" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-[#1a1b1f] rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="flex justify-between items-center mb-10">
                   <BarChart3 className="text-blue-500" size={32} />
                   <span className="text-sm font-bold opacity-70">INSTITUTIONAL PRIME</span>
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between items-end">
                      <div>
                         <p className="text-gray-500 text-xs uppercase mb-1">Total Assets</p>
                         <p className="text-3xl font-bold">$1.2B</p>
                      </div>
                      <div className="text-right">
                         <p className="text-gray-500 text-xs uppercase mb-1">Available Credit</p>
                         <p className="text-3xl font-bold text-blue-400">$500M</p>
                      </div>
                   </div>
                   <div className="h-1 bg-white/10 rounded-full mt-6" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Integrated solutions for every stage.</h2>
             <p className="text-xl text-gray-500">From execution to post-trade settlement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Prime Execution",
                desc: "Smart order routing across major liquidity pools to minimize slippage and maximize efficiency."
              },
              {
                icon: <BarChart3 className="text-blue-600" />,
                title: "Institutional Financing",
                desc: "Access competitive financing rates for your digital asset strategies with institutional-grade risk management."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Post-trade Settlement",
                desc: "Seamlessly settle trades through our integrated custody and settlement network."
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-6">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                 </div>
                 <h3 className="text-2xl font-bold">{feature.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
         <div className="max-w-5xl mx-auto bg-black rounded-[60px] p-12 md:p-24 text-white text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Elevate your institutional trading.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Open a Prime account" className="px-10 py-5 font-bold rounded-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-400 transition-colors">
                  Contact our Prime team <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






