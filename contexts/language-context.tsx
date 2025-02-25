"use client";

import type { Locale } from "date-fns/locale";
import { enUS } from "date-fns/locale/en-US";
import { ptBR } from "date-fns/locale/pt-BR";
import { type ReactNode, createContext, useContext, useState } from "react";

interface LanguageContextType {
	currentLang: string;
	setCurrentLang: (lang: string) => void;
	dateFnsLocale: Locale;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [currentLang, setCurrentLang] = useState("pt-br");

	const localeMap = {
		en: enUS,
		"pt-br": ptBR,
	};

	const locale =
		localeMap[currentLang as keyof typeof localeMap] ?? localeMap.en;

	return (
		<LanguageContext.Provider
			value={{ currentLang, setCurrentLang, dateFnsLocale: locale }}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
