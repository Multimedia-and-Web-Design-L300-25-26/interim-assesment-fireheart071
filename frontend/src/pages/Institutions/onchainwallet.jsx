import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Wallet, Shield, Zap, Globe, ArrowRight, Key } from "lucide-react";

export default function OnchainWallet() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Institutional On-chain Wallet</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <Wallet size={20} />
               <span>On-chain Wallet</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Self-custody for <br />
              <span className="text-blue-600">institutions.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Manage your digital assets with the control of self-custody and the security of institutional-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Download on-chain wallet" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 relative group overflow-hidden">
                <div className="bg-blue-600 rounded-3xl p-8 text-white mb-8">
                   <div className="flex justify-between items-center mb-10">
                      <Key size={32} />
                      <span className="text-sm font-bold opacity-70">SECURE ENCLAVE</span>
                   </div>
                   <p className="text-2xl font-bold mb-2">Institutional Wallet</p>
                   <p className="text-blue-100 opacity-70">**** **** **** 4242</p>
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-1/2 bg-gray-100 rounded" />
                   <div className="h-4 w-3/4 bg-gray-50 rounded" />
                   <div className="h-4 w-2/3 bg-gray-50 rounded" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50" />
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Your keys, your control.</h2>
             <p className="text-xl text-gray-500">Securely interact with DeFi and on-chain applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-blue-600" />,
                title: "Advanced Security",
                desc: "Secure Enclave technology and biometric authentication built into every wallet."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Direct DeFi Access",
                desc: "Swap assets and interact with decentralized protocols directly from your wallet."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Multi-Chain",
                desc: "Manage assets across all major blockchains in a single, unified interface."
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-6 text-center md:text-left">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
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
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Take control of your assets.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Get the wallet" className="px-10 py-5 font-bold rounded-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-400 transition-colors">
                  Learn about self-custody <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






