import { ModuleGrid, type ModuleItem } from "./ModuleGrid";

/** Cadena de actores (o pasos): cada eslabón con ícono, número y rol. */
export function ActorChain({ items, cols = "md:grid-cols-2 lg:grid-cols-4" }: { items: ModuleItem[]; cols?: string }) {
  return <ModuleGrid items={items} size="lg" cols={cols} />;
}
