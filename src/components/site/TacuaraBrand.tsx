import { ORG_NAME } from "@/lib/site";

/** Isotipo y nombre de Tacuara, con la tipografía de su marca (Inter Tight). */
export function TacuaraBrand({ size = "md" }: { size?: "sm" | "md" }) {
  const sm = size === "sm";
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src="/tacuara-mark.webp" alt="" width={36} height={36} className={`${sm ? "h-7 w-7" : "h-9 w-9"} object-contain`} />
      <span
        className={`${sm ? "text-xl" : "text-2xl"} font-extrabold lowercase tracking-tight`}
        style={{ fontFamily: '"Inter Tight", ui-sans-serif, system-ui, sans-serif' }}
      >
        {ORG_NAME}
      </span>
    </span>
  );
}
