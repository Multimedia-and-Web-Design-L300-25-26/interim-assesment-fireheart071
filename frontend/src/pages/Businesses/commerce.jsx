import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { ShoppingCart, Zap, Shield, Layout, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Commerce() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Commerce: Accept Crypto Payments</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
               <ShoppingCart size={20} />
               <span>Commerce</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Accept crypto payments <br />
              <span className="text-blue-600">globally.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              The easiest way for businesses to accept cryptocurrency payments. No middleman, no volatility risk, just seamless global commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Get started" className="px-10 py-5 font-bold rounded-2xl text-lg" />
              <Button text="View demo" className="px-10 py-5 font-bold rounded-2xl text-lg bg-gray-100 hover:bg-gray-200" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="bg-blue-600 rounded-[48px] p-8 sm:p-12 text-white shadow-2xl relative z-10">
                <div className="bg-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md">
                   <div className="flex justify-between items-center mb-6">
                      <span className="font-bold">Total Sales</span>
                      <span className="text-blue-200 text-sm">Last 30 days</span>
                   </div>
                   <h3 className="text-4xl font-bold">$124,500.00</h3>
                </div>
                <div className="space-y-4">
                   {[
                     { asset: "USDC", amount: "84,000", pct: "67%" },
                     { asset: "BTC", amount: "28,000", pct: "22%" },
                     { asset: "ETH", amount: "12,500", pct: "11%" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <span className="font-medium">{item.asset}</span>
                        <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full bg-white" style={{ width: item.pct }} />
                        </div>
                        <span className="font-bold">${item.amount}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-medium mb-6">Integrated with the tools you use.</h2>
             <p className="text-xl text-gray-500">Connect  Commerce to your existing workflow in minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Managed Checkout", desc: "Embed a hosted checkout page on your site with just a few lines of code.", icon: <Layout /> },
              { title: "Turnkey Plugins", desc: "Native integrations for Shopify, WooCommerce, Magento, and more.", icon: <Zap /> },
              { title: "Flexible APIs", desc: "Build a custom payment experience using our robust REST APIs.", icon: <Shield /> }
            ].map((box, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-md transition-shadow">
                 <div className="text-blue-600 mb-6">{box.icon}</div>
                 <h4 className="text-2xl font-bold mb-4">{box.title}</h4>
                 <p className="text-gray-500 leading-relaxed mb-8">{box.desc}</p>
                 <div className="flex items-center text-blue-600 font-bold cursor-pointer group">
                    Explore docs <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Commerce? */}
      <section className="py-32 px-4 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
           <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">Why choose <br />  Commerce?</h2>
              <div className="space-y-8">
                 {[
                   { title: "Zero Volatility", desc: "Automatically convert crypto to USDC or fiat to avoid price swings." },
                   { title: "Global Reach", desc: "Accept payments from anyone, anywhere, without borders or high fees." },
                   { title: "Secure & Compliant", desc: "Built on the same secure infrastructure as the  exchange." },
                   { title: "Low Transaction Fees", desc: "Just 1% flat fee on all transactions. No hidden costs." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                      <div>
                         <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                         <p className="text-gray-500">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="w-full md:w-1/2 bg-gray-100 rounded-[60px] aspect-square flex items-center justify-center p-12 overflow-hidden">
              <div className="relative w-full h-full bg-white rounded-[40px] shadow-2xl p-8 flex flex-col">
                 <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
                    <span className="font-bold">Checkout</span>
                 </div>
                 <div className="space-y-6 flex-1">
                    <div className="h-4 w-1/2 bg-gray-100 rounded" />
                    <div className="h-10 w-full bg-gray-50 rounded-xl" />
                    <div className="h-10 w-full bg-gray-50 rounded-xl" />
                    <div className="h-10 w-full bg-gray-50 rounded-xl" />
                 </div>
                 <Button blue text="Pay with " className="w-full py-4 rounded-xl font-bold" />
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Start accepting crypto today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Create your account" className="px-12 py-5 font-bold rounded-2xl" />
               <Button text="Contact sales" className="px-12 py-5 font-bold rounded-2xl bg-white border border-gray-200" />
            </div>
         </div>
      </section>
    </div>
  );
}






