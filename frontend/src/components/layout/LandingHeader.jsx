import { useState, useRef, useEffect } from "react";
import { Button } from "../common/button";
import { HoverCard } from "../common/hovercard";
import { Link } from "react-router-dom";
import {
    ArrowLeftRight, LineChart, Hexagon, Coins, Star, Briefcase,
    CreditCard, Wallet, BookOpen, Building2, Zap,
    ShoppingBag, PlusCircle, Gem, BarChart3, Banknote, RefreshCw,
    Lock, Globe, Layers, Activity, Cpu, CheckCircle2, Code2,
    Lightbulb, Building, Landmark, Rocket, Anchor, Info,
    UserPlus, Users, HelpCircle, Newspaper, Shield, Search
    , Menu, X
} from "lucide-react";

export const LandingHeader = ({ blue }) => {

    const Individuals = [
        { title: "Buy and sell", description: "Buy, sell and use crypto", icon: ArrowLeftRight, link: "/individuals/buyandsell" },
        { title: "Advanced", description: "Professional-grade trading tools", icon: LineChart, link: "/individuals/advanced" },
        { title: "Base App", description: "Post, earn, trade, and chat, all in one place rewards", icon: Hexagon, link: "/individuals/baseapp" },
        { title: "Earn", description: "Stake your crypto and earn rewards", icon: Coins, link: "/individuals/earn" },
        { title: " One", description: "Get zero trading fees and more", icon: Star, link: "/individuals/one" },
        { title: "Private Client", description: "For trusts, family offices, UHNWIs", icon: Briefcase, link: "/individuals/privateclient" },
        { title: "Credit Card", description: "Earn up to 4% bitcoin back", icon: CreditCard, link: "/individuals/creditcard" },
        { title: "Onchain", description: "Dive into the world of onchain apps", icon: Globe, link: "/individuals/onchain" },
        { title: "Debit Card", description: "Spend crypto, get crypto back", icon: Wallet, link: "/individuals/debitcard" },
        { title: "Learn", description: " Crypto tips and guides", icon: BookOpen, link: "/individuals/learn" },
    ]
    const Businesses = [
        { title: "Business", description: "Crypto trading and payments for startups and SMBs", icon: Building2, link: "/businesses/business" },
        { title: "Payments", description: "The stablecoin payments stack for commerce platforms", icon: Zap, link: "/businesses/payments" },
        { title: "Commerce", description: "Start accepting crypto payments", icon: ShoppingBag, link: "/businesses/commerce" },
        { title: "Asset Listings", description: "List your asset on ", icon: PlusCircle, link: "/businesses/assetlistings" },
    ]
    const Institutions = [
        { title: "Trading and Financing", description: "Professional prime brokerage services", icon: Banknote, link: "/institutions/tradingandfinancing" },
        { title: "Exchange", description: "Spot markets for high-frequency trading", icon: RefreshCw, link: "/institutions/exchange" },
        { title: "Custody", description: "Securely store all your digital assets", icon: Lock, link: "/institutions/custody" },
        { title: "International Exchange", description: "Access perpetual futures markets", icon: Globe, link: "/institutions/internationalexchange" },
        { title: "Staking", description: "Explore staking across our products", icon: Layers, link: "/institutions/staking" },
        { title: "Derivatives Exchange", description: "Trade an accessible futures market", icon: Activity, link: "/institutions/derivativesexchange" },
        { title: "Onchain Wallet", description: "Institutional-grade wallet to get onchain", icon: Cpu, link: "/institutions/onchainwallet" },
        { title: "Verified Pools", description: "Transparent, verified liquidity pools", icon: CheckCircle2, link: "/institutions/verifiedpools" },
    ]
    const Developers = [
        { title: "Payments", description: "Fast and global stablecoin payments with a single integration", icon: Zap, link: "/developers/payments" },
        { title: "Banks & Brokerages", description: "Secure, regulated offerings for retail, private banking, & institutional clients", icon: Building, link: "/developers/banksandbrokerages" },
        { title: "Trading", description: "Launch crypto trading and custody for your users", icon: LineChart, link: "/developers/trading" },
        { title: "Payment Firms", description: "Near-instant, low-cost, global payment rails for modern providers", icon: Landmark, link: "/developers/paymentfirms" },
        { title: "Wallets", description: "Deploy customizable and scalable wallets for your business", icon: Wallet, link: "/developers/wallets" },
        { title: "Startups", description: "Launch your business with the world's leader in crypto", icon: Rocket, link: "/developers/startups" },
        { title: "Stablecoins", description: "Access USDC and  Custom Stablecoins", icon: Anchor, link: "/developers/stablecoins" },
    ]
    const Company = [
        { title: "About", description: "Powering the crypto economy", icon: Info, link: "/company/about" },
        { title: "Careers", description: "Work with us", icon: UserPlus, link: "/company/careers" },
        { title: "Affiliates", description: "Help introduce the world to crypto", icon: Users, link: "/company/affiliates" },
        { title: "Support", description: "Find answers to your questions", icon: HelpCircle, link: "/company/support" },
        { title: "Blog", description: "Read the latest from ", icon: Newspaper, link: "/company/blog" },
        { title: "Security", description: "The most trusted & secure", icon: Shield, link: "/company/security" },
    ]
    const SideInfo = [
        { title: "Individuals", description: "Discover our suite of products for individuals", text: "Learn more", icon: Users, link: "" },
        { title: "Businesses", description: "Scale your business with our specialized tools", text: "Go to Payments >", icon: Building2, link: "" },
        { title: "Institutions", description: "Enterprise-grade solutions for institutional investors", text: "Learn more", icon: Landmark, link: "" },
        { title: "Developers", description: "Build the future of finance with our dev tools", text: "Learn more", icon: Code2, link: "" },
        { title: "Company", description: "Learn more about our mission and career opportunities", text: "Create your account", icon: Info, link: "" },
    ]

    const defaultPaths = {
        Individuals: '/individuals/buyandsell',
        Businesses: '/businesses/business',
        Institutions: '/institutions/tradingandfinancing',
        Developers: '/developers/payments',
        Company: '/company/about'
    }

    const [activeMenu, setActiveMenu] = useState(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const inputRef = useRef(null)

    const languages = [
        { name: 'English', region: 'Global' },
        { name: 'Español', region: 'United States' },
        { name: 'Deutsch', region: 'Germany' },
        { name: 'Français', region: 'France' },
        { name: 'Português', region: 'Brazil' },
        { name: 'Italiano', region: 'Italy' },
        { name: 'Nederlands', region: 'Netherlands' },
        { name: '日本語', region: 'Japan' },
        { name: '한국어', region: 'South Korea' },
        { name: '中文 (简体)', region: 'China' },
        { name: '中文 (繁體)', region: 'Taiwan' },
        { name: 'العربية', region: 'Middle East' },
        { name: 'हिन्दी', region: 'India' },
        { name: 'Русский', region: 'Russia' },
        { name: 'Svenska', region: 'Sweden' },
        { name: 'Norsk', region: 'Norway' },
    ]

    const searchItems = [
        { name: 'Bitcoin', symbol: 'BTC', price: 'GHS 68,533.88', change: '2.56%' },
        { name: 'Ethereum', symbol: 'ETH', price: 'GHS 2,017.24', change: '4.40%' },
        { name: 'Tether', symbol: 'USDT', price: 'GHS 1.00', change: '0.01%' },
        { name: 'NVIDIA', symbol: 'NVDA', price: 'GHS 180.31', change: '3.03%' },
        { name: 'Apple', symbol: 'AAPL', price: 'GHS 257.56', change: '0.32%' },
        { name: 'Alphabet', symbol: 'GOOGL', price: 'GHS 301.82', change: '1.12%' },
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const checkLogin = () => setIsLoggedIn(!!localStorage.getItem('token'));
        window.addEventListener('storage', checkLogin);
        return () => window.removeEventListener('storage', checkLogin);
    }, []);

    const handleHover = (data, category) => {
        const side = SideInfo.find(s => s.title === category);
        setActiveMenu({ data, side });
    }

    const handleMouseOut = () => {
        setActiveMenu(null);
    };
    return (
        <div className="fixed top-0 left-0 w-full z-50" onMouseLeave={handleMouseOut}>
            <header className="flex bg-white w-full h-fit items-center px-4 sm:px-8 py-3 shadow-2xs shadow-gray-200">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt=" Logo" className="w-auto h-6 sm:h-8" />
                    <ul className="hidden xl:flex justify-evenly gap-2 font-semibold text-base items-center">
                        <Link to="/explore">
                            <li className="hover:bg-gray-100 rounded-full px-3 py-2 cursor-pointer transition-colors">Cryptocurrencies</li>
                        </Link>
                        {[
                            { name: "Individuals", data: Individuals },
                            { name: "Businesses", data: Businesses },
                            { name: "Institutions", data: Institutions },
                            { name: "Developers", data: Developers },
                            { name: "Company", data: Company }
                        ].map((cat) => (
                            <li
                                key={cat.name}
                                className={`rounded-full px-3 py-2 cursor-pointer transition-all duration-200 ${activeMenu?.side?.title === cat.name ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                                onMouseEnter={() => handleHover(cat.data, cat.name)}
                            >
                                {cat.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <div className="hidden xl:flex items-center gap-2 relative">
                        <Button Icon={Search} className='w-10 h-10' onClick={() => { setShowLang(true); setShowSearch(true); setMobileOpen(false); setTimeout(() => inputRef.current?.focus(), 50) }} />
                        <button onClick={() => { setShowLang((s) => !s); setMobileOpen(false); }} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <Globe size={18} />
                        </button>
                        {isLoggedIn ? (
                             <Link to="/dashboard">
                                <Button text="Account" className="px-4 py-2 bg-blue-50 text-blue-600 font-bold" />
                             </Link>
                        ) : (
                            <>
                                <Link to='/signin'><Button text="Sign in" className='px-3 py-2' /></Link>
                                <Link to="/signup"><Button text="Sign up" blue={true} className='px-3 py-2' /></Link>
                            </>
                        )}
                        <button className="p-2 rounded-md" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 xl:hidden relative">
                        <Button Icon={Search} className='w-10 h-10' onClick={() => { setShowLang(true); setShowSearch(true); setMobileOpen(false); setTimeout(() => inputRef.current?.focus(), 50) }} />
                        <button onClick={() => { setShowLang((s) => !s); setMobileOpen(false); }} className="w-10 h-10 rounded-full bg-gray-100 hidden lg:inline-flex items-center justify-center">
                            <Globe size={18} />
                        </button>
                        {isLoggedIn ? (
                             <Link to="/dashboard">
                                <Button text="Account" className="px-4 py-2 bg-blue-50 text-blue-600 font-bold" />
                             </Link>
                        ) : (
                            <>
                                <Link to='/signin' ><Button text="Sign in" className='px-3 py-2 text-sm hidden lg:inline-flex' /></Link>
                                <Link to='/signup'><Button text="Sign up" blue={true} className='px-3 py-2 text-sm' /></Link>
                            </>
                        )}
                        <button className="p-2 rounded-md" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

            </header>

            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center">
                    <div className="absolute inset-0 bg-black/50 z-40" onClick={() => { setMobileOpen(false); setActiveMenu(null); }} />

                    <div className="relative inset-0 w-full h-full bg-white overflow-auto z-50">
                        <div className="flex items-center gap-3 px-3 py-3 border-b">
                            <button onClick={() => { setActiveMenu(null); }} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><ArrowLeftRight size={16} /></button>
                            <div className="flex-1 flex items-center gap-2">
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><Search size={16} /></button>
                                <div className="ml-auto">
                                    <Link to="/signup"><Button text="Sign up" blue className="px-3 py-1" /></Link>
                                </div>
                            </div>
                            <button onClick={() => { setMobileOpen(false); setActiveMenu(null); }} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><X size={16} /></button>
                        </div>

                        <nav className="p-4 h-full overflow-y-auto no-scrollbar">
                            {/* top-level link */}
                            {!activeMenu && (
                                <>
                                    <Link to="/explore" onClick={() => setMobileOpen(false)} className="block py-4 text-lg">Cryptocurrencies</Link>
                                    {[ {name: 'Individuals', data: Individuals}, {name: 'Businesses', data: Businesses}, {name: 'Institutions', data: Institutions}, {name: 'Developers', data: Developers}, {name: 'Company', data: Company} ].map((cat) => (
                                            <button key={cat.name} onClick={() => { handleHover(cat.data, cat.name); }} className="w-full text-left py-4 border-b flex items-center justify-between">{cat.name} <span className="text-slate-400">›</span></button>
                                    ))}
                                </>
                            )}

                            {/* submenu view when a category is active */}
                            {activeMenu && (
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <button onClick={() => setActiveMenu(null)} className="px-2 py-1 rounded-md hover:bg-gray-100">← Back</button>
                                        <div className="font-semibold">{activeMenu.side?.title || 'Menu'}</div>
                                        <div />
                                    </div>
                                    <div className="space-y-2">
                                        {activeMenu.data?.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                to={item.link || '#'}
                                                onClick={() => { setMobileOpen(false); setActiveMenu(null); }}
                                                className="block px-3 py-3 rounded-md hover:bg-gray-50 flex items-start gap-3"
                                            >
                                                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">{item.icon ? <item.icon size={16} /> : null}</div>
                                                <div>
                                                    <div className="font-medium">{item.title}</div>
                                                    <div className="text-sm text-slate-500">{item.description}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex items-center gap-3">
                                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><Globe size={16} /></button>
                                <Link to="/signin"><Button text="Sign in" className="px-3 py-1" /></Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}

            <div className="hidden xl:block">
                {activeMenu && <HoverCard data={activeMenu.data} side={activeMenu.side} />}
            </div>

            {showLang && (
                <div className={`absolute top-16 right-6 z-50 ${searchValue ? 'w-[44rem] lg:w-[44rem]' : 'w-80'} bg-white rounded-xl shadow-lg border border-slate-100`}> 
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-800">Language and region</h4>
                            <button onClick={() => { setShowLang(false); setSearchValue(''); setShowSearch(false); }} className="text-slate-400 hover:text-slate-600">Close</button>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center bg-slate-100 rounded-full px-3 py-2">
                                <Search size={16} className="text-slate-500" />
                                <input
                                    ref={inputRef}
                                    placeholder="Search"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    onFocus={() => { setShowLang(true); setShowSearch(true) }}
                                    className="ml-3 bg-transparent outline-none text-sm w-full"
                                />
                            </div>

                            {/* if searching, show a wider card with tabs and results */}
                            {searchValue || showSearch ? (
                                <div className="mt-3 grid grid-cols-3 gap-4">
                                    <div className="col-span-3 flex gap-2">
                                        {['Top','Crypto','Stocks','Predictions','Perpetuals','Futures'].map((c) => (
                                            <button key={c} className="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">{c}</button>
                                        ))}
                                    </div>

                                    <div className="col-span-2 max-h-72 overflow-y-auto pr-2 no-scrollbar">
                                        {searchItems.filter(si => si.name.toLowerCase().includes(searchValue.toLowerCase()) || si.symbol.toLowerCase().includes(searchValue.toLowerCase())).map((s, idx) => (
                                            <div key={idx} className="flex items-center justify-between py-2 px-2 rounded hover:bg-slate-50">
                                                <div>
                                                    <div className="font-medium text-slate-800">{s.name} <span className="text-xs text-slate-400">#{s.symbol}</span></div>
                                                    <div className="text-xs text-slate-500">GHS {s.symbol === 'BTC' ? '50.5B vol' : '—'} • {s.symbol === 'BTC' ? 'GHS 1.4T mcap' : ''}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-medium text-slate-800">{s.price}</div>
                                                    <div className="text-sm text-green-600">↗ {s.change}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-span-1 max-h-72 overflow-y-auto border-l pl-3 no-scrollbar">
                                        {/* Small quick list of categories or related assets */}
                                        <div className="font-semibold text-slate-700 mb-2">Crypto</div>
                                        {searchItems.map((s, i) => (
                                            <div key={i} className="py-2 text-sm text-slate-600">{s.name} • {s.symbol}</div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-3 max-h-60 overflow-y-auto grid gap-1 no-scrollbar">
                                    {languages.map((l, i) => (
                                        <div key={i} className="flex items-center justify-between py-2 px-2 rounded hover:bg-slate-50">
                                            <div>
                                                <div className="font-medium text-slate-800">{l.name}</div>
                                                <div className="text-xs text-slate-500">{l.region}</div>
                                            </div>
                                            <div className="text-green-600">{i === 0 ? '✓' : ''}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}





