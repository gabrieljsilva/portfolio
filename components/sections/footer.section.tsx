import type { Translation } from "@/lib/i18n";

export function Footer({ t }: { t: Translation["site"]["footer"] }) {
	return (
		<footer className="mx-auto max-w-[1240px] px-[22px] pb-14 nav:px-12">
			<div className="grid grid-cols-1 gap-6 border-t border-line pt-7 text-[13px] text-muted nav:grid-cols-2">
				<div>{t.copyright}</div>
				<div className="max-w-[52ch] italic">
					{t.quote} · {t.author}
				</div>
			</div>
		</footer>
	);
}
