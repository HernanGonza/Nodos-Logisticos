import { Gauge, Globe2, Landmark, Truck, type LucideIcon } from "lucide-react";

export const SITE_URL = "https://soberania.tacuara.com.ar";
export const SITE_NAME = "Soberanía Económica · Misiones";
export const SITE_TITLE = "Soberanía Económica de Misiones";
export const DOC_VERSION = "Documento de propuesta v1.0 · 2026";

export type ProjectPath =
  | "/nodos-logisticos"
  | "/fondo-estabilidad"
  | "/captura-de-valor"
  | "/integracion-fronteriza";

export type Project = {
  to: ProjectPath;
  /** Nombre completo del proyecto. */
  name: string;
  /** Etiqueta corta para la navegación. */
  short: string;
  /** Una línea de qué resuelve. */
  summary: string;
  icon: LucideIcon;
};

export const PROJECTS: Project[] = [
  {
    to: "/nodos-logisticos",
    name: "Red de Nodos Logísticos de Misiones",
    short: "Nodos Logísticos",
    summary: "Organiza la carga, el almacenamiento, los subproductos y la capacidad ociosa para bajar el costo logístico sin aumentar el gasto público.",
    icon: Truck,
  },
  {
    to: "/fondo-estabilidad",
    name: "Fondo Misionero de Estabilidad e Infraestructura",
    short: "Fondo de Estabilidad",
    summary: "Da a la Provincia un colchón propio para sostener las obras productivas y los programas cuando cae la recaudación.",
    icon: Landmark,
  },
  {
    to: "/captura-de-valor",
    name: "Programa de Captura de Valor Territorial",
    short: "Captura de Valor",
    summary: "Usa una regla objetiva y medible para premiar la transformación local en lugar de repartir beneficios caso por caso.",
    icon: Gauge,
  },
  {
    to: "/integracion-fronteriza",
    name: "Programa de Integración Productiva Fronteriza",
    short: "Integración Fronteriza",
    summary: "Convierte la frontera con Brasil y Paraguay en un mercado para las pymes misioneras, con información, contactos y métricas.",
    icon: Globe2,
  },
];

type HeadInput = {
  title: string;
  description: string;
  /** Ruta pública, empezando con "/". */
  path: string;
};

/** Meta tags y canonical de una página. Todas las URLs absolutas salen de SITE_URL. */
export function pageHead({ title, description, path }: HeadInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
