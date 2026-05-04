import { Link } from "react-router-dom";

export const Footer = () => (
    <>
        <footer className="pb-12 flex flex-col gap-8 bg-gray-200 w-full h-fit items-center px-4 sm:px-8 py-6 shadow-2xs shadow-gray-200">
            <div className="flex justify-center w-full pt-8">
                <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start">
                    <div>
                        <img src="/logo.png" alt="" className="w-auto h-8 sm:h-10" />
                    </div>

                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Company</span>
                            <div className="flex flex-col gap-2">
                                {[{ label: "About", to: "/company/about" }, { label: "Careers", to: "/company/careers" }, { label: "Affiliates", to: "/company/affiliates" }, { label: "Blog", to: "/company/blog" }, { label: "Press" }, { label: "Security", to: "/company/security" }, { label: "Investors" }, { label: "Vendors" }, { label: "Legal & privacy" }, { label: "Cookie policy" }, { label: "Cookie preferences" }, { label: "Do Not Share My Personal Information" }, { label: "Digital Asset Disclosures" }].map((item, index) => (
                                    item.to ? (
                                        <Link key={index} to={item.to} className="flex text-blue-600">{item.label}</Link>
                                    ) : (
                                        <span key={index} className="flex">{item.label}</span>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Learn</span>
                            {["Explore Market statistics", " Bytes newsletter", "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates", "What is Bitcoin?", "What is crypto?", "What is a blockchain?", "How to set up a crypto wallet?", "How to send crypto?", "Taxes"].map((item, index) => (
                                <span key={index} className="flex">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Individuals</span>
                            {[{ label: "Buy & sell", to: "/individuals/buyandsell" }, { label: "Earn free crypto", to: "/individuals/earn" }, { label: "Base App", to: "/individuals/baseapp" }, { label: " One", to: "/individuals/one" }, { label: "Debit Card", to: "/individuals/debitcard" }].map((item, index) => (
                                <Link key={index} to={item.to} className="flex text-blue-600">{item.label}</Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Businesses</span>
                            {[{ label: "Asset Listings", to: "/businesses/assetlistings" }, { label: " Business", to: "/businesses/business" }, { label: "Payments", to: "/businesses/payments" }, { label: "Commerce", to: "/businesses/commerce" }].map((item, index) => (
                                <Link key={index} to={item.to} className="flex text-blue-600">{item.label}</Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Institutions</span>
                            {[{ label: "Prime" }, { label: "Staking", to: "/institutions/staking" }, { label: "Exchange", to: "/institutions/exchange" }, { label: "International Exchange", to: "/institutions/internationalexchange" }, { label: "Derivatives Exchange", to: "/institutions/derivativesexchange" }, { label: "Verified Pools", to: "/institutions/verifiedpools" }].map((item, index) => (
                                item.to ? (
                                    <Link key={index} to={item.to} className="flex text-blue-600">{item.label}</Link>
                                ) : (
                                    <span key={index} className="flex">{item.label}</span>
                                )
                            ))}
                        </div>
                    </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold">Developers</span>
                                {[{ label: "Developer Platform" }, { label: "Base" }, { label: "Server Wallets" }, { label: "Embedded Wallets" }, { label: "Base Accounts (Smart Wallets)" }, { label: "Onramp & Offramp" }, { label: "Payments", to: "/developers/payments" }, { label: "Trade API" }, { label: "Wallets", to: "/developers/wallets" }, { label: "Trading", to: "/developers/trading" }, { label: "Stablecoins", to: "/developers/stablecoins" }].map((item, index) => (
                                    item.to ? (
                                        <Link key={index} to={item.to} className="flex text-blue-600">{item.label}</Link>
                                    ) : (
                                        <span key={index} className="flex">{item.label}</span>
                                    )
                                ))}
                            </div>
                        </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Support</span>
                            {["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods", "Account access", "Supported crypto", "Status"].map((item, index) => (
                                <span key={index} className="flex">{item}</span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Asset prices</span>
                            {["Bitcoin price", "Ethereum price", "Solana price", "XRP price"].map((item, index) => (
                                <span key={index} className="flex">{item}</span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">Stock prices</span>
                            {["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"].map((item, index) => (
                                <span key={index} className="flex">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="flex gap-8 w-full flex-col">
                    <div className="flex gap-12  justify-start">
                        <img src="/x-light.svg" alt="X icon" />
                        <img src="/linkedin-light.svg" alt="LinkedIn icon" />
                        <img src="/instagram-light.svg" alt="Instagram icon" />
                        <img src="/tiktok-light.svg" alt="Tiktok icon" />
                    </div>
                    <div className="w-full bg-gray-300 h-px"></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
                    <div>© 2026  <span className="text-gray-500">• Privacy • Terms & Conditions</span></div>
                    <div className="text-gray-500 inline-flex gap-2 justify-center items-center">
                        <img src="/globe1.svg" alt="Globe icon" className="w-5 h-5" />
                        <button> Global</button>
                        •
                        <button> English </button>
                    </div>
                </div>

            </div>
        </footer>
    </>
)




