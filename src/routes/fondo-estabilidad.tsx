import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Banknote, Building2, Globe2, Landmark, Layers, Repeat, ShieldCheck, Target, Wallet } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Hero, PrimaryButton, SecondaryButton } from "@/components/site/Hero";
import { ContentSection } from "@/components/site/SectionHeader";
import { CheckList, Em, Lead, Note, P } from "@/components/site/Prose";
import { CardGrid } from "@/components/site/CardGrid";
import { ModuleGrid } from "@/components/site/ModuleGrid";
import { ActorChain } from "@/components/site/ActorChain";
import { Quote, QuoteText } from "@/components/site/Quote";
import { SourcesBlock } from "@/components/site/SourcesBlock";
import { OtherProjects } from "@/components/site/OtherProjects";
import { SITE_TITLE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/fondo-estabilidad")({
  head: () =>
    pageHead({
      title: `Fondo Misionero de Estabilidad e Infraestructura — ${SITE_TITLE}`,
      description:
        "Un fondo propio con dos cuentas —reserva anticíclica e infraestructura estratégica— para sostener las obras productivas de Misiones cuando cae la recaudación.",
      path: "/fondo-estabilidad",
    }),
  component: FondoEstabilidad,
});

const SECTIONS = [
  { href: "#por-que-ahora", label: "Por qué ahora" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#solucion", label: "Solución" },
  { href: "#modelo", label: "Modelo" },
  { href: "#reglas", label: "Reglas" },
  { href: "#blindaje", label: "Blindaje" },
  { href: "#neuquen", label: "Neuquén" },
  { href: "#financiamiento", label: "Financiamiento" },
  { href: "#relacion", label: "Otros proyectos" },
];

function FondoEstabilidad() {
  return (
    <PageShell sections={SECTIONS}>
      <Hero
        size="lg"
        badge="Programa provincial · Estabilidad fiscal · Infraestructura"
        title={
          <>
            Fondo Misionero de<br />
            <span className="text-gradient-hero italic font-serif font-light">Estabilidad</span> e Infraestructura.
          </>
        }
        lead="Un fondo propio, con reglas automáticas y blindaje institucional, que ahorra cuando la recaudación acompaña y sostiene la obra pública productiva cuando cae."
        actions={
          <>
            <PrimaryButton href="#solucion">Ver el diseño <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <SecondaryButton href="#neuquen">La lección de Neuquén</SecondaryButton>
          </>
        }
      />

      <ContentSection
        id="por-que-ahora"
        label="00 — Por qué ahora"
        title={<>Cada crisis frena las obras <span className="font-serif italic font-light text-[var(--clay)]">a la mitad.</span></>}
      >
        <Lead>
          La recaudación provincial y las transferencias nacionales son volátiles. Cuando caen, las obras que estaban en marcha se frenan antes de terminarse y la Provincia queda empujada a endeudarse en las peores condiciones.
          <Em> El problema no es solo cuánto entra, sino que no existe una regla que resguarde recursos en los años buenos para los años malos.</Em>
        </Lead>
        <Quote tone="clay">
          <QuoteText>
            "Una obra frenada a mitad de camino cuesta dos veces: lo que ya se gastó y lo que se pierde por no terminarla."
          </QuoteText>
        </Quote>
      </ContentSection>

      <ContentSection id="diagnostico" alt label="01 — Diagnóstico" title={<>Tres debilidades <span className="font-serif italic font-light">estructurales.</span></>}>
        <CardGrid
          items={[
            { t: "No hay un colchón propio", d: "Los años de mayores ingresos no generan reservas. Al llegar la caída, la Provincia no tiene con qué sostener el gasto productivo." },
            { t: "Las obras son discontinuas", d: "La inversión sigue el ciclo de ingresos: se acelera en la abundancia y se interrumpe en la escasez, con costos de reinicio y obras inconclusas." },
            { t: "Dependencia de decisiones externas", d: "Buena parte de los recursos depende de transferencias y de condiciones de financiamiento que la Provincia no controla." },
          ]}
        />
      </ContentSection>

      <ContentSection id="solucion" label="02 — Solución" title={<>Un fondo con <span className="font-serif italic font-light">dos cuentas.</span></>}>
        <Lead>Una sola institución, dos funciones separadas, cada una con su propia regla.</Lead>
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--gold-deep)]">
              <Wallet className="h-3.5 w-3.5" /> Cuenta 1
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">Reserva anticíclica</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Se activa solo con una regla objetiva, no por decisión discrecional. Por ejemplo, una caída real interanual de los recursos, o una emergencia declarada por la Legislatura.
            </p>
            <Note>El umbral exacto de activación es un parámetro a definir</Note>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--gold-deep)]">
              <Layers className="h-3.5 w-3.5" /> Cuenta 2
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">Ventana de infraestructura estratégica</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cofinancia obras productivas seleccionadas con criterios públicos y puntaje: infraestructura que habilita producción, logística y empleo, no gasto corriente.
            </p>
            <Note>Los criterios y la ponderación del puntaje son a definir</Note>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="modelo" alt label="03 — Modelo operativo" title={<>Cuatro actores, <span className="font-serif italic font-light">cada uno con su rol.</span></>}>
        <ActorChain
          items={[
            { icon: Landmark, t: "La Provincia aporta", d: "Según una regla automática, no según la voluntad de cada presupuesto." },
            { icon: ShieldCheck, t: "Un directorio técnico administra", d: "Con control externo, para que quien gestiona el fondo no sea quien lo audita." },
            { icon: Building2, t: "El sector privado cofinancia", d: "Participa en proyectos puntuales de la ventana de infraestructura." },
            { icon: Globe2, t: "Los multilaterales completan", d: "Aportan cuando existe un proyecto elegible, sobre la base del esfuerzo propio." },
          ]}
        />
      </ContentSection>

      <ContentSection id="reglas" label="04 — Reglas de acumulación y uso" title={<>Cuándo se ahorra, <span className="font-serif italic font-light">cuándo se usa.</span></>}>
        <Lead>Esquema de funcionamiento. Los parámetros se fijan en la etapa de diseño normativo y no se incluyen cifras en este documento.</Lead>
        <ModuleGrid
          items={[
            { icon: Banknote, t: "Cuándo se aporta", d: "Cuando los recursos superan su tendencia, según una regla automática de aporte." },
            { icon: Repeat, t: "Cuándo se usa", d: "Solo ante el disparador objetivo de la reserva anticíclica o para obras elegidas por puntaje." },
            { icon: Target, t: "Nivel objetivo", d: "Expresado en meses de gasto esencial. Alcanzado el nivel, los aportes adicionales se reorientan a la ventana de infraestructura." },
            { icon: Wallet, t: "Recomposición", d: "Tras una crisis, los aportes retoman con prioridad hasta volver al nivel objetivo." },
          ]}
        />
        <Note>Esquema ilustrativo · parámetros a validar</Note>
      </ContentSection>

      <ContentSection id="blindaje" alt label="05 — Blindaje" title={<>El diseño central <span className="font-serif italic font-light">es la protección.</span></>}>
        <Lead>Un fondo vale lo que valen sus reglas de uso. Estas son las que lo protegen de las urgencias de cada gestión.</Lead>
        <CheckList
          items={[
            "No financia gasto corriente permanente.",
            "Las excepciones a sus reglas requieren mayoría legislativa especial.",
            "Informes trimestrales públicos.",
            "Auditoría externa.",
            "Todas las operaciones se publican.",
          ]}
        />
      </ContentSection>

      <ContentSection id="neuquen" label="06 — Lección de Neuquén" title={<>Un fondo anticíclico que <span className="font-serif italic font-light">se abrió demasiado pronto.</span></>}>
        <Lead>
          El Fondo de Estabilización y Desarrollo de Neuquén (FEDEN) se creó como fideicomiso en 2020, con un subfondo anticíclico del 20%. Entró en vigencia en 2022 y ahorró solo un año y medio antes de que una nueva ley habilitara usarlo para el déficit previsional y el pago de deuda.
        </Lead>
        <Quote tone="gold">
          <QuoteText>El blindaje es el diseño central, no un detalle.</QuoteText>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            El caso muestra que un fondo sin barreras efectivas contra el uso corriente termina destinado a lo urgente y deja de cumplir su función. Por eso las reglas de uso, la mayoría especial y la publicidad de las operaciones forman parte del núcleo de este proyecto.
          </p>
        </Quote>
        <SourcesBlock
          sources={[
            { label: "Letra P, nota sobre el fondo anticíclico de Neuquén (19/11/2020)", href: "https://www.letrap.com.ar/nota/2020-11-19-7-48-0-neuquen-tiene-por-ley-un-fondo-anticiclico-economico" },
            { label: "Río Negro, nota sobre el FEDEN", href: "https://www.rionegro.com.ar/?p=2925636" },
            { label: "Río Negro, apertura del fondo anticíclico para deuda y jubilaciones del ISSN", href: "https://www.rionegro.com.ar/politica/hubo-aval-y-abriran-el-fondo-anticiclico-de-vaca-muerta-para-pagar-deuda-y-cubrir-las-jubilaciones-de-issn/?amp=1" },
          ]}
        />
      </ContentSection>

      <ContentSection id="financiamiento" alt label="07 — Financiamiento" title={<>Se financia sin aumentar <span className="font-serif italic font-light">el gasto público.</span></>}>
        <Lead>Las fuentes son recursos que hoy no se resguardan o no se aprovechan.</Lead>
        <CheckList
          items={[
            "Un porcentaje de los ingresos extraordinarios.",
            "Los rendimientos propios del fondo.",
            "El recupero de obras que generan ingresos.",
            <>El aporte del “Fondo Sistema” de la <Link to="/nodos-logisticos" className="underline underline-offset-4 hover:text-[var(--clay)]">Red de Nodos Logísticos</Link>.</>,
            "Financiamiento climático o multilateral, cuando exista un título válido.",
          ]}
        />
      </ContentSection>

      <ContentSection id="relacion" label="08 — Relación con los otros proyectos" title={<>La base financiera <span className="font-serif italic font-light">del programa.</span></>}>
        <P className="mt-8">
          El Fondo <Em>financia infraestructura para nodos y parques industriales</Em> a través de la ventana estratégica, y <Em>sostiene los programas en las crisis</Em> a través de la reserva anticíclica, de modo que la Red de Nodos, la Captura de Valor y la Integración Fronteriza no se interrumpan cuando caen los ingresos.
        </P>
      </ContentSection>

      <section id="conclusion" className="py-28 lg:py-36 border-t border-border bg-grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Conclusión</div>
          <blockquote className="font-serif italic text-2xl lg:text-4xl leading-tight max-w-4xl text-foreground">
            "Una provincia con reserva propia y reglas que la protegen no depende de la coyuntura externa para terminar lo que empezó. Esa continuidad es parte de la <span className="not-italic font-display font-semibold text-gradient-hero">soberanía económica de Misiones.</span>"
          </blockquote>
        </div>
      </section>

      <OtherProjects current="/fondo-estabilidad" />
    </PageShell>
  );
}
