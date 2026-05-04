import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { BarChart3, Shield, Zap, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AssetListings() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>List Your Asset on Coinbase — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <BarChart3 size={20} />
               <span>Asset Hub</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Get your asset in front of <br />
              <span className="text-blue-600">millions.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Apply to list your digital asset on the world's most trusted exchange and gain access to deep liquidity and a global user base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Apply to list" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-gray-100 relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-blue-600 rounded-full" />
                   <div className="h-4 w-32 bg-gray-100 rounded" />
                </div>
                <div className="space-y-4">
                   <div className="h-2 w-full bg-gray-50 rounded" />
                   <div className="h-2 w-full bg-gray-50 rounded" />
                   <div className="h-2 w-2/3 bg-gray-50 rounded" />
                </div>
                <div className="mt-10 pt-10 border-t border-gray-100 flex justify-between">
                   <div className="h-8 w-24 bg-blue-50 rounded-lg" />
                   <div className="h-8 w-24 bg-gray-50 rounded-lg" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Our listing process.</h2>
             <p className="text-xl text-gray-500">A transparent and rigorous framework for evaluating new assets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Application",
                desc: "Submit your asset details through our secure Asset Hub portal for initial review."
              },
              {
                step: "02",
                title: "Evaluation",
                desc: "Our team evaluates the asset based on our Digital Asset Framework, focusing on security and compliance."
              },
              {
                step: "03",
                title: "Onboarding",
                desc: "Once approved, we work with your team to integrate the asset and prepare for launch."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-6">
                 <span className="text-4xl font-bold text-blue-100">{step.step}</span>
                 <h3 className="text-2xl font-bold">{step.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Rigorous standards <br /> for every asset.</h2>
               <div className="space-y-6">
                  {[
                    "Strict technical security reviews of smart contracts.",
                    "Comprehensive legal and regulatory assessment.",
                    "Evaluation of market supply and demand dynamics.",
                    "Ongoing monitoring after listing to ensure standards are met."
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
                  <Shield size={64} className="text-blue-500 mx-auto mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Trusted by regulators</h3>
                  <p className="text-gray-400 leading-relaxed mb-10">
                    We maintain the highest level of compliance to ensure a safe environment for our users and listed assets.
                  </p>
                  <Button text="Read our listing policy" className="bg-white text-black px-8 py-4 font-bold rounded-xl" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

