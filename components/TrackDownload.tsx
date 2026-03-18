"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface TrackDownloadProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  children: ReactNode;
}

export function TrackDownload({
  eventName,
  children,
  ...props
}: TrackDownloadProps) {
  return (
    <a
      {...props}
      download
      onClick={() => track(eventName, { file: props.href ?? "" })}
    >
      {children}
    </a>
  );
}
