import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-amber">
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-8",
            light ? "text-slate-300" : "text-steel",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
