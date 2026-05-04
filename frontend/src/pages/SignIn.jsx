import React, { useState } from "react";
import { Search, X, Key, Globe, Apple } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function SignIn() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate?.() || (() => {});

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className=" bg-[#070809] text-white relative overscroll-x-none overflow-x-hidden">
      <Helmet>
            <title>Sign In — Coinbase Clone</title>
          </Helmet>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
            <Link to="/">
              <img src="/coinbase.png" className="h-10 w-10 filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(10%)_saturate(657%)_hue-rotate(230deg)_brightness(111%)_contrast(100%)]" alt="" />
            </Link>
          </div>
      </header>

      <main className="min-h-screen flex items-center justify-center px-4 pt-40">
        <div className="w-full sm:w-[30%] max-w-md">
          <h1 className="text-2xl font-bold mb-3">Sign in to Coinbase</h1>

          <form onSubmit={handleContinue} className="space-y-4">
            <label className="block text-sm text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent border border-slate-700 rounded-md px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={!email}
              className={`w-full rounded-full py-3 font-semibold ${email ? 'bg-[#2d4a8f]' : 'bg-slate-800 text-slate-400'}`}
            >
              Continue
            </button>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="flex-grow h-px bg-slate-800" />
              <div>OR</div>
              <div className="flex-grow h-px bg-slate-800" />
            </div>

            <button type="button" className="w-full rounded-full py-3 bg-[#282B31] flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white"><Key size={14} /></div>
              <span>Sign in with Passkey</span>
            </button>

            <button type="button" className="w-full rounded-full py-3 bg-[#282B31] flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white"><Globe size={14} /></div>
              <span>Sign in with Google</span>
            </button>

            <button type="button" className="w-full rounded-full py-3 bg-[#282B31]  flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white"><Apple size={14} /></div>
              <span>Sign in with Apple</span>
            </button>

            <div className="text-center text-sm text-slate-400">
              Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
            </div>

            <p className="text-xs text-slate-500 text-center">Not your device? Use a private window. See our <a className="underline">Privacy Policy</a> for more info.</p>
          </form>
        </div>
      </main>
    </div>
  );
}
