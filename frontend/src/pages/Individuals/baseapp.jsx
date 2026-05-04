import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Globe, Zap, Shield, ArrowRight, Layers, Coins } from "lucide-react";

export default function BaseApp() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Base: An Ethereum L2 Platform</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#0052ff] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-100 font-bold uppercase tracking-widest text-sm">
              <Layers size={20} />
              <span>Base Network</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              A new way to <br />
              <span className="text-blue-200">build on-chain.</span>
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed max-w-lg">
              Base is a secure, low-cost, builder-friendly Ethereum L2 designed to bring the next billion users on-chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button text="Start building" className="bg-white text-[#0052ff] px-10 py-5 font-bold rounded-2xl text-lg hover:bg-blue-50 transition-colors" />
              <Button text="Bridge assets" className="bg-blue-700/50 text-white px-10 py-5 font-bold rounded-2xl text-lg hover:bg-blue-700 transition-colors border border-blue-400/30" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <div className="w-48 h-48 sm:w-60 sm:h-60 bg-[#0052ff] rounded-full flex items-center justify-center">
                  <span className="text-white text-8xl font-black italic">B</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-300 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-800 rounded-full blur-3xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Low Fees",
                desc: "Transactions on Base are a fraction of the cost of Ethereum Mainnet, making on-chain apps accessible to everyone."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Ethereum Security",
                desc: "Base is built on the OP Stack and secured by Ethereum, inheriting the security of the world's most robust settlement layer."
              },
              {
                icon: <Coins className="text-blue-600" />,
                title: " Integrated",
                desc: "Seamlessly connect with 's ecosystem of products, users, and fiat on-ramps."
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

      {/* Builder Section */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50 rounded-[60px] mx-4 sm:mx-10 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Built for builders, <br /> by builders.</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Base is an open-source project, built in collaboration with Optimism. We're committed to the Superchain vision.
            </p>
            <div className="flex flex-col gap-6">
              {[
                "EVM-equivalent for easy porting from Ethereum.",
                "Access to 's 110M+ users.",
                "Robust developer tooling and documentation.",
                "Integrated with the OP Stack ecosystem."
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-12 rounded-[48px] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to go on-chain?</h3>
              <div className="space-y-4">
                <Button blue text="Explore Ecosystem" className="w-full py-5 rounded-2xl font-bold" />
                <Button text="Read Documentation" className="w-full py-5 rounded-2xl font-bold border border-gray-200 hover:bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







