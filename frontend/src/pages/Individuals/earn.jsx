import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Coins, GraduationCap, Gift, CheckCircle2, ArrowRight } from "lucide-react";

export default function Earn() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Helmet>
        <title>Earn Crypto Rewards</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-blue-50 text-blue-600 font-bold px-4 py-1 rounded-full w-fit text-sm uppercase tracking-wider">
              Earn Rewards
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Put your crypto <br />
              <span className="text-blue-600">to work.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Earn up to 10% APY on your assets. Discover ways to earn crypto through staking, learning, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Start earning" className="px-10 py-5 font-bold rounded-2xl" />
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="bg-linear-to-br from-blue-600 to-blue-400 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-blue-100 font-bold mb-4">Total Earned</p>
                <h2 className="text-5xl font-bold mb-8">$1,240.50</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { name: "Ethereum", reward: "4.05% APY", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
                    { name: "Cosmos", reward: "12.5% APY", icon: "https://cryptologos.cc/logos/cosmos-atom-logo.png" },
                    { name: "Solana", reward: "6.8% APY", icon: "https://cryptologos.cc/logos/solana-sol-logo.png" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} className="w-8 h-8" alt={item.name} />
                        <span className="font-bold">{item.name}</span>
                      </div>
                      <span className="text-blue-200 font-bold">{item.reward}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Earn */}
      <section className="bg-white py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-medium mb-4">Three ways to earn.</h2>
            <p className="text-xl text-gray-500">Choose the method that fits your investment style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Staking */}
            <div className="border border-gray-100 rounded-[40px] p-10 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Coins className="text-orange-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Staking</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Help secure the blockchain and earn rewards. Stake assets like ETH, ADA, and more directly in your wallet.
                </p>
              </div>
              <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all cursor-pointer">
                Learn about staking <ArrowRight size={20} className="ml-1" />
              </div>
            </div>

            {/* Learning */}
            <div className="border border-gray-100 rounded-[40px] p-10 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Learning Rewards</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Get paid to learn about crypto. Watch short videos about different tokens and earn them for free.
                </p>
              </div>
              <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all cursor-pointer">
                Browse courses <ArrowRight size={20} className="ml-1" />
              </div>
            </div>

            {/* Referrals */}
            <div className="border border-gray-100 rounded-[40px] p-10 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Gift className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Referrals</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Invite your friends to our platform. You'll both get $10 in Bitcoin when they buy or sell $100 of crypto.
                </p>
              </div>
              <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all cursor-pointer">
                Get your link <ArrowRight size={20} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APY Table */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Earning Assets</h2>
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-8 py-6 text-left text-sm font-bold text-gray-400 uppercase">Asset</th>
                  <th className="px-8 py-6 text-right text-sm font-bold text-gray-400 uppercase">Reward Rate</th>
                  <th className="px-8 py-6 text-right text-sm font-bold text-gray-400 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Ethereum", symbol: "ETH", rate: "4.05%", color: "bg-blue-500" },
                  { name: "Cosmos", symbol: "ATOM", rate: "12.51%", color: "bg-purple-500" },
                  { name: "Solana", symbol: "SOL", rate: "6.85%", color: "bg-teal-500" },
                  { name: "Cardano", symbol: "ADA", rate: "3.25%", color: "bg-blue-800" },
                  { name: "Tezos", symbol: "XTZ", rate: "4.60%", color: "bg-blue-400" }
                ].map((asset, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full ${asset.color} flex items-center justify-center text-white font-bold text-xs`}>
                          {asset.symbol[0]}
                        </div>
                        <div>
                          <p className="font-bold">{asset.name}</p>
                          <p className="text-xs text-gray-400">{asset.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="text-green-600 font-bold text-lg">{asset.rate}</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <Button text="Stake" className="ml-auto px-4 py-1 text-sm font-bold" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-4 sm:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium mb-8">Secure and transparent.</h2>
            <div className="space-y-6">
              {[
                "We only stake on high-quality, reputable protocols.",
                "Your principal is always protected and never lent out.",
                "Transparent reporting on rewards and network status.",
                "24/7 support for all your earning questions."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0" />
                  <p className="text-lg text-gray-600 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 rounded-[48px] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
              <Shield size={120} className="text-blue-600 relative z-10" />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







