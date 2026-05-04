import React from "react";
import { Helmet } from "react-helmet-async";

export default function VerifiedPools() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Verified Pools — Coinbase Clone</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Verified Pools</h1>
    </div>
  );
}
