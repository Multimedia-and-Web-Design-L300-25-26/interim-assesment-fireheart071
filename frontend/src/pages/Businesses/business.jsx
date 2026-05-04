import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Building2, Globe2, ShieldCheck, BarChart3, Users2, Zap } from "lucide-react";

export default function Business() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title> for Business: Institutional Crypto Solutions —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#0a0b0d] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              The institutional standard for <br />
              <span className="text-blue-500">digital assets.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Empowering businesses of all sizes to integrate crypto, accept payments, and manage institutional-grade digital asset portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Get started" className="px-10 py-5 font-bold rounded-2xl text-lg" />
              <Button text="Contact sales" className="px-10 py-5 font-bold rounded-2xl text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[48px] p-12 border border-white/10 backdrop-blur-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { label: "Assets under custody", value: "$100B+" },
                     { label: "Institutional clients", value: "13,000+" },
                     { label: "Countries supported", value: "100+" },
                     { label: "Trading volume", value: "$1T+" }
                   ].map((stat, i) => (
                     <div key={i}>
                        <p className="text-blue-400 font-bold text-3xl mb-1">{stat.value}</p>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Solutions for every business need.</h2>
             <p className="text-xl text-gray-500">From startups to Fortune 500 companies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="text-blue-600" />,
                title: "Institutional",
                desc: "Full-stack institutional platform for trading, custody, and financing."
              },
              {
                icon: <Globe2 className="text-blue-600" />,
                title: "Commerce",
                desc: "Accept crypto payments from anyone in the world with zero volatility risk."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Prime",
                desc: "Integrated solution for sophisticated investors to execute and manage assets."
              }
            ].map((solution, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-gray-100 hover:bg-gray-50 transition-all group">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {solution.icon}
                 </div>
                 <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                 <p className="text-gray-500 leading-relaxed mb-8">{solution.desc}</p>
                 <div className="flex items-center text-blue-600 font-bold cursor-pointer group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={18} className="ml-1" />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50 rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <h2 className="text-4xl md:text-5xl font-medium">Built on trust and compliance.</h2>
               {[
                 { icon: <ShieldCheck className="text-green-600" />, title: "Regulated and compliant", desc: " is a publicly traded company that adheres to the highest standards of regulatory compliance." },
                 { icon: <BarChart3 className="text-blue-600" />, title: "Deep liquidity", desc: "Access the world's most liquid markets for Bitcoin, Ethereum, and other digital assets." },
                 { icon: <Users2 className="text-purple-600" />, title: "Expert support", desc: "Dedicated account management and 24/7 technical support for our business partners." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm h-fit">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                       <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
            <div className="bg-white p-12 rounded-[48px] shadow-xl">
               <h3 className="text-2xl font-bold mb-8">Trusted by industry leaders</h3>
               <div className="grid grid-cols-2 gap-12 opacity-50">
                  {/* Mock Logos */}
                  <div className="h-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-12 bg-gray-200 rounded animate-pulse" />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-medium">Scale your business with crypto.</h2>
            <p className="text-xl text-gray-500">Join the thousands of businesses already using  to power their digital asset strategies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
               <Button blue text="Open a business account" className="px-10 py-5 font-bold rounded-2xl" />
            </div>
         </div>
      </section>
    </div>
  );
}






