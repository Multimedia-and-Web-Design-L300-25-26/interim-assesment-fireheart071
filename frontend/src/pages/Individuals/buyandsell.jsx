import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { ArrowRightLeft, CreditCard, Wallet, Zap, Shield, TrendingUp } from "lucide-react";

const TradingWidget = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BTC");

  return (
    <div className="bg-white rounded-[32px] shadow-2xl p-6 sm:p-8 w-full max-w-md border border-gray-100">
      <div className="flex gap-4 mb-8 border-b border-gray-100 pb-2">
        {["buy", "sell", "convert"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold uppercase tracking-wider pb-4 px-2 transition-all relative ${activeTab === tab ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
              }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-gray-500 uppercase">Amount</label>
          <div className="flex items-center border border-gray-200 rounded-2xl p-4 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent transition-all">
            <span className="text-2xl font-medium text-gray-400 mr-2">$</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-3xl font-medium w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC" className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Bitcoin</p>
              <p className="text-xs text-gray-500 font-medium">BTC</p>
            </div>
          </div>
          <p className="text-gray-400 font-medium"></p>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <CreditCard className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <p className="font-bold">Visa Card ···· 4242</p>
              <p className="text-xs text-gray-500 font-medium">Pay with</p>
            </div>
          </div>
          <p className="text-gray-400 font-medium"></p>
        </div>

        <Button
          blue
          text={activeTab === "buy" ? "Preview Buy" : activeTab === "sell" ? "Preview Sell" : "Preview Convert"}
          className="w-full py-5 text-lg font-bold rounded-2xl shadow-lg shadow-blue-200"
        />
      </div>
    </div>
  );
};

export default function BuyAndSell() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Helmet>
        <title>Buy, Sell & Manage Crypto — Coinbase Clone</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
              Simple and secure <br />
              <span className="text-blue-600">buy and sell.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              The easiest way to build your crypto portfolio. Sign up in minutes and start with as little as $1.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4 p-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Industry leading security</h3>
                  <p className="text-sm text-gray-500">Your assets are protected by the most secure platform on the market.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Recurring buys</h3>
                  <p className="text-sm text-gray-500">Invest in crypto slowly over time by scheduling buys daily, weekly, or monthly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <TradingWidget />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Built for everyone.</h2>
            <p className="text-xl text-gray-500">Whether you're just starting or you're an expert trader.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-blue-600" size={32} />,
                title: "Instant transfers",
                desc: "Send and receive crypto instantly between millions of users globally."
              },
              {
                icon: <Wallet className="text-blue-600" size={32} />,
                title: "All-in-one wallet",
                desc: "Manage your Bitcoin, Ethereum, and hundreds of other assets in one place."
              },
              {
                icon: <ArrowRightLeft className="text-blue-600" size={32} />,
                title: "Low fees",
                desc: "Transparent pricing and some of the lowest trading fees in the industry."
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-gray-50 transition-colors">
                <div className="bg-blue-50 p-6 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10 bg-blue-600 text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-4xl sm:text-6xl font-medium">Ready to start?</h2>
          <p className="text-xl text-blue-100">Join over 100 million people who trust Coinbase for their crypto needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button text="Get Started" className="px-10 py-5 font-bold bg-white text-blue-600 hover:bg-gray-100" />
          </div>
        </div>
      </section>
    </div>
  );
}

