"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { languages, Language } from "@/i18n";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored) setLang(stored);
  }, []);

  const toggle = () => {
    const next = lang === "en" ? "de" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: languages[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);