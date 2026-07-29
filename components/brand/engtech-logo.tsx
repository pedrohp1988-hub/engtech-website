import Image from "next/image";
import { cn } from "@/lib/utils";

export function EngTechLogo({
  className,
  compact = false,
  white = false,
}: {
  className?: string;
  compact?: boolean;
  white?: boolean;
}) {
  if (compact) {
    return (
      <span
        role="img"
        aria-label="EngTech HVAC Solutions USA"
        className={cn("inline-flex min-w-0 items-center gap-2", className)}
      >
        <Image
          src="/brand/engtech-icon.svg"
          alt=""
          width={44}
          height={44}
          priority
          className="size-10 shrink-0"
        />
        <span className="min-w-0 leading-none">
          <span className="block text-[15px] font-black tracking-[0.1em] text-amber">
            ENGTECH
          </span>
          <span className="mobile-logo-subtitle mt-1 block truncate text-[8px] font-bold tracking-[0.12em] text-white">
            HVAC SOLUTIONS USA
          </span>
        </span>
      </span>
    );
  }

  return (
    <Image
      src={
        white
          ? "/brand/engtech-logo-white.svg"
          : "/brand/engtech-logo-horizontal.svg"
      }
      alt="EngTech HVAC Solutions USA"
      width={compact ? 44 : 224}
      height={compact ? 44 : 48}
      priority
      className={cn("h-auto w-auto", "h-12 w-auto", className)}
    />
  );
}
