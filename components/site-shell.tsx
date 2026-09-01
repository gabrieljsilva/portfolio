import { ThemeProvider } from "@/components/theme-provider";
import { LANG_STORAGE_KEY, type Lang, getHtmlLang } from "@/lib/i18n";
import { Archivo } from "next/font/google";
import type { ReactNode } from "react";

const archivo = Archivo({
	subsets: ["latin"],
	weight: ["400", "600", "800"],
	variable: "--font-archivo",
	display: "swap",
});

/**
 * Roda antes de qualquer paint. Só age na primeira visita a uma rota em
 * português: com preferência salva, ou já em `/en`, ele não faz nada.
 */
const LANGUAGE_REDIRECT = `(function(){try{
var p=location.pathname.replace(/\\/$/,"")||"/";
if(p!=="/"&&p!=="/links")return;
if(localStorage.getItem(${JSON.stringify(LANG_STORAGE_KEY)}))return;
if((navigator.language||"").toLowerCase().indexOf("en")!==0)return;
location.replace(p==="/links"?"/en/links":"/en");
}catch(e){}})();`;

interface SiteShellProps {
	lang: Lang;
	children: ReactNode;
}

export function SiteShell({ lang, children }: SiteShellProps) {
	return (
		<html
			lang={getHtmlLang(lang)}
			className={archivo.variable}
			suppressHydrationWarning
		>
			<body className="font-sans">
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: script bloqueante precisa ser inline para rodar antes do paint
					dangerouslySetInnerHTML={{ __html: LANGUAGE_REDIRECT }}
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
