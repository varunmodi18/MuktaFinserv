import { LinkedinIcon } from "@/components/shared/SocialIcons";
import { team } from "@/content/team";

export function TeamGrid() {
  return (
    <ul className="grid grid-cols-1 gap-px bg-gold-500/15 md:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <li
          key={member.slug}
          className="flex flex-col gap-5 bg-bg-primary p-8"
        >
          {/* Portrait placeholder */}
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
          </div>

          <div>
            <h3 className="font-display text-2xl leading-tight text-ink">
              {member.name}
            </h3>
            <p className="mt-1 font-body text-[0.8rem] tracking-[0.1em] uppercase text-gold-300">
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
  );
}
