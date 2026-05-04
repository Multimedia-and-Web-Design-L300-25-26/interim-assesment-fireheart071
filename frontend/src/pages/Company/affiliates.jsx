import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Users, Zap, Gift, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Affiliates() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title> Affiliate Program —  </title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
             <Users size={20} />
             <span>Affiliate Program</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
            Earn rewards for <br />
            <span className="text-blue-600">growing the community.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Join the  Affiliate Program and earn a commission for every new user you refer to the world's most trusted exchange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button blue text="Become an affiliate" className="px-12 py-5 font-bold rounded-2xl text-lg" />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                icon: <Zap className="text-blue-600" />,
                title: "Join",
                desc: "Apply to the program and get access to your unique referral link and marketing assets."
              },
              {
                icon: <Globe className="text-blue-600" />,
                title: "Promote",
                desc: "Share your link through your website, social media, or other creative channels."
              },
              {
                icon: <Gift className="text-blue-600" />,
                title: "Earn",
                desc: "Earn a percentage of the trading fees for every new user who signs up through your link."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-6">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
                    {step.icon}
                 </div>
                 <h3 className="text-2xl font-bold">{step.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-medium mb-10 leading-tight">Why partner <br /> with ?</h2>
               <div className="space-y-6">
                  {[
                    "Industry-leading commission rates and payouts.",
                    "Real-time tracking and reporting dashboard.",
                    "High conversion rates from a trusted global brand.",
                    "Dedicated affiliate support and marketing resources."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4">
                       <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                       <p className="text-lg text-gray-300 font-medium">{text}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="bg-white p-12 rounded-[48px] text-black">
                  <h3 className="text-3xl font-bold mb-6">Ready to start?</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10">
                    Apply now and start earning rewards for helping build the future of finance.
                  </p>
                  <Button blue text="Apply Now" className="w-full py-5 font-bold rounded-2xl" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}






