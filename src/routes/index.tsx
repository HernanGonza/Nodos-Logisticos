import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, Database, Handshake, Landmark, Network, Scale } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Hero, PrimaryButton, SecondaryButton } from "@/components/site/Hero";
import { ContentSection, SectionHeader } from "@/components/site/SectionHeader";
import { Em, Lead, P } from "@/components/site/Prose";
import { CardGrid } from "@/components/site/CardGrid";
import { ModuleGrid } from "@/components/site/ModuleGrid";
import { ActorChain } from "@/components/site/ActorChain";
import { Quote, QuoteText } from "@/components/site/Quote";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PROJECTS, SITE_TITLE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `${SITE_TITLE} — Programa Provincial`,
      description:
        "Programa provincial para que el valor que genera Misiones —producción, logística, ahorro público, frontera y datos— se quede en la provincia. Cuatro proyectos coordinados.",
      path: "/",
    }),
  component: Home,
});

const SECTIONS = [
  { href: "#valor", label: "Por dónde se va el valor" },
  { href: "#principios", label: "Principios comunes" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#conexion", label: "Cómo se conectan" },
  { href: "#cierre", label: "Cierre" },
];

function Home() {
  return (
    <PageShell sections={SECTIONS}>
      <Hero
        badge="Programa provincial · Documento de propuesta"
        title={
          <>
            <span className="text-gradient-hero italic font-serif font-light">Soberanía</span> Económica<br />
            de Misiones.
          </>
        }
        lead="Que el valor que genera la provincia —su producción, su logística, el ahorro público, su frontera y sus datos— quede en la provincia. Cuatro proyectos coordinados, con reglas claras, que organizan lo que Misiones ya tiene."
        actions={
          <>
            <PrimaryButton href="#proyectos">Ver los proyectos <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <SecondaryButton href="#conexion">Cómo se conectan</SecondaryButton>
          </>
        }
      />

      <ContentSection
        id="valor"
        label="00 — Por dónde se va el valor"
        title={<>Misiones produce valor. <span className="font-serif italic font-light text-[var(--clay)]">No siempre lo retiene.</span></>}
      >
        <Lead>
          Cuatro canales por los que el valor generado en la provincia se diluye fuera de ella.
          <Em> El problema no es de falta de plata ni de producción: es de organización.</Em>
        </Lead>
        <CardGrid
          cols="md:grid-cols-2 lg:grid-cols-4"
          items={[
            {
              t: "Fletes caros y fragmentados",
              d: "Cada empresa negocia su transporte por separado, con viajes a media carga y retornos vacíos.",
              link: { to: "/nodos-logisticos", label: "Respuesta: Nodos Logísticos →" },
            },
            {
              t: "Materia prima sin procesar",
              d: "Se vende lo que se produce sin transformarlo en la provincia, y las etapas de mayor valor se hacen afuera.",
              link: { to: "/captura-de-valor", label: "Respuesta: Captura de Valor →" },
            },
            {
              t: "Sin colchón fiscal ante las crisis",
              d: "Cuando cae la recaudación o se recortan las transferencias, las obras se frenan y se recurre al endeudamiento.",
              link: { to: "/fondo-estabilidad", label: "Respuesta: Fondo de Estabilidad →" },
            },
            {
              t: "Una frontera para consumo y tránsito",
              d: "La frontera con Brasil y Paraguay se usa sobre todo para comprar y pasar, no para producir y vender.",
              link: { to: "/integracion-fronteriza", label: "Respuesta: Integración Fronteriza →" },
            },
          ]}
        />
        <Quote tone="clay">
          <QuoteText>
            "El problema no es lo que produce Misiones, sino cómo organiza el valor que produce."
          </QuoteText>
        </Quote>
      </ContentSection>

      <ContentSection
        id="principios"
        alt
        label="01 — Principios comunes"
        title={<>Cinco reglas que <span className="font-serif italic font-light">atraviesan todos los proyectos.</span></>}
      >
        <Lead>
          Los cuatro proyectos comparten el mismo diseño: se aprovecha lo que ya existe, se busca financiarlos sin aumentar el gasto público y se generan datos propios.
        </Lead>
        <ModuleGrid
          cols="sm:grid-cols-2 lg:grid-cols-5"
          items={[
            { icon: Network, t: "Coordinar antes que gastar", d: "Ordenar la oferta y la demanda existentes rinde antes que construir estructura nueva." },
            { icon: Handshake, t: "El Estado organiza, el privado ejecuta", d: "La Provincia pone las reglas y la coordinación; las empresas y los municipios operan." },
            { icon: Scale, t: "Reglas medibles, no discreción", d: "Los criterios son públicos y objetivos, en lugar de decisiones caso por caso." },
            { icon: Database, t: "Datos propios", d: "Cada proyecto produce información que hoy la provincia no tiene o depende de terceros para conocer." },
            { icon: Building2, t: "Instituciones que sobreviven a los gobiernos", d: "El diseño apunta a que los programas continúen más allá de cada gestión." },
          ]}
        />
      </ContentSection>

      <section id="proyectos" className="py-28 lg:py-36 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader label="02 — Los proyectos">
            Cuatro proyectos, <span className="font-serif italic font-light">un mismo objetivo.</span>
          </SectionHeader>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.to} project={p} />
            ))}
          </div>
          <P className="mt-10">
            Son <Em>programas, no leyes</Em>. Algunos podrían requerir un marco normativo para funcionar, pero cada uno se presenta primero como diseño de política pública.
          </P>
        </div>
      </section>

      <ContentSection
        id="conexion"
        alt
        label="03 — Cómo se conectan"
        title={<>Una operación, una regla, <span className="font-serif italic font-light">un mercado y un respaldo.</span></>}
      >
        <Lead>Cada proyecto cumple una función distinta y se apoya en los otros tres.</Lead>
        <ActorChain
          cols="md:grid-cols-3"
          items={[
            { icon: PROJECTS[0].icon, t: "Nodos organiza la operación", d: "Coordina carga, almacenamiento, subproductos y capacidad ociosa, y genera los datos de toda la cadena.", link: { to: "/nodos-logisticos", label: "Ver Nodos Logísticos →" } },
            { icon: PROJECTS[2].icon, t: "Captura de Valor decide a quién se premia", d: "Usa el índice que mide Nodos para asignar los beneficios provinciales según el valor que queda en Misiones.", link: { to: "/captura-de-valor", label: "Ver Captura de Valor →" } },
            { icon: PROJECTS[3].icon, t: "Integración Fronteriza abre mercados", d: "Lleva a las empresas misioneras a proveedores y compradores de Brasil y Paraguay, con la misma lógica de coordinación.", link: { to: "/integracion-fronteriza", label: "Ver Integración Fronteriza →" } },
          ]}
        />
        <Link
          to="/fondo-estabilidad"
          className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 rounded-3xl bg-primary text-primary-foreground p-7 lg:p-9 hover:opacity-95 transition"
        >
          <div className="h-12 w-12 shrink-0 rounded-xl bg-primary-foreground/10 grid place-items-center">
            <Landmark className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-lg font-semibold">El Fondo sostiene todo en la crisis</div>
            <p className="mt-1 text-sm text-primary-foreground/75 leading-relaxed">
              Una reserva propia financia la continuidad de las obras y de los tres programas cuando cae la recaudación o se recortan las transferencias.
            </p>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 sm:ml-auto" />
        </Link>
      </ContentSection>

      <section id="cierre" className="py-28 lg:py-40 border-t border-border bg-grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader label="04 — Cierre">
            Una provincia que decide <span className="font-serif italic font-light text-[var(--clay)]">sobre su propio futuro económico.</span>
          </SectionHeader>
          <blockquote className="mt-10 font-serif italic text-2xl lg:text-4xl leading-tight max-w-4xl text-foreground">
            "Una provincia que coordina su logística, capta más valor de lo que produce, abre sus propios mercados y se resguarda de las crisis depende menos de decisiones externas para sostener su desarrollo."
          </blockquote>
          <P className="mt-8">
            Eso es la soberanía económica de Misiones: no una consigna, sino un conjunto de reglas e instituciones que permanecen.
          </P>
        </div>
      </section>
    </PageShell>
  );
}
