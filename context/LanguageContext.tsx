"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type ReactElement,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "@/data/dictionary";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({
  children,
}: LanguageProviderProps): ReactElement => {
  const [locale, setLocale] = useState<Locale>("EN");

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale === "UR" ? "ur" : "en";
    root.dir = locale === "UR" ? "rtl" : "ltr";
  }, [locale]);

  const toggleLocale = (): void => {
    setLocale((prev) => (prev === "EN" ? "UR" : "EN"));
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dictionary: dictionaries[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
