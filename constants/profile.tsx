import { useLanguage } from "@/contexts/language-context";
import { en, ptBr } from "./translations";

export const profile = en.profile;

export function useTranslations() {
	const { currentLang } = useLanguage();

	const languages = {
		en: en,
		"pt-br": ptBr,
	};

	return languages[currentLang as keyof typeof languages];
}

export type Translation = ReturnType<typeof useTranslations>;
