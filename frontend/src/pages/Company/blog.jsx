import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { BookOpen, Search, ArrowRight, Calendar } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      category: "Company News",
      title: "Coinbase and Google Cloud partner to drive Web3 innovation",
      excerpt: "Today, we're announcing a strategic partnership to enable the Web3 ecosystem with Google Cloud's infrastructure.",
      date: "Oct 11, 2023",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Product Updates",
      title: "Introducing the new Coinbase Wallet experience",
      excerpt: "We've redesigned Coinbase Wallet from the ground up to make it easier to explore the world of DeFi and NFTs.",
      date: "Oct 05, 2023",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Policy",
      title: "Our commitment to regulatory clarity",
      excerpt: "How we're working with policymakers globally to build a safer, more transparent financial system.",
      date: "Sep 28, 2023",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Coinbase Blog — Coinbase Clone</title>
      </Helmet>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
           <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                 <BookOpen size={20} />
                 <span>Coinbase Blog</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight">The latest from <br /> the crypto world.</h1>
           </div>
           <div className="w-full md:w-auto">
              <div className="relative group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                 <input 
                   type="text" 
                   placeholder="Search articles..." 
                   className="w-full md:w-80 pl-12 pr-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
           <div className="group cursor-pointer">
              <div className="relative h-[400px] md:h-[600px] rounded-[48px] overflow-hidden mb-10">
                 <img 
                   src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600" 
                   alt="Featured Post" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12 text-white">
                    <span className="bg-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block">Featured</span>
                    <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">The Future of the Crypto <br /> Economy is On-chain</h2>
                    <div className="flex items-center gap-6 text-gray-300">
                       <span className="flex items-center gap-2"><Calendar size={16} /> Oct 15, 2023</span>
                       <span>By Brian Armstrong</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-32 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                 <div className="h-64 rounded-[32px] overflow-hidden mb-8">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">{post.category}</span>
                 <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                 <p className="text-gray-500 mb-6 line-clamp-2">{post.excerpt}</p>
                 <div className="flex items-center gap-2 font-bold text-gray-400 group-hover:text-black transition-colors">
                    Read more <ArrowRight size={18} />
                 </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
             <Button text="Load more articles" className="px-12 py-5 font-bold rounded-2xl border border-gray-100 hover:bg-gray-50" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 sm:px-10 bg-[#0a0b0d] text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
         <div className="max-w-4xl mx-auto text-center flex flex-col gap-10">
            <h2 className="text-4xl md:text-5xl font-medium">Subscribe to our newsletter.</h2>
            <p className="text-xl text-gray-400">Get the latest crypto news and product updates delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full">
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
               />
               <Button blue text="Subscribe" className="px-10 py-5 font-bold rounded-2xl" />
            </div>
         </div>
      </section>
    </div>
  );
}

