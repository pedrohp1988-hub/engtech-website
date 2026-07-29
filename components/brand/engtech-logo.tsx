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
  return (
    <Image
      src={
        compact
          ? "/brand/engtech-icon.svg"
          : white
            ? "/brand/engtech-logo-white.svg"
            : "/brand/engtech-logo-horizontal.svg"
      }
      alt="EngTech HVAC Solutions USA"
      width={compact ? 44 : 224}
      height={compact ? 44 : 48}
      priority
      className={cn(
        "h-auto w-auto",
        compact ? "size-11" : "h-12 w-auto",
        className,
      )}
    />
  );
}
