import { CountUp } from "@/components/shared/CountUp";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 1250, prefix: "₹", suffix: " Cr", label: "Assets Under Advice" },
  { value: 450, suffix: "+", label: "Families Served" },
  { value: 20, suffix: "+", label: "Years of Combined Experience" },
  { value: 12, label: "Cities & Countries" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust at a glance"
      className="relative border-y border-gold-500/15 bg-bg-secondary"
    >
      <div className="mx-auto w-full max-w-(--content-max) px-(--content-gutter) py-16 md:py-20">
        <ul className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-gold-500/15">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className="flex flex-col items-start gap-4 lg:px-10 lg:first:pl-0 lg:last:pr-0"
            >
              <CountUp
                to={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                duration={2 + i * 0.2}
                className="text-[clamp(3rem,5vw+1rem,5rem)] leading-[0.95]"
              />
              <span className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-ink-muted">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
