import Link from "next/link";
import { Section, SectionHeader } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/shared/SocialIcons";
import { team } from "@/content/team";

export function LeadershipSpotlight() {
  const spotlight = team.filter((m) => m.spotlight);

  return (
    <Section surface="primary" tone="dark">
      <SectionHeader
        eyebrow="Leadership"
        title="Stewarded by experienced hands."
        intro="A small partner-led team. Every relationship rolls up to a named individual you can call by their first name."
      />

      <ul className="mt-16 grid grid-cols-1 gap-px bg-gold-500/15 md:grid-cols-2 lg:grid-cols-3">
        {spotlight.map((member) => (
          <li
            key={member.slug}
            className="flex flex-col gap-6 bg-bg-primary p-8 transition-colors duration-500 hover:bg-bg-secondary"
          >
            {/* Portrait placeholder — sepia/duotone treatment */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold-500/30 bg-bg-tertiary">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.18) 0%, transparent 60%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl text-gold-500/30">
                  {member.name
                    .replace(/\[|\]/g, "")
                    .trim()
                    .split(" ")
                    .map((w) => w[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
              <span className="absolute bottom-3 left-3 font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold-300">
                Photo · Forthcoming
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl leading-tight text-ink">
                {member.name}
              </h3>
              <p className="mt-1 font-body text-[0.85rem] tracking-[0.1em] uppercase text-gold-300">
                {member.designation}
              </p>
            </div>
            <p className="font-body text-[0.95rem] leading-relaxed text-ink-muted">
              {member.bio}
            </p>
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="mt-auto inline-flex h-9 w-9 items-center justify-center border border-gold-500/30 text-gold-300 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-100"
              >
                <LinkedinIcon className="h-4 w-4" strokeWidth={1.25} />
              </a>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-16 flex justify-center">
        <Button variant="ghost" href="/about" withArrow>
          Meet the Full Team
        </Button>
      </div>
    </Section>
  );
}
