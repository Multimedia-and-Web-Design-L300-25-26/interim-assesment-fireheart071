import React from "react";
import { Helmet } from "react-helmet-async";

export default function OnchainWallet() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Onchain Wallet — Coinbase Clone</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Onchain Wallet</h1>
    </div>
  );
}
