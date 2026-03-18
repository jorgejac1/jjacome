"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface TrackOutboundProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventProps?: Record<string, string>;
  children: ReactNode;
}

export function TrackOutbound({
  eventName,
  eventProps,
  children,
  ...props
}: TrackOutboundProps) {
  return (
    <a
      {...props}
      onClick={() => track(eventName, { url: props.href ?? "", ...eventProps })}
    >
      {children}
    </a>
  );
}
