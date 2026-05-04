import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Wallet, Smartphone, Globe, Shield, ArrowRight, CreditCard as CardIcon } from "lucide-react";

export default function DebitCard() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <Helmet>
        <title>Debit Card: Direct Crypto Spending</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <CardIcon size={20} />
              <span>Debit Card</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Spend your balance <br />
              <span className="text-blue-600">everywhere.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              The  Debit Card lets you spend your crypto and cash instantly. No need to sell or transfer to your bank first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="Get the card" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-[48px] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
              <img
                src="/marketing_banner_1.avif"
                alt="Debit Card App"
                className="w-full h-auto object-contain relative z-10"
              />
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Wallet />, title: "Instant funding", desc: "Spend crypto or cash directly from your  balance." },
              { icon: <Smartphone />, title: "Apple & Google Pay", desc: "Add your card to your mobile wallet for contactless payments." },
              { icon: <Globe />, title: "Global access", desc: "Accepted at millions of merchants worldwide, anywhere Visa is." },
              { icon: <Shield />, title: "Zero liability", desc: "Your account is protected from unauthorized transactions." }
            ].map((prop, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-blue-600 mb-2">{prop.icon}</div>
                <h3 className="text-xl font-bold">{prop.title}</h3>
                <p className="text-gray-500 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-medium">How it works.</h2>
            </div>
            <p className="text-lg text-gray-500 max-w-sm">Getting started is easy and takes less than 2 minutes in the app.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Join the waitlist", desc: "Sign up in the  app and get notified when you're eligible." },
              { step: "02", title: "Choose your asset", desc: "Select which cryptocurrency or cash balance you'd like to spend." },
              { step: "03", title: "Start spending", desc: "Use your virtual card immediately while your physical card is in the mail." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-bold text-4xl mb-8 block opacity-20">{step.step}</span>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-tight">Your crypto, now as <br /> spendable as cash.</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">Get the  Debit Card and start putting your crypto to use in the real world.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button blue text="Download the app" className="px-10 py-5 font-bold rounded-2xl" />
            <div className="flex items-center gap-2 font-bold text-gray-400 cursor-pointer hover:text-black transition-colors">
              View card terms <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







