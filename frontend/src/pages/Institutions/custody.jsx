import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { ShieldCheck, Lock, Eye, CheckCircle2, ArrowRight, Shield } from "lucide-react";

export default function Custody() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Coinbase Custody: Secure Institutional Storage — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <ShieldCheck size={20} />
               <span>Institutional Custody</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              The standard for <br />
              <span className="text-blue-600">secure storage.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Coinbase Custody is the largest and most trusted digital asset custodian in the world, providing cold storage for thousands of institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Get started with Custody" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="bg-white rounded-[60px] p-20 shadow-2xl relative overflow-hidden border border-gray-100">
                <Lock size={160} className="text-blue-600" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl" />
             </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Unrivaled security.</h2>
             <p className="text-xl text-gray-500">We set the bar for digital asset protection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-blue-600" />,
                title: "Cold Storage",
                desc: "Assets are stored in proprietary cold storage systems that have never been compromised."
              },
              {
                icon: <Eye className="text-blue-600" />,
                title: "Publicly Audited",
                desc: "Regular SOC 1 and SOC 2 audits to ensure our controls meet the highest standards."
              },
              {
                icon: <ShieldCheck className="text-blue-600" />,
                title: "Insurance Coverage",
                desc: "Broad insurance coverage for digital assets held in our custody system."
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

      {/* Trust & Compliance */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">A fiduciary you <br /> can trust.</h2>
               <div className="space-y-8">
                  {[
                    "Qualified custodian under New York Banking Law.",
                    "Regularly audited by top-tier accounting firms.",
                    "Assets are held in bankruptcy-remote accounts.",
                    "Segregated on-chain addresses for every client."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                       <p className="text-lg text-gray-300 font-medium">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 text-center">
                  <h3 className="text-3xl font-bold mb-6">Institutional grade.</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">
                    Trusted by over 13,000 institutions to protect their most valuable digital assets.
                  </p>
                  <Button text="Learn more about compliance" className="bg-white text-black px-8 py-4 font-bold rounded-2xl mx-auto" />
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-medium">Protect your institutional assets.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
               <Button blue text="Apply for Custody" className="px-12 py-5 font-bold rounded-2xl shadow-xl" />
               <div className="flex items-center justify-center gap-2 font-bold text-gray-400 cursor-pointer hover:text-black transition-colors">
                  Contact custody team <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

