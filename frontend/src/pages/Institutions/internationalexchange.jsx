import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Globe, Zap, Shield, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

export default function InternationalExchange() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>International Exchange</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
               <Globe size={20} />
               <span>International Derivatives</span>
            </div>
            <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight">
              Trade perpetual <br />
              <span className="text-blue-500">futures globally.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Access high-performance derivatives trading on a secure, compliant platform built for professional traders outside the US.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Open institutional account" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
            <p className="text-sm text-gray-500">Available in select jurisdictions outside of the United States.</p>
          </div>
          <div className="w-full md:w-1/2 relative">
             <div className="bg-white/5 p-8 rounded-[48px] border border-white/10 backdrop-blur-xl relative z-10">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-2xl font-bold">ETH-PERP</h3>
                   <span className="text-green-500 font-mono text-xl">$2,450.25</span>
                </div>
                <div className="space-y-6">
                   <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-2/3" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-2xl">
                         <p className="text-gray-500 text-xs uppercase mb-1">Leverage</p>
                         <p className="text-xl font-bold">Up to 10x</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl">
                         <p className="text-gray-500 text-xs uppercase mb-1">Funding Rate</p>
                         <p className="text-xl font-bold">0.01%</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4 sm:px-10 bg-white text-black rounded-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Built for professional traders.</h2>
             <p className="text-xl text-gray-500">Deep liquidity and advanced features for global markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Capital Efficiency",
                desc: "Maximize your capital with cross-margining and flexible leverage options."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Compliant Access",
                desc: "Trade on a platform that prioritizes regulatory compliance and security."
              },
              {
                icon: <BarChart3 className="text-blue-600" />,
                title: "Unified Liquidity",
                desc: "Access a deep pool of liquidity shared across our global institutional network."
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

      {/* Compliance & Trust */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-12">Transparency you can trust.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               {[
                 "Regulated by the Bermuda Monetary Authority.",
                 "Strict AML/KYC standards for all institutional clients.",
                 "Regular external audits and proof of reserves.",
                 "Segregated client funds and institutional-grade custody."
               ].map((text, i) => (
                 <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" />
                    <p className="text-lg text-gray-400 font-medium">{text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-600 to-blue-800 rounded-[60px] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-tight">Start trading international markets.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button text="Apply for access" className="bg-white text-blue-600 px-12 py-5 font-bold rounded-2xl shadow-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-100 transition-colors">
                  Contact institutional sales <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






