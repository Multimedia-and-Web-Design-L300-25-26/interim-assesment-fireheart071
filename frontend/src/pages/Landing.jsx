import { useEffect } from "react";
import { Button } from "../components/common/button";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const Landing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
    <>
    <Helmet>
            <title>Home</title>
          </Helmet>
        <div>
            <section className="flex flex-col md:flex-row py-12 sm:py-18 px-4 sm:px-10 w-full items-center max-w-7xl mx-auto gap-8">
                <div className="w-full md:w-4/5 ">
                    <img src="/Hero__4_.avif" alt="Hero Image" className="w-full h-auto object-contain rounded-[28px] shadow-2xl mb-4" />
                    <p className="text-sm text-gray-500 font-medium">Stocks and prediction markets not available in your jurisdiction.</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight sm:leading-[0.95] tracking-[-1px] font-medium">
                        The future of finance is here.
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                        Trade crypto and more on a platform you can trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <input type="email" placeholder="satoshi@nakamoto.com" className="p-4 border rounded-[12px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent grow md:max-w-xs transition-all" />
                        <Button text="Sign Up" blue className="px-8 py-4 font-bold rounded-full" />
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 flex flex-col md:flex-row w-full px-4 sm:px-10 py-12 sm:py-20 items-center justify-between gap-10">
                <div className="w-full md:w-1/2 md:pr-6 lg:pl-10 px-4 sm:px-0">
                    <h2 className="text-4xl md:text-[44px] leading-tight font-medium text-gray-900 mb-4 tracking-tight">
                        Explore crypto like Bitcoin, <br className="hidden md:block" />
                        Ethereum, and Dogecoin.
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                    </p>
                    <Link to="/explore">
                        <Button text="See more assets" black className="px-6 py-3 font-semibold rounded-full hover:bg-gray-800" />
                    </Link>
                </div>

                <div className="w-full md:w-[650px] lg:mr-10 bg-[#111111] rounded-[24px] text-white p-6 sm:p-8 shadow-xl mx-4 sm:mx-0">
                    {/* Tabs */}
                    <div className="flex gap-6 mb-8 text-[15px] font-semibold text-gray-400 pb-2">
                        <button className="bg-[#2b2b2b] text-white px-4 py-1.5 rounded-full transition-colors">Tradable</button>
                        <button className="px-2 py-1.5 hover:text-white transition-colors">Top gainers</button>
                        <button className="px-2 py-1.5 hover:text-white transition-colors">New on </button>
                    </div>

                    {/* List */}
                    <div className="flex flex-col gap-4">
                        {/* Bitcoin */}
                        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" className="w-9 h-9 rounded-full" />
                                <span className="text-xl font-medium">Bitcoin</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] font-medium">GHS 715,818.66</p>
                                <p className="text-sm text-[#f6465d] font-medium mt-0.5">↙ 1.55%</p>
                            </div>
                        </div>

                        {/* Ethereum */}
                        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" className="w-9 h-9 rounded-full" />
                                <span className="text-xl font-medium">Ethereum</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] font-medium">GHS 20,990.54</p>
                                <p className="text-sm text-[#f6465d] font-medium mt-0.5">↙ 1.40%</p>
                            </div>
                        </div>

                        {/* Tether */}
                        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="Tether" className="w-9 h-9 rounded-full" />
                                <span className="text-xl font-medium">Tether</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] font-medium">GHS 10.80</p>
                                <p className="text-sm text-[#0ecb81] font-medium mt-0.5">↗ 0.01%</p>
                            </div>
                        </div>

                        {/* BNB */}
                        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BNB" className="w-9 h-9 rounded-full" />
                                <span className="text-xl font-medium">BNB</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] font-medium">GHS 6,625.29</p>
                                <p className="text-sm text-[#f6465d] font-medium mt-0.5">↙ 1.05%</p>
                            </div>
                        </div>

                        {/* XRP */}
                        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5">
                                    <img src="https://cryptologos.cc/logos/xrp-xrp-logo.png" alt="XRP" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-xl font-medium">XRP</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] font-medium">GHS 14.52</p>
                                <p className="text-sm text-[#f6465d] font-medium mt-0.5">↙ 0.81%</p>
                            </div>
                        </div>

                        {/* USDC */}
                        <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-4">
                                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USDC" className="w-9 h-9 rounded-full" />
                                <span className="text-xl font-medium">USDC</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[17px] font-medium">GHS 10.80</p>
                                <p className="text-sm text-gray-500 font-medium mt-0.5">--</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col py-16 sm:py-24 gap-20 max-w-7xl mx-auto px-4 sm:px-10">
                {/* Advanced Trader Section */}
                <div className="flex flex-col md:flex-row w-full gap-12 justify-center items-center">
                    <div className="w-full md:w-1/2">
                        <img src="/Advanced.avif" alt="Advanced Trading" className="rounded-[40px] w-full h-auto object-cover shadow-2xl" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                            Powerful tools, designed for the advanced trader.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                            Powerful analytical tools with the safety and security of  deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
                        </p>
                        <Link to="/individuals/advanced">
                            <Button black text='Start trading' className="px-8 py-4 font-semibold rounded-full hover:bg-gray-800" />
                        </Link>
                    </div>
                </div>

                {/*  One Section */}
                <div className="flex flex-col md:flex-row w-full gap-12 justify-center items-center">
                    <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
                        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 w-fit">
                            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">O</span>
                            </div>
                            <span className="text-[13px] font-bold tracking-widest text-gray-800 uppercase"> One</span>
                        </div>
                        <h2 className="text-5xl font-medium tracking-tight leading-tight">
                            Zero trading fees, more rewards.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                            Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
                        </p>
                        <Link to="/individuals/one">
                            <Button black text='Claim free trial' className="px-8 py-4 font-semibold rounded-full hover:bg-gray-800" />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 px-4 sm:px-0">
                        <div className="bg-[#f0f2f5] rounded-[32px] p-6 sm:p-12 flex justify-center items-center shadow-inner">
                            <img src="/zero_fees_us.png" alt=" One Mobile" className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl translate-y-4" />
                        </div>
                    </div>
                </div>
                {/* Base App Section */}
                <div className="flex flex-col md:flex-row w-full gap-12 justify-center items-center">
                    <div className="w-full md:w-1/2">
                        <div className="bg-[#f0f2f5] rounded-[48px] p-4 flex justify-center items-center">
                            <img src="/CB_LOLP__1_.avif" alt="Base App Mobile" className="w-full max-w-[400px] min-h-[350px] object-contain" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 w-fit">
                            <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 border-2 border-white rounded-full"></div>
                            </div>
                            <span className="text-[13px] font-bold tracking-widest text-gray-800 uppercase">Base App</span>
                        </div>
                        <h2 className="text-5xl font-medium tracking-tight leading-tight">
                            Countless ways to earn crypto with the Base App.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                            An everything app to trade, create, discover, and chat, all in one place.
                        </p>
                        <Link to="/individuals/baseapp">
                            <Button black text='Learn more' className="px-8 py-4 font-semibold rounded-full hover:bg-gray-800" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-gray-200 w-full py-16 px-4 sm:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                        <div className="max-w-xl">
                            <h2 className="text-6xl font-medium tracking-tight leading-tight">New to crypto?<br />Learn some crypto basics</h2>
                        </div>
                        <div className="flex flex-col gap-6 max-w-sm">
                            <p className="text-gray-500 text-lg">
                                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
                            </p>
                            <Link to="/individuals/learn">
                                <Button text="Read More" className="px-8 py-4 font-semibold rounded-full w-fit" black />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* USDC Card */}
                        <div className="group cursor-pointer">
                            <div className="rounded-[32px] overflow-hidden mb-6 bg-black">
                                <img src="/image.png" alt="USDC basics" className="w-full aspect-16/10 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-3xl font-medium leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                                USDC: The digital dollar for the global crypto economy
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed line-clamp-3">
                                 believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...
                            </p>
                        </div>

                        {/* Bank Replacement Card */}
                        <div className="group cursor-pointer">
                            <div className="rounded-[32px] overflow-hidden mb-6 bg-blue-600">
                                <img src="/image copy.png" alt="Bank replacement" className="w-full aspect-16/10 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-3xl font-medium leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                                Can crypto really replace your bank account?
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed line-clamp-3">
                                If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...
                            </p>
                        </div>

                        {/* Investing Time Card */}
                        <div className="group cursor-pointer">
                            <div className="rounded-[32px] overflow-hidden mb-6 bg-gray-200">
                                <img src="/image copy 2.png" alt="When to invest" className="w-full aspect-16/10 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-3xl font-medium leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                                When is the best time to invest in crypto?
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed line-clamp-3">
                                Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full pt-20 pb-10 px-4 sm:px-10 flex flex-col gap-20">
                <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                        <h2 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1]">
                            Take control of your money
                        </h2>
                        <p className="text-xl text-gray-500 font-medium">
                            Start your portfolio today and discover crypto
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4 max-w-md mx-auto md:mx-0">
                            <input
                                type="email"
                                placeholder="satoshi@nakamoto.com"
                                className="p-4 border rounded-[12px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent grow transition-all"
                            />
                            <Button blue text='Sign up' className="px-8 py-4 font-bold rounded-full" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 sm:px-0">
                        <img src="/image.avif" alt="Crypto portfolio" className="w-full max-w-[700px] h-auto object-contain" />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto text-center flex flex-col gap-4">
                    <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        DEX trading is offered by  Bermuda Technologies Ltd.
                    </h5>
                    <p className="text-[11px] leading-relaxed text-gray-400 max-w-2xl mx-auto">
                        Products and features may not be available in all regions. Information is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
                    </p>
                </div>
            </section>
        </div>
    </>
    );
};





