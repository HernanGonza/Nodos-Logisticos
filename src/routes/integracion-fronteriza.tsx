import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Building2, Handshake, Landmark, MapPin, Network, Search, University, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Hero, PrimaryButton, SecondaryButton } from "@/components/site/Hero";
import { ContentSection } from "@/components/site/SectionHeader";
import { CheckList, Em, Lead, Note, P, Tag } from "@/components/site/Prose";
import { CardGrid } from "@/components/site/CardGrid";
import { ModuleGrid } from "@/components/site/ModuleGrid";
import { ActorChain } from "@/components/site/ActorChain";
import { Quote, QuoteText } from "@/components/site/Quote";
import { SourcesBlock } from "@/components/site/SourcesBlock";
import { OtherProjects } from "@/components/site/OtherProjects";
import { SITE_TITLE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/integracion-fronteriza")({
  head: () =>
    pageHead({
      title: `Programa de Integración Productiva Fronteriza — ${SITE_TITLE}`,
      description:
        "Una propuesta para que las pymes misioneras accedan a proveedores y compradores de Brasil y Paraguay, con información, contactos y métricas.",
      path: "/integracion-fronteriza",
    }),
  component: IntegracionFronteriza,
});

const SECTIONS = [
  { href: "#por-que-ahora", label: "Por qué ahora" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#solucion", label: "Solución" },
  { href: "#corredores", label: "Corredores" },
  { href: "#cadenas", label: "Cadenas" },
  { href: "#modelo", label: "Modelo" },
  { href: "#limites", label: "Límites" },
  { href: "#financiamiento", label: "Financiamiento" },
  { href: "#indicadores", label: "Indicadores" },
  { href: "#relacion", label: "Otros proyectos" },
];

const CORREDORES = [
  { t: "Posadas – Encarnación", d: "Corredor con Paraguay sobre el río Paraná." },
  { t: "Bernardo de Irigoyen – Dionísio Cerqueira / Barracão", d: "Corredor con Brasil en el sudoeste de la provincia." },
  { t: "Puerto Iguazú – Foz do Iguaçu – Ciudad del Este", d: "Corredor trinacional con Brasil y Paraguay." },
];

const CADENAS = ["Madera y muebles", "Alimentos", "Yerba", "Té", "Biomasa", "Tecnología y servicios"];

function IntegracionFronteriza() {
  return (
    <PageShell sections={SECTIONS}>
      <Hero
        size="lg"
        badge="Programa provincial · Frontera · Comercio regional"
        title={
          <>
            Programa de Integración <span className="text-gradient-hero italic font-serif font-light">Productiva</span> Fronteriza.
          </>
        }
        lead="Hacer con la frontera lo que la Red de Nodos hace con la carga: ordenar la información, conectar a quienes producen con quienes compran y medir lo que se logra."
        actions={
          <>
            <PrimaryButton href="#solucion">Ver la propuesta <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <SecondaryButton href="#corredores">Los corredores</SecondaryButton>
          </>
        }
      />

      <ContentSection
        id="por-que-ahora"
        label="00 — Por qué ahora"
        title={<>Una frontera extensa, <span className="font-serif italic font-light text-[var(--clay)]">poco aprovechada para producir.</span></>}
      >
        <Lead>
          Misiones tiene casi toda su frontera con Brasil y Paraguay, pero hoy la usa sobre todo para consumo y tránsito. Hay muchos convenios, encuentros y agendas, pero dispersos y sin métricas.
        </Lead>
        <Quote tone="gold">
          <p className="text-foreground leading-relaxed">
            <span className="font-medium">Contexto reciente.</span> En julio de 2026 la Provincia y Paraguay impulsaron una agenda de integración con foco en el comercio y el tránsito fronterizo. La agenda existe; lo que falta es una herramienta que la traduzca en proveedores, compradores y contratos.
          </p>
        </Quote>
        <SourcesBlock
          sources={[
            { label: "Misiones Online, agenda de integración Misiones–Paraguay (03/07/2026)", href: "https://misionesonline.net/2026/07/03/misiones-y-paraguay-impulsan-una-agenda-de-integracion-con-foco-en-el-comercio-y-el-transito-fronterizo/" },
            { label: "Misiones Online, integración regional", href: "https://misionesonline.net/etiqueta/integracion-regional/" },
          ]}
        />
      </ContentSection>

      <ContentSection id="diagnostico" alt label="01 — Diagnóstico" title={<>Tres brechas <span className="font-serif italic font-light">entre la agenda y el comercio.</span></>}>
        <CardGrid
          items={[
            { t: "Agenda protocolar sin seguimiento", d: "Los acuerdos y encuentros no se traducen en acciones comprobables ni tienen indicadores de resultado." },
            { t: "Falta de información comercial", d: "Las empresas no tienen a mano requisitos, costos ni demanda del otro lado de la frontera." },
            { t: "Pymes sin acceso a proveedores y compradores", d: "Quien no tiene contactos propios del otro lado queda fuera, aunque la distancia sea mínima." },
          ]}
        />
      </ContentSection>

      <ContentSection id="solucion" label="02 — Solución" title={<>La lógica de Nodos, <span className="font-serif italic font-light">aplicada a la frontera.</span></>}>
        <Lead>
          Un esquema que organiza la cooperación productiva en lugar de sumar más estructura: <Em>la Provincia coordina; las empresas y los municipios ejecutan.</Em>
        </Lead>
        <ModuleGrid
          items={[
            { icon: Users, t: "Registro de proveedores y compradores", d: "De ambos lados de la frontera, con datos verificables." },
            { icon: Search, t: "Matching de demanda", d: "Cruce entre lo que se necesita de un lado y lo que se produce del otro." },
            { icon: Handshake, t: "Red de servicios de internacionalización", d: "Despachantes, certificadores, transportistas y aseguradoras." },
            { icon: BarChart3, t: "Información por mercado", d: "Requisitos y costos de cada destino, disponibles para cualquier pyme." },
          ]}
        />
      </ContentSection>

      <ContentSection id="corredores" alt label="03 — Corredores" title={<>Tres corredores, <span className="font-serif italic font-light">cada uno con sus indicadores.</span></>}>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {CORREDORES.map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-8">
              <MapPin className="h-6 w-6 text-[var(--leaf)]" />
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <P className="mt-10">
          Cada corredor tendrá sus propios indicadores: <Em>proveedores nuevos, contratos concretados, ventas, y costo y tiempo de acceso.</Em> Las metas se fijan a partir de una línea de base que hoy no existe.
        </P>
      </ContentSection>

      <ContentSection id="cadenas" label="04 — Cadenas con potencial binacional" title={<>Dónde puede haber <span className="font-serif italic font-light">complementariedad.</span></>}>
        <div className="mt-12 flex flex-wrap gap-2">
          {CADENAS.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
        <Note>Potencial a validar con relevamiento · sin cifras en esta etapa</Note>
      </ContentSection>

      <ContentSection id="modelo" alt label="05 — Modelo operativo" title={<>Cuatro actores <span className="font-serif italic font-light">a cada lado de la frontera.</span></>}>
        <ActorChain
          items={[
            { icon: MapPin, t: "Los municipios fronterizos", d: "Operan como nodos de frontera, con presencia local." },
            { icon: Building2, t: "Las cámaras de ambos lados", d: "Participan para representar la oferta y la demanda empresaria." },
            { icon: University, t: "Las universidades", d: "Cooperan en lo tecnológico y en la verificación de datos." },
            { icon: Landmark, t: "La Provincia", d: "Coordina y firma convenios subnacionales." },
          ]}
        />
      </ContentSection>

      <ContentSection id="limites" label="06 — Límites claros" title={<>Lo que este proyecto <span className="font-serif italic font-light">no hace.</span></>}>
        <Lead>
          La aduana, las migraciones y el comercio exterior son competencia nacional. El proyecto no crea zonas aduaneras ni modifica aranceles: organiza la cooperación productiva dentro de las competencias provinciales.
        </Lead>
        <CheckList
          items={[
            "No crea zonas aduaneras.",
            "No modifica aranceles ni regímenes de comercio exterior.",
            "No reemplaza a la Nación en controles migratorios ni aduaneros.",
            "Sí organiza información, contactos y convenios subnacionales.",
          ]}
        />
      </ContentSection>

      <ContentSection id="financiamiento" alt label="07 — Financiamiento" title={<>Sin estructura <span className="font-serif italic font-light">burocrática fija.</span></>}>
        <Lead>El financiamiento sigue la lógica del Registro de Almacenamiento de la Red de Nodos.</Lead>
        <CheckList
          items={[
            "Una comisión por contrato concretado, igual que en el Registro de Almacenamiento de Nodos.",
            "Aportes de las cámaras empresarias.",
            "Cooperación internacional.",
          ]}
        />
      </ContentSection>

      <ContentSection id="indicadores" label="08 — Indicadores" title={<>Qué se mide <span className="font-serif italic font-light">para saber si funciona.</span></>}>
        <ModuleGrid
          cols="sm:grid-cols-2 lg:grid-cols-5"
          items={[
            { icon: Users, t: "Proveedores nuevos", d: "Incorporados a la red de ambos lados." },
            { icon: Handshake, t: "Contratos concretados", d: "Operaciones cerradas con apoyo del programa." },
            { icon: BarChart3, t: "Ventas regionales", d: "Ventas a Brasil y Paraguay de las empresas registradas." },
            { icon: MapPin, t: "Costo y tiempo de acceso", d: "Por corredor, para detectar cuellos de botella." },
            { icon: Network, t: "Volumen movido por los nodos", d: "Carga que circula a través de la Red de Nodos." },
          ]}
        />
      </ContentSection>

      <ContentSection id="relacion" alt label="09 — Relación con los otros proyectos" title={<>El mercado <span className="font-serif italic font-light">para lo que Misiones organiza.</span></>}>
        <P className="mt-8">
          Los municipios fronterizos funcionan como <Em>nodos</Em> de la red. Lo que se transforma en la provincia, medido por la <Em>Captura de Valor</Em>, encuentra mercado del otro lado. Y el <Em>Fondo de Estabilidad</Em> puede cofinanciar la infraestructura de los corredores.
        </P>
      </ContentSection>

      <section id="conclusion" className="py-28 lg:py-36 border-t border-border bg-grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Conclusión</div>
          <blockquote className="font-serif italic text-2xl lg:text-4xl leading-tight max-w-4xl text-foreground">
            "Una frontera que produce información, contratos y datos propios deja de ser solo un lugar de paso. Abrir mercados con reglas claras es parte de la <span className="not-italic font-display font-semibold text-gradient-hero">soberanía económica de Misiones.</span>"
          </blockquote>
        </div>
      </section>

      <OtherProjects current="/integracion-fronteriza" />
    </PageShell>
  );
}
