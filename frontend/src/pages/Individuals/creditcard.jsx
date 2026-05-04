import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { CreditCard as CardIcon, ShoppingBag, Percent, ShieldCheck, ArrowRight, Zap } from "lucide-react";

export default function CreditCard() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Coinbase Card: Spend Crypto, Earn Rewards — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f0f3ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              The card for the <br />
              <span className="text-blue-600">crypto economy.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Spend your crypto or USD anywhere Visa is accepted. Earn up to 4% back in crypto rewards on every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Apply for card" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
            <p className="text-sm text-gray-400 font-medium">No annual fees. No credit check required.</p>
          </div>
          <div className="w-full md:w-1/2 relative group">
             <div className="relative z-10">
                <div className="bg-[#1a1b1f] w-full max-w-[400px] aspect-[1.58/1] rounded-2xl p-8 text-white shadow-2xl mx-auto transition-transform duration-700">
                   <div className="flex justify-between items-start mb-12">
                      <Zap className="text-blue-500" fill="currentColor" size={32} />
                      <span className="text-xl font-bold italic">VISA</span>
                   </div>
                   <div className="space-y-4">
                      <div className="h-4 w-48 bg-white/10 rounded" />
                      <div className="flex gap-4">
                         <div className="h-4 w-12 bg-white/10 rounded" />
                         <div className="h-4 w-12 bg-white/10 rounded" />
                      </div>
                   </div>
                   <div className="mt-auto flex justify-between items-end">
                      <p className="font-mono tracking-widest">•••• 4242</p>
                      <div className="w-10 h-10 bg-white/5 rounded-lg" />
                   </div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Earn rewards on your terms.</h2>
             <p className="text-xl text-gray-500">Choose which crypto you want to earn back.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bitcoin", reward: "1.5% back", color: "text-orange-500", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
              { name: "Stellar", reward: "4.0% back", color: "text-blue-400", icon: "https://cryptologos.cc/logos/stellar-xlm-logo.png" },
              { name: "Ethereum", reward: "1.0% back", color: "text-purple-500", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" }
            ].map((coin, i) => (
              <div key={i} className="p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all text-center">
                 <img src={coin.icon} className="w-16 h-16 mx-auto mb-6" alt={coin.name} />
                 <h3 className="text-2xl font-bold mb-2">{coin.name}</h3>
                 <p className={`${coin.color} font-bold text-xl`}>{coin.reward}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <img src="/zero_fees_us.png" alt="App Preview" className="w-full max-w-[500px] mx-auto drop-shadow-2xl" />
           </div>
           <div className="space-y-12">
              <h2 className="text-4xl font-medium">Full control in your pocket.</h2>
              {[
                { icon: <ShoppingBag />, title: "Spend instantly", desc: "Use your virtual card as soon as you're approved. No need to wait for the physical card." },
                { icon: <ShieldCheck />, title: "World-class security", desc: "Freeze your card, change your PIN, and manage spending limits directly in the app." },
                { icon: <Percent />, title: "No hidden fees", desc: "No annual fees, no sign-up fees, and no transaction fees for spending USD." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                   <div className="bg-blue-600 text-white p-4 rounded-2xl h-fit">
                      {feature.icon}
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-5xl mx-auto bg-black rounded-[60px] p-12 md:p-24 text-white text-center">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Start spending today.</h2>
            <p className="text-xl text-gray-400 mb-12">Join millions of users who are using the Coinbase Card for their everyday purchases.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button blue text="Get your card" className="px-12 py-5 font-bold rounded-2xl" />
               <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-400 transition-colors">
                  Learn about fees <ArrowRight size={18} />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

