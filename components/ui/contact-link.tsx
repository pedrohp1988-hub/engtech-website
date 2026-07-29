"use client";

import type { ComponentProps, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type AnchorProps = Omit<ComponentProps<"a">, "href" | "children" | "onClick">;

export function PhoneLink({
  phone,
  children,
  className,
  location,
  ...props
}: AnchorProps & {
  phone: string;
  children: ReactNode;
  location: string;
}) {
  return (
    <a
      {...props}
      href={`tel:${phone}`}
      className={cn(className)}
      onClick={() =>
        trackEvent("phone_click", {
          location,
          page_path: window.location.pathname,
        })
      }
    >
      {children}
    </a>
  );
}

export function EmailLink({
  email,
  children,
  className,
  location,
  ...props
}: AnchorProps & {
  email: string;
  children: ReactNode;
  location: string;
}) {
  return (
    <a
      {...props}
      href={`mailto:${email}`}
      className={cn(className)}
      onClick={() =>
        trackEvent("email_click", {
          location,
          page_path: window.location.pathname,
        })
      }
    >
      {children}
    </a>
  );
}
