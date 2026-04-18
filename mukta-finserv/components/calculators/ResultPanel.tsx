import type { ReactNode } from "react";

type Props = {
  headline: ReactNode;
  stats?: ReactNode;
  chart?: ReactNode;
  footnote?: ReactNode;
};

export function ResultPanel({ headline, stats, chart, footnote }: Props) {
  return (
    <div className="flex flex-col gap-10 border border-gold-500/20 bg-bg-primary p-8 md:p-10">
      <div>{headline}</div>
      {stats ? (
        <div className="grid grid-cols-2 gap-8 border-t border-gold-500/15 pt-8 md:grid-cols-3">
          {stats}
        </div>
      ) : null}
      {chart ? (
        <div className="border-t border-gold-500/15 pt-8">{chart}</div>
      ) : null}
      {footnote ? (
        <p className="font-body text-xs leading-relaxed text-ink-muted">
          {footnote}
        </p>
      ) : null}
    </div>
  );
}
