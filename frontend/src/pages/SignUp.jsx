import { registerUser } from "../utils/api";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await registerUser({ name, email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070809] text-white relative overscroll-x-none overflow-x-hidden">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" className="h-10 w-10 filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(10%)_saturate(657%)_hue-rotate(230deg)_brightness(111%)_contrast(100%)]" alt="" />
          </Link>
        </div>
      </header>

      <main className="min-h-screen flex items-center justify-center px-4 pt-40">
        <div className="w-full sm:w-[30%]  max-w-md">
          <h1 className="text-2xl font-bold mb-3">Create your account</h1>
          <p className="text-sm text-slate-400 mb-6">Access all that  has to offer with a single account.</p>

          {error && <div className="bg-red-500/20 text-red-500 p-3 rounded-md mb-4 text-sm">{error}</div>}

          <form onSubmit={handleContinue} className="space-y-4">
            <label className="block text-sm text-slate-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full bg-transparent border border-slate-700 rounded-md px-4 py-3 placeholder-slate-500 focus:outline-none"
              required
            />

            <label className="block text-sm text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent border border-slate-700 rounded-md px-4 py-3 placeholder-slate-500 focus:outline-none"
              required
            />

            <label className="block text-sm text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              className="w-full bg-transparent border border-slate-700 rounded-md px-4 py-3 placeholder-slate-500 focus:outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading || !email || !password || !name}
              className={`w-full rounded-full py-3 font-semibold transition-all ${email && password && name && !loading ? 'bg-[#2d4a8f] hover:bg-[#3a5bb3]' : 'bg-slate-800 text-slate-400 cursor-not-allowed'}`}
            >
              {loading ? "Creating account..." : "Continue"}
            </button>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="flex-grow h-px bg-slate-800" />
              <div>OR</div>
              <div className="flex-grow h-px bg-slate-800" />
            </div>

            <button type="button" className="w-full rounded-full py-3 bg-[#282B31] flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">G</div>
              <span>Sign up with Google</span>
            </button>

            <button type="button" className="w-full rounded-full py-3 bg-[#282B31] flex items-center gap-3 justify-center">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold"></div>
              <span>Sign up with Apple</span>
            </button>

            <div className="text-center text-sm text-slate-400">
              Already have an account? <Link to="/signin" className="text-blue-500">Sign in</Link>
            </div>

            <p className="text-xs text-slate-500 text-center">By creating an account you certify that you are over the age of 18 and agree to our <a className="underline">Privacy Policy</a> and <a className="underline">Cookie Policy</a>.</p>
          </form>
        </div>
      </main>
    </div>
  );
}





