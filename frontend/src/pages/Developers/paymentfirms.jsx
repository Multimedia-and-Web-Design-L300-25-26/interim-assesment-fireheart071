import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { CreditCard, Zap, Globe, Shield, ArrowRight, Smartphone } from "lucide-react";

export default function PaymentFirms() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Crypto Solutions for Payment Firms — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f0f3ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <CreditCard size={20} />
               <span>Payment Infrastructure</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Power your payments <br />
              <span className="text-blue-600">with crypto.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Enable your customers to send, receive, and spend cryptocurrency using your existing payment network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="View API documentation" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-[#1a1b1f] rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="flex justify-between items-center mb-12">
                   <Zap className="text-blue-500" size={32} />
                   <div className="flex gap-2">
                      <div className="w-8 h-8 bg-white/10 rounded-full" />
                      <div className="w-8 h-8 bg-white/10 rounded-full" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-48 bg-white/10 rounded" />
                   <div className="h-4 w-64 bg-white/5 rounded" />
                </div>
                <div className="mt-16 flex justify-between items-end">
                   <p className="text-2xl font-mono">**** 9012</p>
                   <div className="w-16 h-10 bg-white/10 rounded-lg" />
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Built for modern commerce.</h2>
             <p className="text-xl text-gray-500">Everything you need to integrate crypto into your payment flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe className="text-blue-600" />,
                title: "Global Settlements",
                desc: "Settle transactions instantly in USDC or fiat across our global network."
              },
              {
                icon: <Smartphone className="text-blue-600" />,
                title: "Card Issuance",
                desc: "Launch your own crypto-linked debit or credit cards with our robust APIs."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Risk Management",
                desc: "Advanced fraud detection and compliance tools built for the crypto era."
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
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Scale your payment business.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Start building today" className="px-10 py-5 font-bold rounded-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-400 transition-colors">
                  Contact sales <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

