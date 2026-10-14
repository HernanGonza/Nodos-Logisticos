import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Eye, Factory, Handshake, Landmark, Network, Scale, University } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Hero, PrimaryButton, SecondaryButton } from "@/components/site/Hero";
import { ContentSection } from "@/components/site/SectionHeader";
import { CheckList, Em, Lead, Note, P, Tag } from "@/components/site/Prose";
import { CardGrid } from "@/components/site/CardGrid";
import { ActorChain } from "@/components/site/ActorChain";
import { Quote, QuoteText } from "@/components/site/Quote";
import { SourcesBlock } from "@/components/site/SourcesBlock";
import { OtherProjects } from "@/components/site/OtherProjects";
import { SITE_TITLE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/captura-de-valor")({
  head: () =>
    pageHead({
      title: `Programa de Captura de Valor Territorial — ${SITE_TITLE}`,
      description:
        "Una regla objetiva para asignar los beneficios provinciales según cuánto valor queda en Misiones: el Índice de Captura de Valor Territorial.",
      path: "/captura-de-valor",
    }),
  component: CapturaDeValor,
});

const SECTIONS = [
  { href: "#por-que-ahora", label: "Por qué ahora" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#solucion", label: "Solución" },
  { href: "#dimensiones", label: "Dimensiones" },
  { href: "#etapas", label: "Etapas faltantes" },
  { href: "#modelo", label: "Modelo" },
  { href: "#compromisos", label: "Compromisos" },
  { href: "#incentivos", label: "Incentivos" },
  { href: "#relacion", label: "Otros proyectos" },
];

const DIMENSIONES = [
  "Valor agregado local",
  "Empleo",
  "Proveedores",
  "Servicios",
  "Logística",
  "Transformación en Misiones",
  "Innovación",
  "Aprovechamiento de subproductos",
];

const CADENAS: { t: string; q: string[] }[] = [
  {
    t: "Forestal",
    q: [
      "¿Qué parte de la madera se transforma en la provincia en productos de mayor valor, y qué parte sale como madera de primera transformación?",
      "¿Qué haría falta para que se procesen aquí los subproductos y los productos terminados?",
    ],
  },
  {
    t: "Yerba mate",
    q: [
      "¿Qué etapas de secado, molienda, envasado y marca se resuelven fuera de la provincia?",
      "¿Qué capacidad instalada y qué escala permitirían traerlas?",
    ],
  },
  {
    t: "Té",
    q: [
      "¿Qué etapas posteriores a la elaboración básica se hacen afuera?",
      "¿Qué condiciones de escala, certificación y comercialización habría que construir?",
    ],
  },
  {
    t: "Agroindustria",
    q: [
      "¿Qué materias primas agrícolas se venden sin procesamiento?",
      "¿Qué plantas, servicios y logística harían viable procesarlas en la provincia?",
    ],
  },
];

function CapturaDeValor() {
  return (
    <PageShell sections={SECTIONS}>
      <Hero
        size="lg"
        badge="Programa provincial · Industrialización · Política de promoción"
        title={
          <>
            Programa de <span className="text-gradient-hero italic font-serif font-light">Captura de Valor</span> Territorial.
          </>
        }
        lead="Una regla objetiva y medible para decidir a quién se premia: los beneficios provinciales se asignan según cuánto valor de lo que se produce queda realmente en Misiones."
        actions={
          <>
            <PrimaryButton href="#solucion">Ver la regla <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <SecondaryButton href="#etapas">Etapas faltantes por cadena</SecondaryButton>
          </>
        }
      />

      <ContentSection
        id="por-que-ahora"
        label="00 — Por qué ahora"
        title={<>Misiones produce mucho. <span className="font-serif italic font-light text-[var(--clay)]">El valor se agrega afuera.</span></>}
      >
        <Lead>
          Gran parte del valor de lo que produce la provincia se agrega fuera de ella: en el procesamiento, la industrialización, la marca y la comercialización.
          <Em> El problema no es productivo: es de organización de la cadena y de reglas de promoción.</Em>
        </Lead>
      </ContentSection>

      <ContentSection id="diagnostico" alt label="01 — Diagnóstico" title={<>Tres rasgos de <span className="font-serif italic font-light">la situación actual.</span></>}>
        <CardGrid
          items={[
            { t: "Venta de materia prima con bajo procesamiento", d: "Se exporta o se despacha fuera de la provincia lo que podría transformarse localmente." },
            { t: "Etapas productivas que se hacen afuera", d: "Pasos de mayor valor —terminación, envasado, diseño, comercialización— quedan en otras jurisdicciones." },
            { t: "Promoción discrecional o negociada caso por caso", d: "Sin una regla común, los beneficios dependen de la negociación y no de un resultado verificable." },
          ]}
        />
      </ContentSection>

      <ContentSection id="solucion" label="02 — Solución" title={<>Una regla común: el <span className="font-serif italic font-light">ICVT.</span></>}>
        <Lead>
          El Índice de Captura de Valor Territorial (ICVT) se mide a través de la <Link to="/nodos-logisticos" className="underline underline-offset-4 hover:text-[var(--clay)]">Red de Nodos Logísticos</Link> y es la regla para asignar todos los beneficios provinciales del programa.
        </Lead>
        <CheckList
          items={[
            "Prioridad en infraestructura.",
            "Acceso a servicios de los nodos.",
            "Asistencia técnica.",
            "Cofinanciamiento de modernización.",
            "Certificaciones.",
          ]}
        />
        <Quote tone="gold">
          <QuoteText>Se premia la transformación local; no se castiga la venta de materia prima.</QuoteText>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Quien vende materia prima no pierde derechos. Quien incorpora procesamiento, empleo y proveedores en Misiones accede a más beneficios.
          </p>
        </Quote>
        <Note>Nodos mide el índice; este programa lo usa para asignar beneficios</Note>
      </ContentSection>

      <ContentSection id="dimensiones" alt label="03 — Las dimensiones del índice" title={<>Qué se mide <span className="font-serif italic font-light">y cómo se distingue.</span></>}>
        <div className="mt-12 flex flex-wrap gap-2">
          {DIMENSIONES.map((d) => (
            <Tag key={d}>{d}</Tag>
          ))}
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Valor agregado, facturación y origen</div>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li><Em>Valor agregado:</Em> lo que la empresa suma a los insumos que compra, descontados esos insumos.</li>
              <li><Em>Facturación:</Em> el total de ventas, incluye el valor de insumos comprados afuera.</li>
              <li><Em>Origen:</Em> dónde se obtuvo la materia prima o dónde está radicada la empresa. No equivale a valor agregado local.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Datos administrativos y declaraciones auditables</div>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li><Em>Administrativos:</Em> información que la Provincia ya posee o puede cruzar, como registros laborales, impositivos y de habilitación.</li>
              <li><Em>Declaraciones auditables:</Em> lo que la empresa declara —proveedores, procesos, servicios— y que universidades u organismos técnicos pueden verificar.</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="etapas" label="04 — Mapa de etapas faltantes por cadena" title={<>Qué se hace afuera <span className="font-serif italic font-light">y qué haría falta para traerlo.</span></>}>
        <Lead>Cuatro cadenas a relevar. Las preguntas son hipótesis de trabajo; no hay datos cargados en esta etapa.</Lead>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {CADENAS.map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">A relevar</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
                {c.q.map((q) => (
                  <li key={q} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold-deep)]" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="modelo" alt label="05 — Modelo operativo" title={<>Quién declara, quién mide, <span className="font-serif italic font-light">quién verifica.</span></>}>
        <ActorChain
          items={[
            { icon: Building2, t: "Las empresas declaran", d: "Declaran sus datos y obtienen su índice." },
            { icon: Landmark, t: "La Provincia mide y asigna", d: "Calcula el ICVT con una metodología pública y asigna los beneficios." },
            { icon: University, t: "Universidades y Silicon Misiones auditan", d: "Verifican las declaraciones y la metodología." },
            { icon: Network, t: "Los nodos conectan", d: "Vinculan materia prima, subproductos y capacidad ociosa con las plantas de procesamiento." },
          ]}
        />
      </ContentSection>

      <ContentSection id="compromisos" label="06 — Compromisos y recupero" title={<>Beneficios con <span className="font-serif italic font-light">contrapartida.</span></>}>
        <CheckList
          items={[
            "Las metas son proporcionales al beneficio recibido.",
            "Ante un incumplimiento se suspende el beneficio y se recupera lo correspondiente, con debido proceso.",
            "Hay escalas accesibles para pymes y cooperativas.",
          ]}
        />
      </ContentSection>

      <ContentSection id="incentivos" alt label="07 — Incentivos por actor" title={<>Por qué cada actor <span className="font-serif italic font-light">participa.</span></>}>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "Empresas", d: "Acceso a infraestructura, servicios, asistencia y cofinanciamiento con reglas conocidas de antemano." },
            { t: "Cooperativas", d: "Escalas pensadas para su tamaño y acceso a los mismos beneficios que una empresa grande." },
            { t: "Municipios", d: "Más actividad, empleo y proveedores radicados en su territorio, y un nodo con mayor uso." },
            { t: "Provincia", d: "Una política de promoción objetiva, datos propios sobre la cadena y más valor retenido." },
          ].map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--gold-deep)]" />
                <h3 className="font-display text-xl font-semibold">{a.t}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="relacion" label="08 — Relación con los otros proyectos" title={<>La regla que <span className="font-serif italic font-light">ordena el programa.</span></>}>
        <P className="mt-8">
          <Em>Nodos</Em> produce los datos para medir el índice. El <Em>Fondo de Estabilidad</Em> puede financiar la infraestructura que el programa prioriza. <Em>Integración Fronteriza</Em> abre mercados para lo que se transforma en la provincia.
        </P>
      </ContentSection>

      <section id="conclusion" className="py-28 lg:py-36 border-t border-border bg-grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Conclusión</div>
          <blockquote className="font-serif italic text-2xl lg:text-4xl leading-tight max-w-4xl text-foreground">
            "Cuando los beneficios se asignan por una regla medible, la provincia deja de negociar caso por caso y empieza a decidir qué valor quiere que quede en su territorio. Esa decisión es parte de la <span className="not-italic font-display font-semibold text-gradient-hero">soberanía económica de Misiones.</span>"
          </blockquote>
          <SourcesBlock
            className="mt-12"
            sources={[{ label: "Documento de propuesta de la Red de Nodos Logísticos (ICVT)" }]}
            note="Esta página no incluye cifras. Los datos de referencia se incorporarán desde los datos de Nodos y desde relevamientos propios."
          />
        </div>
      </section>

      <OtherProjects current="/captura-de-valor" />
    </PageShell>
  );
}
