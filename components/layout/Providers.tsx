"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import type { ReactElement, ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps): ReactElement => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
