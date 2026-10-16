import { ORG_NAME } from "@/lib/site";

/** Isotipo y nombre de Tacuara, con la tipografía de su marca (Inter Tight). */
export function TacuaraBrand({ size = "md", sub, tone = "primary" }: { size?: "sm" | "md"; sub?: string; tone?: "primary" | "light" }) {
  const sm = size === "sm";
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src="/tacuara-mark-bn-96.webp"
        alt=""
        width={40}
        height={40}
        className={`${sm ? "h-8 w-8" : "h-10 w-10"} rounded-md border border-border object-cover`}
      />
      <span className={`${sm ? "text-xl" : "text-[1.65rem]"} font-extrabold lowercase leading-none tracking-[-0.03em] ${tone === "light" ? "text-deep-foreground" : "text-primary"}`}>
        {ORG_NAME}
      </span>
      {sub && (
        <span className="hidden border-l border-dashed border-border pl-3 font-mono text-[0.75rem] uppercase leading-[1.3] tracking-[0.04em] text-muted-foreground lg:block">
          {sub}
        </span>
      )}
    </span>
  );
}
