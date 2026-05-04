import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Rocket, Coffee, Zap, Users, ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Careers at our platform: Build the Future of Finance</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight">
              Build the future of <br />
              <span className="text-blue-600">finance.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              Join a team of builders, creators, and visionaries working to increase economic freedom for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button blue text="View open roles" className="px-10 py-5 font-bold rounded-2xl text-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" className="rounded-3xl aspect-square object-cover" alt="Work 1" />
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="rounded-3xl aspect-square object-cover mt-8" alt="Work 2" />
             </div>
          </div>
        </div>
      </section>

      {/* Why  */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">Why join us?</h2>
             <p className="text-xl text-gray-500">We're a remote-first company with a culture of excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket />, title: "Mission Driven", desc: "We are focused on our mission to increase economic freedom." },
              { icon: <Coffee />, title: "Remote First", desc: "Work from anywhere in the world where we have a legal entity." },
              { icon: <Zap />, title: "High Velocity", desc: "We move fast and value builders who take initiative." },
              { icon: <Users />, title: "Top Talent", desc: "Work with the best engineers and designers in the industry." }
            ].map((perk, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-gray-50 border border-gray-100">
                 <div className="text-blue-600 mb-6">{perk.icon}</div>
                 <h4 className="text-xl font-bold mb-2">{perk.title}</h4>
                 <p className="text-gray-500">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium mb-16 text-center">Find your team.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 "Engineering", "Product", "Design", "Legal & Compliance", "Marketing", "Customer Experience"
               ].map((team, i) => (
                 <div key={i} className="p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors flex justify-between items-center group cursor-pointer">
                    <span className="text-2xl font-bold">{team}</span>
                    <ArrowRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-10">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to make an impact?</h2>
            <p className="text-xl text-gray-500 mb-10">We're always looking for talented individuals to join our mission.</p>
            <Button blue text="See all open positions" className="px-10 py-5 font-bold rounded-2xl mx-auto" />
         </div>
      </section>
    </div>
  );
}






