import React from "react";
import { Helmet } from "react-helmet-async";

export default function BaseApp() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Base App — Coinbase Clone</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Base App</h1>
    </div>
  );
}
