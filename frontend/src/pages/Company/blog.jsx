import React from "react";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <div className="p-6">
      <Helmet>
        <title>Blog — Coinbase Clone</title>
      </Helmet>
      <h1 className="text-2xl font-semibold">Blog</h1>
    </div>
  );
}
