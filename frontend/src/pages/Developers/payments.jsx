import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { CreditCard, Zap, Globe, Shield, ArrowRight, Code } from "lucide-react";

export default function DevPayments() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Payments API: Accept Crypto Globally</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f0f3ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <Code size={20} />
               <span>Payments API</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              The simplest way to <br />
              <span className="text-blue-600">accept crypto.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Integrate global crypto payments into your checkout flow with just a few lines of code. No volatility risk, low fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Start integrating" className="px-10 py-5 font-bold rounded-2xl text-lg" />
              <Button text="Read API Reference" className="px-10 py-5 font-bold rounded-2xl text-lg border border-gray-200 hover:bg-white transition-all" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="bg-[#1a1b1f] rounded-[48px] p-8 text-blue-400 font-mono text-sm shadow-2xl relative overflow-hidden group">
                <div className="flex items-center gap-2 mb-6 text-gray-500">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="mb-4">// Create a charge</p>
                <p>const charge = await .charges.create({'{'}</p>
                <p className="pl-4">name: "Coffee Subscription",</p>
                <p className="pl-4">description: "Monthly plan",</p>
                <p className="pl-4">pricing_type: "fixed_price",</p>
                <p className="pl-4">local_price: {'{'} amount: "15.00", currency: "USD" {'}'}</p>
                <p>{'}'});</p>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
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
                icon: <Globe className="text-blue-600" />,
                title: "Global Reach",
                desc: "Accept payments from customers in 100+ countries with support for major cryptocurrencies."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "Instant Settlement",
                desc: "Funds are settled instantly in USDC or fiat, eliminating volatility and chargeback risks."
              },
              {
                icon: <Shield className="text-blue-600" />,
                title: "Fully Compliant",
                desc: "Leverage our built-in compliance and fraud prevention tools to scale with confidence."
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

      {/* Integration Showcase */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50 rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-16">Flexible integration options.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="p-12 bg-white rounded-[48px] shadow-sm text-left">
                  <h3 className="text-2xl font-bold mb-4">Hosted Checkout</h3>
                  <p className="text-gray-500 mb-8">The fastest way to get started. Use our hosted payment pages to accept crypto with no frontend code.</p>
                  <Button text="View Hosted Demo" className="font-bold text-blue-600 flex items-center gap-2 group" />
               </div>
               <div className="p-12 bg-white rounded-[48px] shadow-sm text-left">
                  <h3 className="text-2xl font-bold mb-4">Direct API</h3>
                  <p className="text-gray-500 mb-8">Full control over the user experience. Build your own checkout flow with our robust REST APIs.</p>
                  <Button text="Explore API Docs" className="font-bold text-blue-600 flex items-center gap-2 group" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






