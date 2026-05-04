import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Landmark, Shield, Zap, Globe, ArrowRight, Layers } from "lucide-react";

export default function BanksAndBrokerages() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Crypto Solutions for Banks & Brokerages —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <Landmark size={20} />
               <span>Financial Institutions</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Bring crypto to your <br />
              <span className="text-blue-600">customers.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              The infrastructure and regulatory compliance you need to offer digital assets to your clients, built on the most trusted platform.
            </p>
            <div className="flex flex-col sm:sm:row gap-4">
              <Button blue text="Contact our team" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="bg-white p-12 rounded-[48px] shadow-2xl border border-gray-100 relative z-10">
                <div className="flex justify-between items-center mb-10">
                   <div className="h-4 w-32 bg-gray-100 rounded" />
                   <Shield className="text-blue-600" />
                </div>
                <div className="space-y-6">
                   <div className="h-12 w-full bg-blue-50 rounded-2xl flex items-center px-4">
                      <div className="h-2 w-24 bg-blue-200 rounded" />
                   </div>
                   <div className="h-12 w-full bg-gray-50 rounded-2xl flex items-center px-4">
                      <div className="h-2 w-40 bg-gray-200 rounded" />
                   </div>
                   <div className="h-12 w-full bg-gray-50 rounded-2xl flex items-center px-4">
                      <div className="h-2 w-32 bg-gray-200 rounded" />
                   </div>
                </div>
                <div className="mt-10 h-10 w-full bg-blue-600 rounded-xl" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Built for scale and security.</h2>
             <p className="text-xl text-gray-500">Enable trading, custody, and settlement within your existing infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Trading APIs",
                desc: "Seamlessly integrate crypto trading into your existing brokerage platform."
              },
              {
                icon: <Layers className="text-blue-600" />,
                title: "Flexible Custody",
                desc: "Choose between fully managed or self-custody models based on your needs."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Global Compliance",
                desc: "Leverage our extensive regulatory licenses and compliance framework."
              }
            ].map((sol, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-gray-100 hover:bg-gray-50 transition-all">
                 <div className="mb-8">{sol.icon}</div>
                 <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-medium mb-8">The partner of choice for institutional finance.</h2>
               <p className="text-xl text-gray-400 leading-relaxed mb-10">
                  We work with the world's leading banks and brokerages to provide the infrastructure that powers the future of finance.
               </p>
               <div className="flex flex-col gap-6">
                  {[
                    "White-label trading interfaces",
                    "Robust risk management controls",
                    "Deep liquidity across 200+ assets",
                    "Dedicated institutional support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <ArrowRight size={14} className="text-white" />
                       </div>
                       <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 text-center">
               <p className="text-gray-400 italic text-xl mb-8">
                  "'s infrastructure allowed us to launch crypto trading to our millions of customers in record time, with full confidence in security and compliance."
               </p>
               <div>
                  <p className="font-bold">Head of Digital Assets</p>
                  <p className="text-gray-500 text-sm">Fortune 500 Brokerage</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Modernize your offering.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Schedule a demo" className="px-12 py-5 font-bold rounded-2xl" />
            </div>
         </div>
      </section>
    </div>
  );
}






