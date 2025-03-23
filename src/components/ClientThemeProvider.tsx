'use client';

import { ThemeProvider } from "@/components/ThemeProvider";

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
} 