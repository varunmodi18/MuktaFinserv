"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { GrowthPoint } from "@/lib/calculators";
import { formatINR } from "@/lib/calculators";

type Props = {
  data: GrowthPoint[];
  height?: number;
};

export function GrowthChart({ data, height = 320 }: Props) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 12, right: 12, bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="mf-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="mf-ink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9F8F66" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#9F8F66" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="rgba(212,175,55,0.08)"
            strokeDasharray="2 4"
            vertical={false}
          />
          <XAxis
            dataKey="year"
            stroke="rgba(245,240,227,0.5)"
            tickLine={false}
            axisLine={{ stroke: "rgba(212,175,55,0.2)" }}
            fontSize={11}
            tickFormatter={(y) => `Y${y}`}
          />
          <YAxis
            stroke="rgba(245,240,227,0.5)"
            tickLine={false}
            axisLine={false}
            fontSize={11}
            tickFormatter={(v: number) => formatINR(v, { compact: true })}
            width={70}
          />
          <Tooltip
            cursor={{ stroke: "rgba(212,175,55,0.3)", strokeWidth: 1 }}
            contentStyle={{
              background: "#1a1a1a",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 0,
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "#F5F0E3",
            }}
            labelFormatter={(label) => `Year ${label}`}
            formatter={(value, name) => [
              formatINR(typeof value === "number" ? value : 0),
              name === "invested" ? "Invested" : "Projected",
            ]}
          />
          <Area
            type="monotone"
            dataKey="invested"
            stroke="#9F8F66"
            strokeWidth={1.5}
            fill="url(#mf-ink)"
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#D4AF37"
            strokeWidth={2}
            fill="url(#mf-gold)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
