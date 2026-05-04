import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Briefcase, Gem, Users, BarChart3, Globe, ShieldCheck, ArrowRight, Star } from "lucide-react";

export default function PrivateClient() {
  return (
    <div className="bg-[#0a0b0d] text-white min-h-screen">
      <Helmet>
        <title>Private Client</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-40 px-4 sm:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <Gem className="text-blue-500" size={24} />
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Private Client</span>
          </div>
          <h1 className="text-5xl sm:text-8xl font-medium tracking-tight leading-tight mb-10">
            Tailored solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">wealth builders.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
            A dedicated team and personalized services designed for high-net-worth individuals, family offices, and institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button blue text="Apply now" className="px-12 py-5 font-bold rounded-2xl text-lg" />
            <Button text="Speak with an advisor" className="px-12 py-5 font-bold rounded-2xl text-lg bg-white/5 hover:bg-white/10 text-white border border-white/10" />
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 sm:px-10 bg-white text-black rounded-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium mb-10 leading-tight">Expertise that scales with you.</h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-12">
                Our Private Client team provides the sophisticated tools and white-glove service required to manage significant crypto portfolios. We combine traditional financial expertise with deep crypto-native knowledge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Briefcase />, title: "Personalized Strategy", desc: "Custom investment frameworks tailored to your goals." },
                  { icon: <BarChart3 />, title: "Advanced Execution", desc: "Access to deep liquidity and OTC trading services." }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-blue-600 mb-4">{item.icon}</div>
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-[48px] aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Advisor"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-10 rounded-[32px] text-white shadow-2xl hidden md:block">
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="font-bold text-blue-100 uppercase tracking-wider text-xs">Dedicated Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Our core services.</h2>
            <p className="text-xl text-gray-400">Exclusive features for our most valued clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Account Manager",
                desc: "A single point of contact for all your needs, from onboarding to complex transactions.",
                icon: <Users size={32} />
              },
              {
                title: "Institutional Custody",
                desc: "Access to  Custody, the most secure and compliant storage solution in the industry.",
                icon: <ShieldCheck size={32} />
              },
              {
                title: "Global Tax Reporting",
                desc: "Specialized support for complex tax situations and cross-border reporting requirements.",
                icon: <Globe size={32} />
              }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-white/10 hover:bg-white/5 transition-colors group">
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform w-fit">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-32 px-4 sm:px-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-500 flex justify-center gap-1 mb-12">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
          </div>
          <blockquote className="text-3xl md:text-4xl font-medium leading-relaxed mb-12 text-gray-300">
            "The level of service and expertise provided by the  Private Client team is unmatched. They truly understand the needs of sophisticated investors in the digital asset space."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=david" alt="David" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold">David Chen</p>
              <p className="text-gray-500 text-sm">Managing Director, Heritage Family Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-[60px] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-10">Elevate your portfolio.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Application for Private Client is by invitation or through a formal application process. Minimum asset requirements apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Start Application" className="bg-white text-blue-600 px-12 py-5 font-bold rounded-2xl shadow-2xl" />
            <div className="flex items-center justify-center gap-2 font-bold cursor-pointer hover:text-blue-100 transition-colors">
              View requirements <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







