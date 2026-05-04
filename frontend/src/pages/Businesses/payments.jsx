import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Send, Download, Globe, Shield, Zap, ArrowRight } from "lucide-react";

export default function Payments() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Helmet>
        <title>Global Payments Infrastructure</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Move money at the <br />
              <span className="text-blue-600">speed of the internet.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Send, receive, and settle payments instantly across the globe. Our infrastructure eliminates the delays and high costs of traditional banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Start sending" className="px-10 py-5 font-bold rounded-2xl text-lg" />
              <Button text="View API docs" className="px-10 py-5 font-bold rounded-2xl text-lg bg-white border border-gray-200" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="bg-white rounded-[40px] p-8 shadow-2xl relative z-10">
                   <div className="flex items-center justify-between mb-10">
                      <h4 className="font-bold text-xl">Payment Details</h4>
                      <Zap className="text-blue-600" size={24} />
                   </div>
                   <div className="space-y-6 mb-10">
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Recipient</span>
                         <span className="font-bold">Global Logistics Inc.</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Amount</span>
                         <span className="font-bold text-lg">15,000.00 USDC</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Fee</span>
                         <span className="text-green-600 font-bold">$0.00</span>
                      </div>
                   </div>
                   <div className="bg-blue-600 text-white p-4 rounded-2xl text-center font-bold">
                      Settled Instantly
                   </div>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30" />
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Send className="text-blue-600" />,
                title: "Instant Settlement",
                desc: "No more waiting 3-5 days for wire transfers. Settle in seconds, 24/7/365."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Borderless",
                desc: "Pay anyone in any country without the complexity of traditional FX markets."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Programmable",
                desc: "Automate complex payment flows with our easy-to-use developer APIs."
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

      {/* Case Study / Use Case */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Modernizing the <br /> supply chain.</h2>
               <p className="text-xl text-gray-400 mb-12">
                  "By using 's payment infrastructure, we've reduced our cross-border settlement times from 4 days to 4 seconds, saving us millions in working capital every year."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full" />
                  <div>
                     <p className="font-bold">Sarah Jenkins</p>
                     <p className="text-gray-500 text-sm">CFO, TechLogistics Global</p>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <p className="text-blue-400 text-3xl font-bold mb-2">99%</p>
                  <p className="text-gray-500 text-sm font-medium uppercase">Faster settlement</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                  <p className="text-blue-400 text-3xl font-bold mb-2">$0</p>
                  <p className="text-gray-500 text-sm font-medium uppercase">Intermediary fees</p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 col-span-2">
                  <p className="text-blue-400 text-3xl font-bold mb-2">24/7</p>
                  <p className="text-gray-500 text-sm font-medium uppercase">Network availability</p>
               </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Ready to modernize your payments?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Get started today" className="px-10 py-5 font-bold rounded-2xl" />
               <div className="flex items-center gap-2 text-gray-400 font-bold cursor-pointer hover:text-black transition-colors">
                  Contact our payments team <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






