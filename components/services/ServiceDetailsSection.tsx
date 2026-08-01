import Image from "next/image";
import {
  BarChart3,
  CalendarCheck2,
  Droplets,
  LandPlot,
  Leaf,
  MessageCircle,
  PanelsTopLeft,
  Settings2,
  Sprout,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types/service";

type ServiceDetailsSectionProps = {
  service: Service;
  waUrl: string;
};

type BenefitDisplay = {
  metric?: string;
  title: string;
  description: string;
};

const audienceIcons: LucideIcon[] = [Sprout, LandPlot, Droplets, Leaf];
const benefitIcons: LucideIcon[] = [Droplets, Sprout, BarChart3, Settings2];

export function ServiceDetailsSection({ service, waUrl }: ServiceDetailsSectionProps) {
  const headline = getServiceHeadline(service.title);

  return (
    <section className="relative overflow-hidden bg-[var(--service-dark)] py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--service-green-soft)] blur-[150px]" />
        <div className="absolute bottom-20 right-0 h-[420px] w-[420px] rounded-full bg-[var(--service-blue-soft)] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--service-grid-line)_1px,transparent_1px),linear-gradient(180deg,var(--service-grid-line)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-[var(--service-green)]">
            <Sprout size={15} />
            Detalles del servicio
          </p>
          <h2 className="text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">
            {headline.base}{" "}
            <span className="text-[var(--service-green)]">{headline.highlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--service-text-muted)]">
            {service.shortDescription}
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <ServiceImageCard service={service} />
          <AudienceList items={service.audience} />
        </div>

        <div className="my-16 h-px bg-white/10" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-[var(--service-blue)]">
              Beneficios
            </p>
            <h3 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
              Más eficiencia, <span className="text-[var(--service-blue)]">mejores resultados</span>
            </h3>
            <div className="mt-4 h-0.5 w-16 rounded-full bg-[var(--service-blue)]" />
            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--service-text-muted)]">
              Sistemas diseñados para ahorrar recursos, proteger el cultivo y mejorar la operación diaria del proyecto.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit}
                  benefit={benefit}
                  icon={benefitIcons[index % benefitIcons.length]}
                />
              ))}
            </div>
          </div>

          <PlantPhotoVisual />
        </div>

        <ProcessTimeline items={service.process} />

        <div className="mt-12 rounded-3xl border border-[var(--service-green)]/50 bg-[var(--service-dark-card)] p-5 backdrop-blur-md sm:p-7">
          <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--service-green-soft)] text-[var(--service-green)]">
              <CalendarCheck2 size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-black">¿Listo para optimizar su proyecto?</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--service-text-muted)]">
                Un técnico puede revisar su caso y orientar la solución más conveniente para su cultivo o sistema.
              </p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--service-green)] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[var(--service-green)]/20 transition duration-200 hover:translate-y-[-1px] hover:bg-[var(--green-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--service-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--service-dark)]"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceImageCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-[var(--service-green)]/45">
      <Image
        src={service.image}
        alt={`${service.title} aplicado en campo`}
        fill
        sizes="(max-width: 1024px) 100vw, 46vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--service-dark)] via-[var(--service-dark)]/35 to-transparent" />
      <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-[var(--service-dark)]/78 p-5 backdrop-blur-md sm:inset-x-10 sm:p-6">
        <div className="flex gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--service-green-soft)] text-[var(--service-green)]">
            <Icon size={34} />
          </div>
          <div>
            <p className="text-lg font-black text-[var(--service-green)]">Solución eficiente</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Tecnología adaptada a las condiciones reales del cultivo y del predio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AudienceList({ items }: { items: string[] }) {
  return (
    <div>
      <h3 className="text-3xl font-black">¿Para quién sirve?</h3>
      <div className="mt-4 h-0.5 w-16 rounded-full bg-[var(--service-green)]" />
      <div className="mt-6 grid gap-4">
        {items.map((item, index) => {
          const Icon = audienceIcons[index % audienceIcons.length];
          return (
            <div
              key={item}
              className="group rounded-3xl border border-[var(--service-dark-border)] bg-[var(--service-dark-card)] p-5 backdrop-blur-md transition duration-200 hover:border-[var(--service-green)]/45 hover:bg-white/7"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--service-green-soft)] text-[var(--service-green)] transition duration-200 group-hover:scale-105">
                  <Icon size={27} />
                </span>
                <p className="text-lg font-medium leading-7 text-white">{item}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BenefitCard({ benefit, icon: Icon }: { benefit: string; icon: LucideIcon }) {
  const display = getBenefitDisplay(benefit);

  return (
    <div className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-[var(--service-dark-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-6 backdrop-blur-md transition duration-200 hover:border-[var(--service-blue)]/45 hover:bg-white/[0.07]">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--service-blue)]/70 to-transparent opacity-70" />
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--service-blue-soft)] text-[var(--service-blue)] transition duration-200 group-hover:scale-105">
        <Icon size={28} />
      </div>
      {display.metric ? (
        <p className="text-4xl font-black leading-none text-[var(--service-blue)]">{display.metric}</p>
      ) : null}
      <h4 className={display.metric ? "mt-3 text-xl font-black leading-tight" : "text-xl font-black leading-tight"}>
        {display.title}
      </h4>
      <p className="mt-3 text-sm leading-6 text-[var(--service-text-muted)]">{display.description}</p>
    </div>
  );
}

function PlantPhotoVisual() {
  return (
    <figure className="relative mx-auto -my-6 w-full max-w-2xl overflow-hidden lg:-ml-4 lg:-mr-8">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_36%,var(--service-dark)_78%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-[var(--service-dark)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/5 bg-gradient-to-l from-[var(--service-dark)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[var(--service-dark)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[var(--service-dark)] to-transparent" />
      <Image
        src="/images/servicios/planta-riego-inteligente.png"
        alt="Planta joven con gota de agua, símbolo de riego eficiente"
        width={1536}
        height={1024}
        sizes="(max-width: 1024px) 100vw, 52vw"
        className="relative z-0 h-auto w-full scale-[1.03] object-contain"
        unoptimized
      />
    </figure>
  );
}

function ProcessTimeline({ items }: { items: string[] }) {
  return (
    <div className="mt-16 rounded-[32px] border border-[var(--service-dark-border)] bg-[var(--service-dark-card)] p-6 backdrop-blur-md lg:p-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-[var(--service-green)]">
            Proceso
          </p>
          <h3 className="text-3xl font-black">De la visita técnica a la puesta en marcha</h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-[var(--service-text-soft)]">
          Un flujo claro reduce incertidumbre, evita compras improvisadas y permite cotizar con criterio técnico.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        {items.map((item, index) => (
          <div key={item} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-black text-[var(--service-green)]">0{index + 1}</span>
              <PanelsTopLeft size={18} className="text-white/24" />
            </div>
            <p className="text-sm font-semibold leading-6 text-white/78">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function getServiceHeadline(title: string) {
  if (title.toLowerCase() === "sistemas de riego") {
    return { base: "Soluciones de riego", highlight: "inteligentes" };
  }

  return { base: title, highlight: "con ingeniería" };
}

function getBenefitDisplay(benefit: string): BenefitDisplay {
  const benefitCopy: Record<string, BenefitDisplay> = {
    "Reducción del consumo de agua entre 30% y 50%": {
      metric: "30% - 50%",
      title: "Menor consumo de agua",
      description: "Optimiza cada riego y reduce pérdidas por exceso de aplicación o mala distribución.",
    },
    "Mayor uniformidad y mejor desarrollo del cultivo": {
      title: "Riego más uniforme",
      description: "Distribuye el agua de forma consistente para favorecer un crecimiento parejo del cultivo.",
    },
    "Menor dependencia de mano de obra operativa": {
      title: "Operación más eficiente",
      description: "Reduce tareas manuales repetitivas y libera tiempo del equipo para labores de mayor valor.",
    },
    "Sistemas escalables que crecen con el proyecto": {
      title: "Escalable por etapas",
      description: "Permite ampliar áreas, sectores o automatización sin rehacer toda la infraestructura.",
    },
  };

  return (
    benefitCopy[benefit] ?? {
      title: benefit,
      description: "Impacto directo en eficiencia, control y confiabilidad operativa del sistema.",
    }
  );
}
