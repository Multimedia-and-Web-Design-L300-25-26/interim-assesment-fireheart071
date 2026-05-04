import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components/common/button";
import { Search, BookOpen, Video, Newspaper, ArrowRight, Play } from "lucide-react";

export default function Learn() {
  const categories = [
    "Crypto Basics",
    "Tips & Tutorials",
    "Market Updates",
    "Security",
    "Trading Strategies",
    "Web3 & DeFi"
  ];

  const articles = [
    {
      title: "What is Bitcoin?",
      category: "Crypto Basics",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
      time: "5 min read"
    },
    {
      title: "How to set up a crypto wallet",
      category: "Tips & Tutorials",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
      time: "8 min read"
    },
    {
      title: "Understanding Ethereum Gas Fees",
      category: "Web3 & DeFi",
      image: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?auto=format&fit=crop&q=80&w=800",
      time: "6 min read"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Learn Crypto: Guides & Tips</title>
      </Helmet>

      {/* Header Section */}
      <section className="pt-20 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-medium tracking-tight mb-6">Learn crypto.</h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                Your guide to the world of crypto. From the basics to advanced trading strategies, we've got you covered.
              </p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for guides..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-12 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="relative group cursor-pointer overflow-hidden rounded-[40px]">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
                alt="Featured"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
                <span className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">Featured Guide</span>
                <h2 className="text-4xl font-bold mb-6 group-hover:text-blue-400 transition-colors">The Crypto Tax Guide 2024: Everything You Need to Know</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span className="text-sm font-medium">15 min read</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 justify-center">
              <h2 className="text-3xl font-bold">New to crypto?</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Starting your crypto journey can be overwhelming. We've curated a list of essential reads to help you understand the fundamentals and start trading with confidence.
              </p>
              <div className="space-y-4">
                {[
                  "How does Bitcoin actually work?",
                  "What is a blockchain?",
                  "Different types of cryptocurrencies",
                  "Investing vs. Trading: What's the difference?"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group">
                    <span className="font-bold text-lg">{item}</span>
                    <ArrowRight className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-[32px] mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2 block">{article.category}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span>{article.time}</span>
                  <span>•</span>
                  <span>Jan 24, 2024</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-black py-32 px-4 sm:px-10 text-white rounded-[60px] mx-4 sm:mx-10 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Watch and learn.</h2>
              <p className="text-xl text-gray-400">Short, digestible videos to help you master the crypto markets.</p>
            </div>
            <Button text="View all videos" className="bg-white text-black px-8 py-4 font-bold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: " 101: Your First Trade", duration: "2:45" },
              { title: "Securing Your Account with 2FA", duration: "1:30" }
            ].map((video, i) => (
              <div key={i} className="relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gray-800" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play fill="white" className="text-white ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-xl font-bold mb-1">{video.title}</h4>
                  <p className="text-sm text-gray-400">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <Newspaper className="mx-auto mb-8 text-blue-600" size={48} />
          <h2 className="text-4xl font-bold mb-6">Weekly market insights.</h2>
          <p className="text-xl text-gray-500 mb-10">Get the latest crypto news, technical analysis, and market updates delivered to your inbox every Friday.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <Button blue text="Subscribe" className="px-10 py-4 font-bold" />
          </div>
          <p className="text-xs text-gray-400 mt-6 italic">By subscribing, you agree to our privacy policy and terms of service.</p>
        </div>
      </section>
    </div>
  );
}







