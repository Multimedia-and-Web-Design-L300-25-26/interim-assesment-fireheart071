import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Rocket, Code2, Cpu, Globe, ArrowRight, Layers } from "lucide-react";

export default function Startups() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>Coinbase for Startups: Build Your Crypto Vision — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
             <Rocket className="text-blue-500" size={18} />
             <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">For Startups</span>
          </div>
          <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight mb-10">
            Build the next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold">big thing</span> in crypto.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
            Get the infrastructure, capital, and support you need to turn your vision into a global product. Built by developers, for developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button blue text="Apply for Cloud credits" className="px-12 py-5 font-bold rounded-2xl text-lg" />
            <Button text="Explore the API" className="px-12 py-5 font-bold rounded-2xl text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-4 sm:px-10 bg-white text-black rounded-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
             <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-medium">Infrastructure at your fingertips.</h2>
             </div>
             <p className="text-lg text-gray-500 max-w-sm">Focus on building your product, not the underlying blockchain complexity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="text-blue-600" />,
                title: "Cloud APIs",
                desc: "Integrated wallet, trading, and identity APIs to power your application."
              },
              {
                icon: <Layers className="text-blue-600" />,
                title: "Base L2",
                desc: "Build on a secure, low-cost, developer-friendly Ethereum L2."
              },
              {
                icon: <Cpu className="text-blue-600" />,
                title: "Node Infrastructure",
                desc: "Reliable access to blockchain data with our managed node services."
              }
            ].map((tool, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-gray-50 hover:bg-blue-50 transition-colors group">
                 <div className="mb-8 group-hover:scale-110 transition-transform w-fit">{tool.icon}</div>
                 <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight text-white">More than just code.</h2>
              <div className="space-y-8">
                 {[
                   { title: "Coinbase Ventures", desc: "Access to early-stage funding from one of the most active investors in crypto." },
                   { title: "Cloud Credits", desc: "Up to $25,000 in credits for eligible startups to build on Coinbase Cloud." },
                   { title: "Go-to-market Support", desc: "Leverage our 100M+ user base to accelerate your growth." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                      <div className="w-2 h-auto bg-blue-600 rounded-full" />
                      <div>
                         <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                         <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 relative overflow-hidden">
              <pre className="text-blue-400 font-mono text-sm sm:text-base overflow-x-auto p-4">
{`const coinbase = require('coinbase-cloud');

async function launchStartup() {
  const idea = await buildVision();
  const funding = await coinbase.ventures.apply();
  
  if (funding.approved) {
    console.log("Ready for takeoff 🚀");
    return coinbase.cloud.deploy(idea);
  }
}

launchStartup();`}
              </pre>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-700 rounded-[60px] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-tight">Your journey starts here.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button text="Start building" className="bg-white text-blue-600 px-12 py-5 font-bold rounded-2xl shadow-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-100 transition-colors">
                  Browse developer docs <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

