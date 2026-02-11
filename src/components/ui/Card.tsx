import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Card({ children, className, id }: CardProps) {
  return <div id={id} className={cn("glass-card", className)}>{children}</div>;
}
