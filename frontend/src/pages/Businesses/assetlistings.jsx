import React from "react";
import { Helmet } from "react-helmet-async";

export default function AssetListings() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Asset Listings — Coinbase Clone</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Asset Listings</h1>
    </div>
  );
}
