"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatINR } from "@/lib/calculators";

type Props = {
  principal: number;
  interest: number;
};

export function AmortizationDonut({ principal, interest }: Props) {
  const data = [
    { name: "Principal", value: principal, fill: "#D4AF37" },
    { name: "Interest", value: interest, fill: "#5E4B1E" },
  ];
  return (
    <div className="w-full" style={{ height: 280 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="60%"
            outerRadius="90%"
            startAngle={90}
            endAngle={-270}
            stroke="#0A0A0A"
            strokeWidth={2}
          >
            {data.map((d) => (
              <Cell key={d.name} fill={d.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#1a1a1a",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 0,
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "#F5F0E3",
            }}
            formatter={(value, name) => [
              formatINR(typeof value === "number" ? value : 0),
              name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
