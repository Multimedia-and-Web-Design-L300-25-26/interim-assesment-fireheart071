import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout";
import { Explore } from "./pages/Explore.jsx";
import { Landing } from "./pages/Landing.jsx";
import { SignUp} from "./pages/SignUp.jsx";
import {SignIn } from "./pages/SignIn.jsx"
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Individuals
import BuyAndSell from "./pages/Individuals/buyandsell.jsx";
import Advanced from "./pages/Individuals/advanced.jsx";
import BaseApp from "./pages/Individuals/baseapp.jsx";
import Earn from "./pages/Individuals/earn.jsx";
import CoinbaseOne from "./pages/Individuals/coinbaseone.jsx";
import PrivateClient from "./pages/Individuals/privateclient.jsx";
import CreditCard from "./pages/Individuals/creditcard.jsx";
import Onchain from "./pages/Individuals/onchain.jsx";
import DebitCard from "./pages/Individuals/debitcard.jsx";
import Learn from "./pages/Individuals/learn.jsx";

// Businesses
import Business from "./pages/Businesses/business.jsx";
import PaymentsBiz from "./pages/Businesses/payments.jsx";
import Commerce from "./pages/Businesses/commerce.jsx";
import AssetListings from "./pages/Businesses/assetlistings.jsx";

// Institutions
import TradingAndFinancing from "./pages/Institutions/tradingandfinancing.jsx";
import Exchange from "./pages/Institutions/exchange.jsx";
import Custody from "./pages/Institutions/custody.jsx";
import InternationalExchange from "./pages/Institutions/internationalexchange.jsx";
import Staking from "./pages/Institutions/staking.jsx";
import DerivativesExchange from "./pages/Institutions/derivativesexchange.jsx";
import OnchainWallet from "./pages/Institutions/onchainwallet.jsx";
import VerifiedPools from "./pages/Institutions/verifiedpools.jsx";

// Developers
import DevPayments from "./pages/Developers/payments.jsx";
import BanksAndBrokerages from "./pages/Developers/banksandbrokerages.jsx";
import DevTrading from "./pages/Developers/trading.jsx";
import PaymentFirms from "./pages/Developers/paymentfirms.jsx";
import Wallets from "./pages/Developers/wallets.jsx";
import Startups from "./pages/Developers/startups.jsx";
import Stablecoins from "./pages/Developers/stablecoins.jsx";

// Company
import About from "./pages/Company/about.jsx";
import Careers from "./pages/Company/careers.jsx";
import Affiliates from "./pages/Company/affiliates.jsx";
import Support from "./pages/Company/support.jsx";
import Blog from "./pages/Company/blog.jsx";
import Security from "./pages/Company/security.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Individuals */}
        <Route path="/individuals/buyandsell" element={<BuyAndSell />} />
        <Route path="/individuals/advanced" element={<Advanced />} />
        <Route path="/individuals/baseapp" element={<BaseApp />} />
        <Route path="/individuals/earn" element={<Earn />} />
        <Route path="/individuals/coinbaseone" element={<CoinbaseOne />} />
        <Route path="/individuals/privateclient" element={<PrivateClient />} />
        <Route path="/individuals/creditcard" element={<CreditCard />} />
        <Route path="/individuals/onchain" element={<Onchain />} />
        <Route path="/individuals/debitcard" element={<DebitCard />} />
        <Route path="/individuals/learn" element={<Learn />} />

        {/* Businesses */}
        <Route path="/businesses/business" element={<Business />} />
        <Route path="/businesses/payments" element={<PaymentsBiz />} />
        <Route path="/businesses/commerce" element={<Commerce />} />
        <Route path="/businesses/assetlistings" element={<AssetListings />} />

        {/* Institutions */}
        <Route path="/institutions/tradingandfinancing" element={<TradingAndFinancing />} />
        <Route path="/institutions/exchange" element={<Exchange />} />
        <Route path="/institutions/custody" element={<Custody />} />
        <Route path="/institutions/internationalexchange" element={<InternationalExchange />} />
        <Route path="/institutions/staking" element={<Staking />} />
        <Route path="/institutions/derivativesexchange" element={<DerivativesExchange />} />
        <Route path="/institutions/onchainwallet" element={<OnchainWallet />} />
        <Route path="/institutions/verifiedpools" element={<VerifiedPools />} />

        {/* Developers */}
        <Route path="/developers/payments" element={<DevPayments />} />
        <Route path="/developers/banksandbrokerages" element={<BanksAndBrokerages />} />
        <Route path="/developers/trading" element={<DevTrading />} />
        <Route path="/developers/paymentfirms" element={<PaymentFirms />} />
        <Route path="/developers/wallets" element={<Wallets />} />
        <Route path="/developers/startups" element={<Startups />} />
        <Route path="/developers/stablecoins" element={<Stablecoins />} />

        {/* Company */}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/affiliates" element={<Affiliates />} />
        <Route path="/company/support" element={<Support />} />
        <Route path="/company/blog" element={<Blog />} />
        <Route path="/company/security" element={<Security />} />
      </Route>
      <Route path="signup" element={<SignUp/>} />
      <Route path="signin" element={<SignIn />}/>
    </Routes>
  );
}

export default App;