import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variant === "primary" &&
          "hover:bg-amber-300 bg-amber text-ink focus-visible:outline-amber",
        variant === "secondary" &&
          "border border-navy/20 bg-white text-navy hover:border-navy",
        variant === "light" &&
          "border border-white/30 text-white hover:bg-white hover:text-ink",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
