import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Nosotros",
  description: "Historia, mision, vision, valores, experiencia, cobertura y equipo tecnico.",
  path: "/nosotros",
});

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <Container>
          <SectionHeader
            eyebrow="Nosotros"
            title="Una empresa tecnica al servicio del campo colombiano"
            description={company.history}
          />
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-5 md:grid-cols-2">
          <Info title="Mision" text={company.mission} />
          <Info title="Vision" text={company.vision} />
          <Info title="Experiencia" text={company.experience} />
          <Info title="Cobertura" text={company.coverage} />
          <Info title="Equipo tecnico" text={company.team} />
          <div className="rounded-lg border border-[#c8ddf0] bg-white p-6">
            <h2 className="text-2xl font-black text-[#1a2b3c]">Valores</h2>
            <ul className="mt-5 grid gap-3">
              {company.values.map((value) => (
                <li key={value} className="flex items-center gap-3 text-[#3a5268]">
                  <CheckCircle2 size={18} className="text-[#3baa6e]" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#c8ddf0] bg-white p-6">
      <h2 className="text-2xl font-black text-[#1a2b3c]">{title}</h2>
      <p className="mt-4 leading-7 text-[#566a7a]">{text}</p>
    </div>
  );
}
