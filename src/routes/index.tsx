import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Leaf, Truck, Building2, Network, TrendingDown, Coins, Globe2, Sparkles, CheckCircle2, ArrowUpRight, Landmark } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center text-primary-foreground font-display font-bold">N</div>
          <span className="font-display font-semibold tracking-tight">Nodos Misiones</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#diagnostico" className="hover:text-foreground transition">Diagnóstico</a>
          <a href="#modelo" className="hover:text-foreground transition">Modelo</a>
          <a href="#impacto" className="hover:text-foreground transition">Impacto</a>
          <a href="#sectores" className="hover:text-foreground transition">Sectores</a>
          <a href="#financiamiento" className="hover:text-foreground transition">Financiamiento</a>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-deep)] animate-pulse" />
          Política Pública · Inversión Productiva · Exportación
        </div>

        <h1 className="mt-8 font-display font-bold leading-[0.92] tracking-tight text-[clamp(2.75rem,8vw,7rem)]">
          Red de Nodos<br />
          <span className="text-gradient-hero italic font-serif font-light">Logísticos</span> de Misiones.
        </h1>

        <p className="mt-8 max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Programa provincial de transformación logística y productiva. Un sistema integrado que convierte la fragmentación en eficiencia, la eficiencia en desarrollo económico, y el desarrollo económico en soberanía para la provincia.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#modelo" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-elegant)]">
            Ver el modelo <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:bg-muted transition">
            Presentar a un organismo
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-sm">
          {[
            { v: "25–45%", l: "Reducción de costos logísticos" },
            { v: "0", l: "Aumento de gasto público" },
            { v: "4", l: "Actores en cadena coordinada" },
            { v: "100%", l: "Trazabilidad digital" },
          ].map((s) => (
            <div key={s.l} className="bg-card p-6 lg:p-8">
              <div className="font-display text-3xl lg:text-5xl font-bold text-gradient-hero">{s.v}</div>
              <div className="mt-2 text-xs lg:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diagnostico() {
  const items = [
    { t: "Fragmentación productiva", d: "Baja escala por unidad, sin consolidación entre empresas y logística totalmente individualizada." },
    { t: "Ineficiencia logística", d: "Viajes con baja ocupación, retornos vacíos, múltiples intermediarios y negociación caso por caso." },
    { t: "Infraestructura subutilizada", d: "Los parques industriales operan como infraestructura pasiva, sin rol activo en la cadena provincial." },
  ];
  return (
    <section id="diagnostico" className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>01 — El punto de partida</SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          Un sistema logístico <span className="font-serif italic font-light text-[var(--clay)]">fragmentado.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Misiones cuenta con sectores productivos consolidados —yerba mate, té, foresto-industria— pero operan de manera aislada, generando ineficiencias que erosionan la competitividad.
          <span className="text-foreground font-medium"> El problema no es productivo ni de infraestructura física: es de organización del sistema logístico.</span>
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={it.t} className="rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elegant)] transition">
              <div className="font-serif text-5xl text-[var(--gold-deep)] leading-none">0{i+1}</div>
              <h3 className="mt-6 font-display text-xl font-semibold">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-[var(--clay)] bg-[var(--clay)]/5 p-7">
          <p className="font-serif italic text-xl lg:text-2xl text-foreground leading-snug">
            "El costo logístico elevado no es inevitable — es consecuencia directa de la falta de coordinación sistémica."
          </p>
        </div>
      </div>
    </section>
  );
}

function Solucion() {
  const objs = [
    "Fortalecer la soberanía económica y logística de la provincia",
    "Reducir costos logísticos entre 25% y 45%",
    "Incrementar la eficiencia del transporte provincial",
    "Aumentar la competitividad exportadora sectorial",
    "Generar ingresos propios municipales sostenibles",
    "Reducir la dependencia de transferencias externas",
  ];
  return (
    <section className="py-28 lg:py-36 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionLabel>02 — La solución</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold leading-[1.05]">
            Transformar ineficiencia<br/>en <span className="text-gradient-hero">valor económico.</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reducir los costos logísticos provinciales mediante un sistema integrado de nodos que permita consolidación de carga, optimización de transporte y acceso competitivo a mercados nacionales e internacionales.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {objs.map((o) => (
              <li key={o} className="flex items-center gap-4 py-4">
                <CheckCircle2 className="h-5 w-5 text-[var(--leaf)] shrink-0" />
                <span className="text-foreground">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Modelo() {
  const steps = [
    { i: Building2, t: "Empresas ingresan", d: "Productores y empresas registran sus cargas en la plataforma provincial." },
    { i: Network, t: "Municipios consolidan", d: "Los nodos municipales agregan carga por destino y volumen óptimo." },
    { i: Landmark, t: "Provincia coordina", d: "El Estado provincial opera la plataforma digital y coordina la asignación de transporte entre todos los nodos." },
    { i: Truck, t: "Transportistas ejecutan", d: "Flota privada opera con cargas completas y retornos optimizados." },
  ];
  return (
    <section id="modelo" className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>03 — Modelo operativo</SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          Cuatro actores. <span className="font-serif italic font-light">Una sola cadena.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          El sistema articula cuatro eslabones en una cadena coordinada de valor logístico. Cada actor tiene un rol claro, evitando superposiciones y maximizando la eficiencia de conjunto.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-card p-7 lg:p-9 group">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-primary/5 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.i className="h-5 w-5" />
                </div>
                <span className="font-serif text-3xl text-[var(--gold-deep)]">0{i+1}</span>
              </div>
              <h3 className="mt-8 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-muted-foreground">
          Este modelo transforma los parques industriales en <span className="text-foreground font-medium">centros operativos activos</span>, con municipios como gestores del nodo, el sector privado como ejecutor del transporte, y la provincia como coordinador general del sistema y administrador directo de la plataforma digital que lo integra.
        </p>
      </div>
    </section>
  );
}

function Impacto() {
  return (
    <section id="impacto" className="py-28 lg:py-36 border-t border-border bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(60% 50% at 80% 20%, var(--gold) 0%, transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>
          <span className="text-primary-foreground/60">04 — Impacto en costos</span>
        </SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          Impacto real,<br/><span className="text-gradient-hero">medido en dólares.</span>
        </h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 lg:p-10 backdrop-blur">
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">Costo por tonelada-km</div>
            <div className="space-y-5 mt-8">
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-primary-foreground/70">Sistema actual</span><span className="font-mono">USD 0.08 – 0.12</span></div>
                <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden"><div className="h-full w-full bg-[var(--clay)]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-primary-foreground/70">Sistema optimizado</span><span className="font-mono text-[var(--gold)]">USD 0.05 – 0.07</span></div>
                <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)]" style={{width: "55%"}} /></div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 lg:p-10 backdrop-blur">
            <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">Caso concreto · Sector madera</div>
            <p className="text-primary-foreground/80 mb-6">Un viaje de 25 toneladas / 200 km bajo el modelo de nodo logístico:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-primary-foreground/5 p-5">
                <div className="text-xs text-primary-foreground/60">Sistema actual</div>
                <div className="mt-2 font-display text-3xl font-bold line-through decoration-[var(--clay)]/60">USD 500</div>
              </div>
              <div className="rounded-2xl bg-[var(--gold)]/15 border border-[var(--gold)]/30 p-5">
                <div className="text-xs text-[var(--gold)]">Sistema nodo</div>
                <div className="mt-2 font-display text-3xl font-bold text-[var(--gold)]">USD 300</div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[var(--gold)]">
              <TrendingDown className="h-5 w-5" />
              <span className="font-medium">40% de ahorro por viaje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Financiamiento() {
  const tiers = [
    { e: "Escala baja", m: "5.5–6%", p: "0.5%", f: "0.3%" },
    { e: "Escala media", m: "4.5–5%", p: "0.4%", f: "0.2%" },
    { e: "Escala alta", m: "3–3.5%", p: "0.3%", f: "0.2%" },
  ];
  return (
    <section className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>05 — Modelo de financiamiento</SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          El sistema se autofinancia <span className="font-serif italic font-light">— a mayor escala, menor tasa.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Una tasa sobre la operación logística, variable según el volumen procesado. Incentiva el crecimiento del nodo y financia su propia operación.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <div key={t.e} className={`rounded-3xl p-8 border ${i===2 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
              <div className={`text-xs uppercase tracking-widest ${i===2 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{t.e}</div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-baseline border-b border-current/10 pb-3">
                  <span className={`text-sm ${i===2 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Municipio</span>
                  <span className="font-display text-2xl font-bold">{t.m}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-current/10 pb-3">
                  <span className={`text-sm ${i===2 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Provincia</span>
                  <span className="font-display text-xl font-semibold">{t.p}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className={`text-sm ${i===2 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Fondo Sistema</span>
                  <span className="font-display text-xl font-semibold">{t.f}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-muted-foreground">
          La tasa municipal se destina a operación del nodo, infraestructura liviana y personal local — generando un <span className="text-foreground font-medium">círculo virtuoso de inversión y capacidad operativa municipal.</span>
        </p>
      </div>
    </section>
  );
}

function Sectores() {
  const s = [
    { icon: "🌲", t: "Foresto-industria", l: "San Vicente", d: "Alto volumen, largas distancias y alto costo actual. El nodo permite consolidación de carga, reducción de viajes vacíos y optimización de exportación maderera.", a: "30–45%" },
    { icon: "🍃", t: "Yerba mate", l: "Oberá / Zona Centro", d: "Muchos productores pequeños con baja escala individual. El nodo genera consolidación fuerte y reduce intermediarios logísticos.", a: "25–35%" },
    { icon: "☕", t: "Té", l: "Campo Viera", d: "Producción estacional con logística fragmentada. La planificación centralizada desde el nodo reduce costos estacionales y mejora la previsibilidad.", a: "20–30%" },
  ];
  return (
    <section id="sectores" className="py-28 lg:py-36 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>06 — Aplicación sectorial</SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          El modelo en los sectores <span className="font-serif italic font-light">clave</span> de Misiones.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {s.map((x) => (
            <div key={x.t} className="group relative rounded-3xl border border-border bg-card p-8 overflow-hidden hover:shadow-[var(--shadow-elegant)] transition">
              <div className="text-5xl">{x.icon}</div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{x.t}</h3>
              <div className="text-sm text-muted-foreground">{x.l}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              <div className="mt-8 flex items-end justify-between pt-6 border-t border-border">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Ahorro</span>
                <span className="font-display text-3xl font-bold text-gradient-hero">{x.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plataforma() {
  const actors = [
    { t: "Provincia", d: "Gobernanza integral del sistema, datos logísticos consolidados en tiempo real y mayor competitividad exportadora sin incrementar el gasto público." },
    { t: "Municipios", d: "Ingresos variables por operación, crecimiento proporcional al volumen y autonomía operativa." },
    { t: "Empresas", d: "Reducción directa de costos, acceso simplificado a exportación y mayor escala sin inversión propia." },
    { t: "Transportistas", d: "Mayor volumen constante, eliminación de retornos vacíos y mejor utilización de la flota disponible." },
  ];
  const features = [
    "Registro de cargas en tiempo real",
    "Consolidación automática por destino y volumen",
    "Asignación de transporte optimizada",
    "Liquidación de pagos y distribución de tasas",
    "Métricas de eficiencia para mejora continua",
  ];
  return (
    <section className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>07 — Incentivos y plataforma digital</SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          ¿Por qué cada actor <span className="font-serif italic font-light">participa?</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {actors.map((a) => (
            <div key={a.t} className="rounded-2xl border border-border p-7">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[var(--gold-deep)]" />
                <h3 className="font-display text-xl font-semibold">{a.t}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border">
              <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--gold-deep)]">
                <Sparkles className="h-3.5 w-3.5" /> Plataforma Digital Provincial
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">
                Sistema central obligatorio que integra toda la operación.
              </h3>
              <p className="mt-5 text-muted-foreground">
                La plataforma es el integrador digital del sistema — la pieza que hace posible la coordinación a escala provincial.
              </p>
            </div>
            <div className="p-8 lg:p-12">
              <ol className="space-y-1">
                {features.map((f, i) => (
                  <li key={f} className="flex items-start gap-4 py-3 border-b border-border last:border-0">
                    <span className="font-mono text-xs text-muted-foreground mt-1 w-6">0{i+1}</span>
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Internacional() {
  const orgs = [
    { n: "BID", d: "Banco Interamericano de Desarrollo" },
    { n: "Banco Mundial", d: "Líneas de desarrollo productivo y logística" },
    { n: "CAF", d: "Banco de Desarrollo de América Latina" },
    { n: "Fondo Verde", d: "Fondo Verde para el Clima" },
  ];
  return (
    <section id="financiamiento" className="py-28 lg:py-36 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>08 — Financiamiento internacional</SectionLabel>
        <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
          Elegible para los principales <span className="font-serif italic font-light">organismos multilaterales.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          El programa cumple con criterios de elegibilidad en desarrollo productivo, eficiencia logística, digitalización pública y sostenibilidad económica.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {orgs.map((o) => (
            <div key={o.n} className="rounded-2xl border border-border bg-card p-7 hover:border-primary transition group">
              <Globe2 className="h-6 w-6 text-[var(--leaf)] mb-6" />
              <div className="font-display text-xl font-semibold">{o.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{o.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-[var(--gold-deep)] bg-[var(--gold)]/5 p-7">
          <div className="text-xs font-medium tracking-widest uppercase text-[var(--gold-deep)] mb-3">Requisitos clave</div>
          <p className="text-foreground">
            Unidad ejecutora provincial · aval institucional · indicadores de impacto medibles · sostenibilidad financiera demostrada · trazabilidad digital del sistema.
          </p>
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section id="contacto" className="py-28 lg:py-40 border-t border-border bg-grain relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <SectionLabel>09 — Conclusión</SectionLabel>
        <blockquote className="font-serif italic text-3xl lg:text-5xl leading-tight max-w-4xl text-foreground">
          "El problema no es lo que produce Misiones, sino cómo lo organiza. Este sistema convierte <span className="text-gradient-hero not-italic font-display font-semibold">organización en desarrollo económico.</span>"
        </blockquote>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: TrendingDown, t: "Reducción de costos logísticos", v: "25–45%" },
            { i: Coins, t: "Ingresos propios municipales", v: "Sostenibles" },
            { i: Leaf, t: "Exportaciones provinciales", v: "+ Crecimiento" },
            { i: Truck, t: "Eficiencia del transporte privado", v: "Optimizada" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-7">
              <x.i className="h-6 w-6 text-[var(--leaf)]" />
              <div className="mt-6 text-sm text-muted-foreground">{x.t}</div>
              <div className="mt-2 font-display text-3xl font-bold">{x.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-primary text-primary-foreground p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(50% 80% at 100% 0%, var(--gold) 0%, transparent 60%)" }} />
          <div className="relative max-w-3xl">
            <h3 className="font-display text-3xl lg:text-5xl font-semibold leading-tight">
              Un sistema que se financia con lo que hoy se desperdicia.
            </h3>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              No proponemos un aumento del gasto público. Proponemos transformar las ineficiencias logísticas existentes en un sistema económico organizado — con reglas claras, incentivos alineados y tecnología como soporte.
            </p>
            <p className="mt-5 text-lg text-primary-foreground/80 leading-relaxed">
              En el fondo, este programa responde a una idea más amplia: la <span className="text-[var(--gold)] font-semibold">soberanía económica de Misiones</span>. Una provincia que coordina su propia logística, administra sus propios datos productivos y capta más valor de lo que produce, depende menos de decisiones y transferencias externas para sostener su desarrollo. La Red de Nodos Logísticos no es solo una mejora operativa — es la infraestructura que le permite a Misiones decidir sobre su propio futuro económico.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--leaf-deep)] px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition">
                Volver al inicio <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display font-semibold">Red de Nodos Logísticos de Misiones</div>
          <div className="text-sm text-muted-foreground mt-1">Programa Provincial · Documento de propuesta v1.0</div>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Provincia de Misiones · Argentina</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Diagnostico />
      <Solucion />
      <Modelo />
      <Impacto />
      <Financiamiento />
      <Sectores />
      <Plataforma />
      <Internacional />
      <Conclusion />
      <Footer />
    </main>
  );
}