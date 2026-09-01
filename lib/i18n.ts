import { en } from "@/constants/translations/en";
import { ptBr } from "@/constants/translations/pt-br";

export const LANGS = ["pt-br", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "pt-br";

/** Chave usada pelo seletor de idioma e pelo script de redirecionamento no `<head>`. */
export const LANG_STORAGE_KEY = "gjs.lang";

export type Translation = typeof ptBr;

const dictionaries: Record<Lang, Translation> = { "pt-br": ptBr, en };

/** Valor do atributo `lang` do `<html>`. */
const htmlLang: Record<Lang, string> = { "pt-br": "pt-BR", en: "en" };

export function getTranslations(lang: Lang): Translation {
	return dictionaries[lang];
}

export function getHtmlLang(lang: Lang): string {
	return htmlLang[lang];
}

export function otherLang(lang: Lang): Lang {
	return lang === "pt-br" ? "en" : "pt-br";
}

/**
 * Caminho canônico (`/`, `/links`) → caminho real da rota.
 * Português mora na raiz; inglês mora sob `/en`.
 */
export function localizedPath(lang: Lang, path: "/" | "/links"): string {
	if (lang === DEFAULT_LANG) return path;
	return path === "/" ? "/en" : `/en${path}`;
}

/** Mesma página no outro idioma. */
export function alternatePath(lang: Lang, path: "/" | "/links"): string {
	return localizedPath(otherLang(lang), path);
}
