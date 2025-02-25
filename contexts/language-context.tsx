"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

interface LanguageContextType {
	currentLang: string;
	setCurrentLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [currentLang, setCurrentLang] = useState("en");

	return (
		<LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
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
