import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Layers, Shield, Zap, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function VerifiedPools() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Coinbase Verified Pools: Compliant DeFi — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#0a0b0d] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
               <Shield size={20} />
               <span>Verified Pools</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Institutional DeFi, <br />
              <span className="text-blue-500">fully compliant.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Access decentralized finance with the peace of mind of KYC/AML-verified counterparties and institutional-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Apply for access" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-2xl font-bold">Aave V3 Verified</h3>
                   <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      <CheckCircle2 size={12} />
                      <span>Verified</span>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total Value Locked</span>
                      <span className="font-bold">$450M</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Avg. Lending Rate</span>
                      <span className="font-bold text-blue-400">3.8% APY</span>
                   </div>
                   <div className="h-1 bg-white/10 rounded-full mt-6" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">DeFi for the enterprise.</h2>
             <p className="text-xl text-gray-500">Bridging the gap between decentralized protocols and institutional requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-blue-600" />,
                title: "KYC-Verified",
                desc: "Every participant in our verified pools has undergone rigorous institutional-grade KYC/AML checks."
              },
              {
                icon: <Layers className="text-blue-600" />,
                title: "Select Protocols",
                desc: "Access the most robust and battle-tested DeFi protocols with custom compliance overlays."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "On-chain Identity",
                desc: "Leverage reusable on-chain identity credentials to access a wide range of verified applications."
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

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Modernize your yield strategy.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Get started with Verified Pools" className="px-10 py-5 font-bold rounded-2xl" />
            </div>
         </div>
      </section>
    </div>
  );
}

