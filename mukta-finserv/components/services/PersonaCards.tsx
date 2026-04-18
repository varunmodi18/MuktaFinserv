import type { Persona } from "@/lib/services";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

export function PersonaCards({ personas }: { personas: Persona[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {personas.map((p, i) => (
        <Card key={p.title}>
          <div className="flex items-start justify-between">
            <span className="font-stat text-2xl text-gold-500/70">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <CardTitle className="mt-4 text-2xl">{p.title}</CardTitle>
          <CardDescription className="mt-3">{p.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
}
