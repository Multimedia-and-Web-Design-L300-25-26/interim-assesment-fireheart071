import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { CircleDollarSign, Zap, Globe, Shield, ArrowRight, Layers } from "lucide-react";

export default function Stablecoins() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>USDC & Stablecoins for Developers —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <CircleDollarSign size={20} />
               <span>Stablecoin Infrastructure</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Build with the <br />
              <span className="text-blue-600">world's most trusted</span> stablecoin.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Integrate USDC into your application for fast, secure, and programmable global dollar payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Start building with USDC" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-blue-600 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden text-center">
                <CircleDollarSign size={120} className="mx-auto mb-8" />
                <h3 className="text-4xl font-bold mb-4">USDC</h3>
                <p className="text-blue-100 text-xl">The digital dollar for the global economy.</p>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
             </div>
          </div>
        </div>
      </section>

      {/* Why USDC */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Why build with USDC?</h2>
             <p className="text-xl text-gray-500">Fully reserved and always redeemable 1:1 for US dollars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe className="text-blue-600" />,
                title: "Global Reach",
                desc: "Send dollars across borders instantly, 24/7, for a fraction of the cost of traditional wires."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Programmable",
                desc: "Use smart contracts to automate complex financial flows and escrow services."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Fully Reserved",
                desc: "USDC is backed by highly liquid US dollar-denominated assets held in segregated accounts."
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-6 text-center">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                    {feature.icon}
                 </div>
                 <h3 className="text-2xl font-bold">{feature.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50 rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-medium mb-8">Simple APIs for <br /> complex flows.</h2>
               <div className="space-y-8">
                  {[
                    "Mint and redeem USDC directly through our APIs.",
                    "Automated settlement for cross-border commerce.",
                    "Institutional-grade liquidity and conversion tools.",
                    "Multi-chain support including Ethereum, Solana, and Base."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                          <ArrowRight size={14} className="text-white" />
                       </div>
                       <p className="text-lg text-gray-600 font-medium">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white p-12 rounded-[48px] shadow-xl">
               <h3 className="text-2xl font-bold mb-6">Start in minutes</h3>
               <div className="bg-gray-900 rounded-2xl p-6 text-blue-400 font-mono text-sm">
                  <p className="mb-4">// Mint USDC</p>
                  <p>const tx = await usdc.mint({'{'}</p>
                  <p className="pl-4">amount: 1000.00,</p>
                  <p className="pl-4">to: "0x123..."</p>
                  <p>{'}'});</p>
               </div>
               <Button blue text="Explore USDC Docs" className="w-full mt-8 py-4 rounded-xl font-bold" />
            </div>
         </div>
      </section>
    </div>
  );
}






