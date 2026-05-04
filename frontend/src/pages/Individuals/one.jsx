import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Check, Zap, Headphones, ShieldCheck, Star, ArrowRight } from "lucide-react";

export default function One() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Premium: Zero Trading Fees & Rewards</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-linear-to-b from-[#f0f3ff] to-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 border border-blue-200 rounded-full px-4 py-1.5 mb-8 bg-blue-50/50">
            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">O</span>
            </div>
            <span className="text-[13px] font-bold tracking-widest text-blue-600 uppercase"> One</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight mb-8 max-w-4xl">
            One membership, <br className="hidden sm:block" />
            <span className="text-blue-600">limitless possibilities.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-12">
            Get zero trading fees, boosted staking rewards, and priority support for one monthly price. Start your 30-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button blue text="Start free trial" className="px-10 py-5 font-bold rounded-2xl text-lg shadow-xl shadow-blue-200" />
            <Button text="See all benefits" className="px-10 py-5 font-bold rounded-2xl text-lg bg-white border border-gray-200" />
          </div>
          <p className="mt-6 text-sm text-gray-400 font-medium">No commitment. Cancel anytime.</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Zero Fees */}
            <div className="bg-[#f8f9fb] rounded-[48px] p-12 flex flex-col justify-between group hover:bg-blue-50 transition-colors duration-500">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Zero trading fees</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Trade hundreds of assets with zero trading fees. Buy and sell crypto without worrying about costs eating into your profits.
                </p>
              </div>
              <img src="/zero_fees_us.png" alt="Zero Fees" className="mt-12 w-full max-w-[300px] mx-auto drop-shadow-2xl" />
            </div>

            {/* Boosted Rewards */}
            <div className="bg-[#f8f9fb] rounded-[48px] p-12 flex flex-col justify-between group hover:bg-orange-50 transition-colors duration-500">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Star className="text-orange-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Boosted rewards</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Earn more on your assets. Get exclusive access to higher staking rates and special earning opportunities only for members.
                </p>
              </div>
              <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">Standard Rate</span>
                  <span className="text-gray-400 font-bold">4.05% APY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-orange-600"> One Rate</span>
                  <span className="text-orange-600 font-bold text-2xl">5.25% APY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: <Headphones className="text-purple-600" />,
                title: "Priority support",
                desc: "Skip the line and get 24/7 access to our dedicated member support team.",
                bg: "bg-purple-50"
              },
              {
                icon: <ShieldCheck className="text-green-600" />,
                title: "Account protection",
                desc: "Rest easy with $1M account protection for unauthorized access to your funds.",
                bg: "bg-green-50"
              },
              {
                icon: <Check className="text-blue-600" />,
                title: "Exclusive offers",
                desc: "Get access to special deals from our partners in the Web3 ecosystem.",
                bg: "bg-blue-50"
              }
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-[40px] p-10`}>
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">See why people switch.</h2>
          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-10 py-8 text-left text-lg font-bold">Feature</th>
                  <th className="px-10 py-8 text-center text-lg font-bold text-gray-400">Basic</th>
                  <th className="px-10 py-8 text-center text-lg font-bold text-blue-600 bg-blue-50/50"> One</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Trading Fees", basic: "Standard", pro: "Zero*" },
                  { name: "Staking Rewards", basic: "Standard", pro: "Boosted" },
                  { name: "Support", basic: "Self-service", pro: "Priority 24/7" },
                  { name: "Account Protection", basic: "-", pro: "Up to $1M" },
                  { name: "Learning Rewards", basic: "Standard", pro: "2x Rewards" }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-10 py-6 font-bold">{row.name}</td>
                    <td className="px-10 py-6 text-center text-gray-400 font-medium">{row.basic}</td>
                    <td className="px-10 py-6 text-center font-bold text-blue-600 bg-blue-50/50">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-gray-400 italic">
            *Zero trading fees apply to trades on the  app and website. Spread and other fees may apply.
          </p>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto bg-black rounded-[60px] p-12 md:p-24 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Upgrade your crypto experience today.</h2>
            <p className="text-xl text-gray-400">Join the thousands of traders who are already saving with  One.</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button blue text="Start your 30-day trial" className="px-10 py-5 font-bold rounded-2xl shadow-lg shadow-blue-500/20" />
            <div className="flex items-center justify-center gap-2 text-gray-400 font-bold cursor-pointer group">
              Learn more about terms <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







