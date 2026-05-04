import React from "react";

const sampleSeries = [
  [10, 12, 9, 14, 13, 15, 16, 18, 17],
  [2, 3, 4, 6, 8, 9, 11, 13, 16],
  [5, 6, 7, 9, 12, 11, 10, 9, 8],
  [18, 17, 15, 16, 14, 13, 12, 11, 12],
];

function Sparkline({ points = [], color = "#16a34a" }) {
  if (!points || points.length === 0) return null;
  const w = 140;
  const h = 48;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => {
      const x = Math.round(i * step);
      const y = Math.round(h - ((p - min) / range) * (h - 8) - 4);
      return `${i === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join(" ");

  const areaD = d + ` L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12 mt-3">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.12" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#g1)" />
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const MarketStats = ({ cryptos = [] }) => {
  // We can derive some stats if needed, e.g. total tradeable assets
  const stats = [
    { title: "Total market cap", value: "$2.43T", change: "+0.35%", series: sampleSeries[0], color: "#16a34a" },
    { title: "Trade volume", value: "$183B", change: "+64.55%", series: sampleSeries[1], color: "#16a34a" },
    { title: "Tradable assets", value: cryptos.length, change: "Active", series: sampleSeries[2], color: "#16a34a" },
    { title: "BTC dominance", value: "60.06%", change: "-0.18%", series: sampleSeries[3], color: "#dc2626" },
  ];

  return (
    <div className="overflow-x-auto no-scrollbar mb-6">
      <div className="flex gap-4 py-2">
      {stats.map((s, i) => (
        <div key={i} className="p-4 bg-gray-200 rounded-lg border border-slate-200 min-w-[260px] shrink-0">
          <div className="text-sm text-slate-700">{s.title}</div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <div className="text-base font-medium text-slate-900">{s.value}</div>
              <div className={"text-sm " + (s.change.startsWith("+") ? "text-green-600" : "text-red-600")}>
                {s.change}
              </div>
            </div>
            <div className="text-xs text-slate-500">24h</div>
          </div>
          <Sparkline points={s.series} color={s.color} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default MarketStats;




