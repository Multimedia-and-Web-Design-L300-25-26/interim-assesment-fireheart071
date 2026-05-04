import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Wallet, Globe, Zap, Shield, ArrowRight, Compass } from "lucide-react";

export default function Onchain() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>Go On-chain: Your Gateway to Web3</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
            <Compass className="text-blue-500" size={18} />
            <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Go On-chain</span>
          </div>
          <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight mb-10">
            The future is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">on-chain.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-12">
            Explore decentralized apps, collect NFTs, and earn yield on your assets. All from one secure place.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button blue text="Get started with Wallet" className="px-12 py-5 font-bold rounded-2xl text-lg" />
            <Button text="Explore dapps" className="px-12 py-5 font-bold rounded-2xl text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10" />
          </div>
        </div>
      </section>

      {/* Web3 Pillars */}
      <section className="py-32 px-4 sm:px-10 bg-white text-black rounded-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Wallet className="text-blue-600" />,
                title: "Self-Custody Wallet",
                desc: "Your keys, your crypto. Take full control of your assets with  Wallet."
              },
              {
                icon: <Zap className="text-blue-600" />,
                title: "DeFi & Yield",
                desc: "Put your crypto to work. Access decentralized lending and borrowing protocols."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Web3 Browser",
                desc: "Explore the decentralized web. Connect to thousands of dapps seamlessly."
              }
            ].map((pillar, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-gray-50 hover:bg-blue-50 transition-colors group text-center">
                <div className="mb-8 group-hover:scale-110 transition-transform mx-auto w-fit">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Showcase (Visual Placeholder) */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Collect and showcase <br /> your NFTs.</h2>
            <p className="text-xl text-gray-400 mb-10">
              Easily manage your NFT collection across multiple networks. Buy, sell, and transfer with ease.
            </p>
            <div className="space-y-6">
              {[
                "Multi-chain support for Ethereum, Polygon, and more.",
                "Secure storage with hardware wallet support.",
                "Beautiful gallery view for your digital collectibles."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <span className="text-lg text-gray-300 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-[32px] p-4 aspect-square animate-pulse" />
              <div className="bg-blue-600/20 rounded-[32px] p-4 aspect-square animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="bg-blue-500/10 rounded-[32px] p-4 aspect-square animate-bounce" style={{ animationDuration: '4s' }} />
              <div className="bg-white/10 rounded-[32px] p-4 aspect-square animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white text-black px-8 py-4 rounded-2xl font-bold shadow-2xl">NFT Gallery</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







