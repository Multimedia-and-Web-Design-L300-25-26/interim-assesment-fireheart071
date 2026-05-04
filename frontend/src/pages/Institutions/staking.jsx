import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Layers, Shield, Zap, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Staking() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Institutional Staking Solutions — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <Layers size={20} />
               <span>Institutional Staking</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Earn rewards on your <br />
              <span className="text-blue-600">idle assets.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Securely stake your digital assets and earn competitive rewards with the world's most trusted institutional staking provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Start staking" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                <p className="text-gray-500 font-medium mb-4 uppercase tracking-widest text-sm">Current Estimated APY</p>
                <h3 className="text-7xl font-bold text-blue-600 mb-8">4.2%</h3>
                <div className="space-y-4 text-left border-t border-gray-100 pt-8">
                   <div className="flex justify-between">
                      <span className="text-gray-500">Asset</span>
                      <span className="font-bold">Ethereum (ETH)</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-500">Staked Balance</span>
                      <span className="font-bold">1,250.00 ETH</span>
                   </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl" />
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-blue-600" />,
                title: "Safety First",
                desc: "Integrated with Coinbase Custody. Your assets remain in cold storage even while staked."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Maximum Efficiency",
                desc: "Automated reward collection and compounding to maximize your total return."
              },
              {
                icon: <TrendingUp className="text-blue-600" />,
                title: "Transparent Reporting",
                desc: "Real-time monitoring of your staking performance and reward history."
              }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col gap-6">
                 <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    {benefit.icon}
                 </div>
                 <h3 className="text-2xl font-bold">{benefit.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Built for institutional <br /> requirements.</h2>
               <div className="space-y-6">
                  {[
                    "No minimum asset requirements for institutional clients.",
                    "Full slashing protection for eligible staked assets.",
                    "Comprehensive tax reporting and accounting support.",
                    "Dedicated account management and 24/7 support."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                       <p className="text-lg text-gray-300">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 text-center">
                  <h3 className="text-3xl font-bold mb-6">Start earning today.</h3>
                  <p className="text-gray-400 text-lg mb-10">
                    Join the thousands of institutions that trust Coinbase to manage their staked assets.
                  </p>
                  <Button blue text="Apply for Staking" className="px-12 py-5 font-bold rounded-2xl" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

