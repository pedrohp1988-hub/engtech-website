import { cn } from "@/lib/utils";

export function EngTechLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-amber text-ink shadow-lg shadow-amber/20">
        <svg viewBox="0 0 44 44" aria-hidden="true" className="size-8">
          <path
            d="M22 5v6M22 33v6M5 22h6M33 22h6M10 10l4 4M30 30l4 4M34 10l-4 4M14 30l-4 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M27.2 16.7a7.3 7.3 0 1 0 0 10.6 7.3 7.3 0 0 1 0-10.6Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[15px] font-black tracking-[0.12em]">
            ENGTECH
          </span>
          <span className="mt-1 block text-[9px] font-bold tracking-[0.2em] text-slate-300">
            HVAC SOLUTIONS USA
          </span>
        </span>
      )}
    </span>
  );
}
