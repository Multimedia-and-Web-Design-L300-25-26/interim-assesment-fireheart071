import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Globe, Users, Heart, Shield, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About our Platform Our Mission & Vision</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-tight mb-8">
            Our mission is to increase <br />
            <span className="text-blue-600">economic freedom</span> in the world.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto mb-12">
            We believe that everyone should have access to financial services that can help them build a better life for themselves and their families.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
            alt="Team" 
            className="w-full max-w-5xl mx-auto rounded-[60px] shadow-2xl"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Globe />, title: "Global Access", desc: "Building a more open financial system for everyone, everywhere." },
              { icon: <Users />, title: "Customer First", desc: "Every decision we make starts with what's best for our users." },
              { icon: <Shield />, title: "Safety & Trust", desc: "We hold ourselves to the highest standards of security and compliance." },
              { icon: <Heart />, title: "Inclusion", desc: "Creating a workplace and product where everyone feels they belong." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col gap-4">
                 <div className="text-blue-600 mb-2">{value.icon}</div>
                 <h3 className="text-xl font-bold">{value.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
           <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-medium mb-8">The  Story</h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                 <p>
                    Founded in 2012,  was built on the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin.
                 </p>
                 <p>
                    Today, we offer a trusted and easy-to-use platform for accessing the broader crypto economy. We are a publicly traded company (NASDAQ: COIN) and serve over 100 million users worldwide.
                 </p>
              </div>
           </div>
           <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-blue-600 p-8 rounded-3xl text-white">
                 <p className="text-4xl font-bold mb-2">2012</p>
                 <p className="text-blue-100 text-sm font-medium uppercase">Founded</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-3xl">
                 <p className="text-4xl font-bold mb-2">100M+</p>
                 <p className="text-gray-500 text-sm font-medium uppercase">Users</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-3xl">
                 <p className="text-4xl font-bold mb-2">100+</p>
                 <p className="text-gray-500 text-sm font-medium uppercase">Countries</p>
              </div>
              <div className="bg-black p-8 rounded-3xl text-white">
                 <p className="text-4xl font-bold mb-2">COIN</p>
                 <p className="text-gray-400 text-sm font-medium uppercase">NASDAQ</p>
              </div>
           </div>
        </div>
      </section>

      {/* Join the mission */}
      <section className="py-32 px-4 sm:px-10 bg-blue-600 text-white rounded-[60px] mx-4 sm:mx-10 mb-20 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium mb-10">Join us in building the future.</h2>
            <p className="text-xl text-blue-100 mb-12">We're looking for passionate people to help us build the future of finance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button text="View open roles" className="bg-white text-blue-600 px-10 py-5 font-bold rounded-2xl" />
            </div>
         </div>
      </section>
    </div>
  );
}






