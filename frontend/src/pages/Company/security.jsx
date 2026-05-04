import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { ShieldCheck, Lock, Eye, Key, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Security() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Security at : Keeping Your Assets Safe —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-[#f0f3ff]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
             <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
                <ShieldCheck size={20} />
                <span>Security First</span>
             </div>
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              The most trusted <br />
              <span className="text-blue-600">crypto platform.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              We use industry-leading security practices to keep your assets safe. Your trust is our most important asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="How we protect you" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="bg-white rounded-[48px] p-12 shadow-2xl relative overflow-hidden group">
                <Lock size={120} className="text-blue-600 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50" />
             </div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Key />, title: "Secure Storage", desc: "98% of customer funds are stored offline in cold storage, protected by vaults and geographic distribution." },
              { icon: <Eye />, title: "Proof of Reserves", desc: "We are a publicly traded company and undergo regular financial audits to ensure your funds are always there." },
              { icon: <ShieldAlert />, title: "Account Protection", desc: "Two-factor authentication (2FA) and biometric security are built into every account." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col gap-6 text-center md:text-left">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
                    <div className="text-blue-600">{pillar.icon}</div>
                 </div>
                 <h3 className="text-2xl font-bold">{pillar.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Regulatory excellence.</h2>
               <div className="space-y-6">
                  {[
                    "Registered with FinCEN as a Money Services Business.",
                    "Compliant with the Bank Secrecy Act and anti-money laundering (AML) laws.",
                    "Publicly traded on NASDAQ, providing transparency and accountability.",
                    "Licensed to operate in over 100 countries worldwide."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                       <p className="text-lg text-gray-300 font-medium">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="w-full md:w-1/2 bg-white/5 p-12 rounded-[48px] border border-white/10 text-center">
               <ShieldCheck size={80} className="text-blue-500 mx-auto mb-8" />
               <h3 className="text-2xl font-bold mb-4">Your assets are yours.</h3>
               <p className="text-gray-400 leading-relaxed">
                  We don't lend out your assets without your permission. Your funds are always held 1:1 and are available for withdrawal at any time.
               </p>
            </div>
         </div>
      </section>

      {/* Security Tips */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay secure.</h2>
            <p className="text-xl text-gray-500 mb-10">Security is a shared responsibility. Here are some tips to keep your account safe.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
               {[
                 "Enable 2FA with a hardware key or authenticator app.",
                 "Never share your password or seed phrase with anyone.",
                 "Watch out for phishing attempts and fake support agents.",
                 "Use a strong, unique password for your  account."
               ].map((tip, i) => (
                 <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 font-medium">
                    {tip}
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}






