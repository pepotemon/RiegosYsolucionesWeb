import { Cpu, Droplets, Globe2, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Nosotros",
  description:
    "Más de 40 años de experiencia combinada en ingeniería hídrica y riego agrícola al servicio del campo colombiano.",
  path: "/nosotros",
});

const stats = [
  {
    value: "40+",
    label: "Años de experiencia técnica combinada",
    color: "text-[#60b5e8]",
  },
  {
    value: "8",
    label: "Años liderando proyectos de ingeniería",
    color: "text-[#3baa6e]",
  },
  {
    value: "35",
    label: "Años de operación técnica en campo",
    color: "text-white",
  },
];

const team = [
  {
    icon: Cpu,
    tag: "8 años de experiencia",
    role: "Liderazgo de Ingeniería",
    description:
      "Cada proyecto está dirigido por un ingeniero con ocho años de trayectoria comprobada en diseño, supervisión y optimización de sistemas, garantizando rigor metodológico e innovación técnica.",
    bg: "bg-[#1b6cb6]",
    iconBg: "bg-white/10",
  },
  {
    icon: Wrench,
    tag: "35 años de experiencia",
    role: "Maestría en Campo",
    description:
      "La ejecución en terreno está respaldada por un especialista con alrededor de treinta y cinco años de labor ininterrumpida, con maestría operativa y capacidad excepcional para resolver imprevistos.",
    bg: "bg-[#2d8757]",
    iconBg: "bg-white/10",
  },
];

export default function AboutPage() {
  const paragraphs = company.history.split("\n\n");

  return (
    <main>

      {/* ── Hero oscuro ─────────────────────────────────────────────────── */}
      <section className="bg-[#06131f] pb-20 pt-20 lg:pb-28 lg:pt-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-[#60b5e8] backdrop-blur-sm">
              <Droplets size={15} />
              Quiénes somos
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Décadas de experiencia.<br className="hidden sm:block" />
              Una sola empresa.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#a8c8e0]">
              Fusionamos el rigor técnico de la ingeniería moderna con más de cuatro décadas
              de práctica ininterrumpida al servicio del campo colombiano.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <p className={`text-6xl font-black leading-none ${s.color}`}>{s.value}</p>
                <p className="mt-3 text-sm leading-6 text-[#7a9ab8]">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Historia ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <blockquote className="border-l-4 border-[#1b6cb6] pl-6">
              <p className="text-xl font-black italic leading-8 text-[#1a2b3c] lg:text-2xl">
                "Más de cuarenta años de conocimiento técnico y operativo, ahora en una estructura formal, moderna y eficiente."
              </p>
            </blockquote>

            <div className="mt-10 grid gap-x-10 gap-y-6 text-base leading-8 text-[#566a7a] lg:grid-cols-2">
              <p className="lg:col-span-2">{paragraphs[0]}</p>
              {paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Equipo técnico ──────────────────────────────────────────────── */}
      <section className="bg-[#f5f9ff] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1b6cb6]">
              Equipo técnico
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#1a2b3c] lg:text-4xl">
              Dos perfiles. Una sola garantía.
            </h2>
            <p className="mt-4 leading-7 text-[#566a7a]">
              Cada proyecto tiene el respaldo de ingeniería especializada y décadas de práctica real en terreno.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {team.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.role} className={`${t.bg} flex flex-col gap-5 rounded-2xl p-8 text-white`}>
                  <div className={`${t.iconBg} w-fit rounded-xl p-4`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">
                      {t.tag}
                    </p>
                    <h3 className="mt-1 text-2xl font-black">{t.role}</h3>
                    <p className="mt-3 leading-7 text-white/80">{t.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Cobertura + CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#1b6cb6] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Globe2 size={32} className="text-white" />
            </div>
            <h2 className="mt-6 text-3xl font-black text-white lg:text-4xl">
              Cobertura nacional e internacional
            </h2>
            <p className="mt-4 leading-7 text-[#c8e0f4]">
              Llevamos soluciones hídricas y agrícolas a todo el territorio colombiano y más allá de sus fronteras,
              adaptadas al contexto, la topografía y las necesidades reales de cada predio.
            </p>
            <div className="mt-8">
              <Button
                href={getWhatsAppUrl("Hola, quiero solicitar una asesoría técnica para mi proyecto.")}
                variant="secondary"
              >
                Solicitar asesoría técnica
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
