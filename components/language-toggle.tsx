"use client";

import { LANG_STORAGE_KEY, type Lang, localizedPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Link from "next/link";

const OPTIONS: ReadonlyArray<{ lang: Lang; label: string }> = [
	{ lang: "pt-br", label: "PT" },
	{ lang: "en", label: "EN" },
];

interface LanguageToggleProps {
	lang: Lang;
	path: "/" | "/links";
	label: string;
}

export function LanguageToggle({ lang, path, label }: LanguageToggleProps) {
	// Gravar a escolha impede o script do <head> de redirecionar na próxima visita.
	function remember(next: Lang) {
		try {
			localStorage.setItem(LANG_STORAGE_KEY, next);
		} catch {
			// Modo privado ou storage bloqueado: a navegação segue mesmo assim.
		}
	}

	return (
		<div
			aria-label={label}
			className="inline-flex overflow-hidden rounded-soft border border-line"
		>
			{OPTIONS.map((option) => {
				const active = option.lang === lang;
				return (
					<Link
						key={option.lang}
						href={localizedPath(option.lang, path)}
						hrefLang={option.lang}
						aria-current={active ? "true" : undefined}
						onClick={() => remember(option.lang)}
						className={cn(
							"px-3 py-2 text-xs font-semibold transition-colors duration-200",
							active
								? "bg-ink text-bg"
								: "text-muted hover:bg-hover hover:text-ink",
						)}
					>
						{option.label}
					</Link>
				);
			})}
		</div>
	);
}
