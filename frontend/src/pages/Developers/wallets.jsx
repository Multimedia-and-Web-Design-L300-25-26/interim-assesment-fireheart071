import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Wallet, Key, Shield, Smartphone, ArrowRight, Check } from "lucide-react";

export default function Wallets() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Wallet Infrastructure for Developers</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Wallet-as-a-Service <br />
              <span className="text-blue-600">for your app.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Integration-ready wallet infrastructure that lets you create and manage thousands of wallets for your users with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Get API keys" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <Wallet size={24} />
                   </div>
                   <div>
                      <p className="font-bold">Wallet API</p>
                      <p className="text-sm text-gray-500">Active • Mainnet</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
                      <span className="text-gray-500 font-medium text-sm">Create Wallet</span>
                      <Check className="text-green-500" size={18} />
                   </div>
                   <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
                      <span className="text-gray-500 font-medium text-sm">Sign Transaction</span>
                      <Check className="text-green-500" size={18} />
                   </div>
                   <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
                      <span className="text-gray-500 font-medium text-sm">Estimate Gas</span>
                      <Check className="text-green-500" size={18} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Powerful features, simple integration.</h2>
             <p className="text-xl text-gray-500">Everything you need to build a crypto-native experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: <Key className="text-blue-600" />, 
                title: "MPC Key Management", 
                desc: "Securely manage private keys using Multi-Party Computation. No single point of failure." 
              },
              { 
                icon: <Shield className="text-blue-600" />, 
                title: "Non-Custodial by Design", 
                desc: "Your users keep control of their assets. We provide the infrastructure, they provide the consent." 
              },
              { 
                icon: <Smartphone className="text-blue-600" />, 
                title: "Multi-Chain Support", 
                desc: "One API for all major chains including Ethereum, Base, Solana, and Bitcoin." 
              },
              { 
                icon: <ArrowRight className="text-blue-600" />, 
                title: "Scalable Infrastructure", 
                desc: "Built to handle millions of transactions per day with 99.99% uptime." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-gray-100 hover:shadow-lg transition-all flex gap-8">
                 <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                    {feature.icon}
                 </div>
                 <div>
                    <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto bg-black rounded-[60px] p-12 md:p-24 text-white text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Build the future of wallets.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Start for free" className="px-10 py-5 font-bold rounded-2xl" />
            </div>
         </div>
      </section>
    </div>
  );
}






